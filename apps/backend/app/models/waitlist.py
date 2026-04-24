from sqlalchemy import Column, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from app.core.database import Base
from app.utils.helpers import utc_now


class Waitlist(Base):
    __tablename__ = "waitlist"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    role = Column(String, nullable=False)
    status = Column(String, default="waiting")
    created_at = Column(DateTime(timezone=True), default=utc_now)

    user = relationship("User", back_populates="waitlist_entries")
