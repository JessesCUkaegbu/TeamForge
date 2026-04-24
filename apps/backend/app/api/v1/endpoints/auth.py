from fastapi import APIRouter, Depends, HTTPException, Request, status
from sqlalchemy.orm import Session
from pydantic import ValidationError

from app.core.database import get_db
from app.schemas.auth import LoginRequest, RegisterRequest, Token
from app.schemas.user import UserOut, UserProfileUpdate
from app.core.dependencies import get_current_user
from app.services.auth_service import AuthService
from app.services.user_service import UserService

router = APIRouter()


@router.post("/register", response_model=UserOut)
def register(payload: RegisterRequest, db: Session = Depends(get_db)):
    try:
        user = AuthService().register(db, payload.email, payload.password)
        return user
    except ValueError as exc:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail=str(exc))


@router.post("/login", response_model=Token)
async def login(
    request: Request,
    db: Session = Depends(get_db),
):
    email = None
    password = None
    content_type = (request.headers.get("content-type") or "").lower()

    if "application/json" in content_type:
        try:
            data = await request.json()
            payload = LoginRequest(**data)
            email = payload.email
            password = payload.password
        except (ValidationError, ValueError):
            raise HTTPException(status_code=status.HTTP_422_UNPROCESSABLE_ENTITY, detail="Invalid credentials payload")
    else:
        form = await request.form()
        email = form.get("username") or form.get("email")
        password = form.get("password")

    if not email or not password:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Missing credentials")

    user = AuthService().authenticate(db, email, password)
    if not user:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
    token = AuthService().create_token(user.id)
    return Token(access_token=token)


@router.get("/me", response_model=UserOut)
def me(current_user=Depends(get_current_user)):
    return current_user


@router.put("/profile", response_model=UserOut)
def complete_profile(payload: UserProfileUpdate, db: Session = Depends(get_db), current_user=Depends(get_current_user)):
    try:
        return UserService().update_profile(
            db,
            current_user.id,
            payload.full_name,
            payload.role,
            payload.skill_level,
            payload.motivation_text,
        )
    except ValueError as exc:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=str(exc))
