from sqlalchemy.orm import Session

from app.core.security import create_access_token, get_password_hash, verify_password
from app.repositories.user_repository import UserRepository


class AuthService:
    def __init__(self):
        self.user_repo = UserRepository()

    def register(self, db: Session, email: str, password: str):
        existing = self.user_repo.get_by_email(db, email)
        if existing:
            raise ValueError("Email already registered")
        password_hash = get_password_hash(password)
        user = self.user_repo.create(db, email=email, password_hash=password_hash)
        return user

    def authenticate(self, db: Session, email: str, password: str):
        user = self.user_repo.get_by_email(db, email)
        if not user:
            return None
        if not verify_password(password, user.password_hash):
            return None
        return user

    def create_token(self, user_id: int) -> str:
        return create_access_token(str(user_id))
