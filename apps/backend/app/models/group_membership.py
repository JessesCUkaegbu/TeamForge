from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from app.core.database import Base
from app.utils.helpers import utc_now


class GroupMembership(Base):
    __tablename__ = "group_memberships"

    id = Column(Integer, primary_key=True, index=True)
    group_id = Column(Integer, ForeignKey("groups.id"), nullable=False)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    assigned_role = Column(String, nullable=False)
    joined_at = Column(DateTime(timezone=True), default=utc_now)

    group = relationship("Group", back_populates="memberships")
    user = relationship("User", back_populates="group_memberships")
