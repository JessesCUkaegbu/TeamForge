from typing import Optional

from pydantic import BaseModel, EmailStr


class UserOut(BaseModel):
    id: int
    email: EmailStr
    full_name: Optional[str] = None
    role: Optional[str] = None
    skill_level: Optional[str] = None
    motivation_text: Optional[str] = None
    onboarding_completed: bool
    is_active: bool

    class Config:
        from_attributes = True


class UserProfileUpdate(BaseModel):
    full_name: str
    role: str
    skill_level: str
    motivation_text: str


class OnboardingUpdate(BaseModel):
    onboarding_completed: bool
