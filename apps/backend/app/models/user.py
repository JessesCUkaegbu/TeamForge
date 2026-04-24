from sqlalchemy import Boolean, Column, DateTime, Integer, String
from sqlalchemy.orm import relationship

from app.core.database import Base
from app.utils.helpers import utc_now


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    full_name = Column(String, nullable=True)
    email = Column(String, unique=True, index=True, nullable=False)
    password_hash = Column(String, nullable=False)
    role = Column(String, nullable=True)
    skill_level = Column(String, nullable=True)
    motivation_text = Column(String, nullable=True)
    onboarding_completed = Column(Boolean, default=False)
    is_active = Column(Boolean, default=True)
    created_at = Column(DateTime(timezone=True), default=utc_now)
    updated_at = Column(DateTime(timezone=True), default=utc_now, onupdate=utc_now)

    assessment_attempts = relationship("AssessmentAttempt", back_populates="user")
    group_memberships = relationship("GroupMembership", back_populates="user")
    waitlist_entries = relationship("Waitlist", back_populates="user")
