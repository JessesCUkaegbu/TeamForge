from fastapi import APIRouter, Depends, HTTPException, status

from app.core.database import get_db
from app.core.dependencies import get_current_user
from app.schemas.user import OnboardingUpdate, UserOut, UserProfileUpdate
from app.services.user_service import UserService

router = APIRouter()


@router.get("/me", response_model=UserOut)
def get_me(current_user=Depends(get_current_user)):
    return current_user


@router.put("/profile", response_model=UserOut)
def update_profile(
    payload: UserProfileUpdate,
    current_user=Depends(get_current_user),
    db=Depends(get_db),
):
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


@router.post("/profile", response_model=UserOut)
def create_profile(
    payload: UserProfileUpdate,
    current_user=Depends(get_current_user),
    db=Depends(get_db),
):
    try:
        return UserService().create_profile(
            db,
            current_user.id,
            payload.full_name,
            payload.role,
            payload.skill_level,
            payload.motivation_text,
        )
    except ValueError as exc:
        status_code = status.HTTP_400_BAD_REQUEST
        if str(exc) == "User not found":
            status_code = status.HTTP_404_NOT_FOUND
        raise HTTPException(status_code=status_code, detail=str(exc))


@router.patch("/onboarding", response_model=UserOut)
def set_onboarding(
    payload: OnboardingUpdate,
    current_user=Depends(get_current_user),
    db=Depends(get_db),
):
    try:
        return UserService().set_onboarding(db, current_user.id, payload.onboarding_completed)
    except ValueError as exc:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=str(exc))
