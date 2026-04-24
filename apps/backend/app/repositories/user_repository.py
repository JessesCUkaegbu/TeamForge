from sqlalchemy.orm import Session

from app.models import User


class UserRepository:
    def get_by_email(self, db: Session, email: str):
        return db.query(User).filter(User.email == email).first()

    def get(self, db: Session, user_id: int):
        return db.query(User).filter(User.id == user_id).first()

    def create(self, db: Session, email: str, password_hash: str):
        user = User(email=email, password_hash=password_hash)
        db.add(user)
        db.commit()
        db.refresh(user)
        return user

    def update_profile(self, db: Session, user: User, full_name: str, role: str, skill_level: str, motivation_text: str):
        user.full_name = full_name
        user.role = role
        user.skill_level = skill_level
        user.motivation_text = motivation_text
        user.onboarding_completed = True
        db.commit()
        db.refresh(user)
        return user

    def set_onboarding(self, db: Session, user: User, onboarding_completed: bool):
        user.onboarding_completed = onboarding_completed
        db.commit()
        db.refresh(user)
        return user
