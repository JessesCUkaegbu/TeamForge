from sqlalchemy import Column, DateTime, Integer, String
from sqlalchemy.orm import relationship

from app.core.database import Base
from app.utils.helpers import utc_now


class Group(Base):
    __tablename__ = "groups"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=False)
    whatsapp_link = Column(String, nullable=True)
    status = Column(String, default="open")
    max_members = Column(Integer, default=0)
    dev_slots = Column(Integer, default=0)
    designer_slots = Column(Integer, default=0)
    pm_slots = Column(Integer, default=0)
    created_at = Column(DateTime(timezone=True), default=utc_now)

    memberships = relationship("GroupMembership", back_populates="group")
