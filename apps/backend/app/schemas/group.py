from typing import Optional

from pydantic import BaseModel


class GroupOut(BaseModel):
    id: int
    name: str
    whatsapp_link: Optional[str] = None
    status: str
    max_members: int
    dev_slots: int
    designer_slots: int
    pm_slots: int

    class Config:
        from_attributes = True
