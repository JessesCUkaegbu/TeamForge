from sqlalchemy.orm import Session

from app.repositories.user_repository import UserRepository


class UserService:
    def __init__(self):
        self.user_repo = UserRepository()

    def update_profile(self, db: Session, user_id: int, full_name: str, role: str, skill_level: str, motivation_text: str):
        user = self.user_repo.get(db, user_id)
        if not user:
            raise ValueError("User not found")
        return self.user_repo.update_profile(db, user, full_name, role, skill_level, motivation_text)

    def create_profile(self, db: Session, user_id: int, full_name: str, role: str, skill_level: str, motivation_text: str):
        user = self.user_repo.get(db, user_id)
        if not user:
            raise ValueError("User not found")
        if user.onboarding_completed:
            raise ValueError("Profile already completed")
        return self.user_repo.update_profile(db, user, full_name, role, skill_level, motivation_text)

    def set_onboarding(self, db: Session, user_id: int, onboarding_completed: bool):
        user = self.user_repo.get(db, user_id)
        if not user:
            raise ValueError("User not found")
        return self.user_repo.set_onboarding(db, user, onboarding_completed)
