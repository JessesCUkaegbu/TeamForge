from sqlalchemy.orm import Session

from app.models import Group, Waitlist
from app.repositories.group_repository import GroupRepository


class GroupAssignmentService:
    def __init__(self):
        self.group_repo = GroupRepository()

    def assign(self, db: Session, user_id: int, role: str):
        group = self.find_available_group(db, role)
        if group:
            membership = self.group_repo.add_membership(db, group.id, user_id, role)
            return membership, group

        waitlist = Waitlist(user_id=user_id, role=role, status="waiting")
        db.add(waitlist)
        db.commit()
        db.refresh(waitlist)
        return None, None

    def _has_capacity(self, db: Session, group: Group, role: str) -> bool:
        if group.max_members and len(group.memberships) >= group.max_members:
            return False

        if role == "developer":
            return self.group_repo.count_memberships(db, group.id, role) < group.dev_slots
        if role == "designer":
            return self.group_repo.count_memberships(db, group.id, role) < group.designer_slots
        if role == "pm":
            return self.group_repo.count_memberships(db, group.id, role) < group.pm_slots
        return False

    def find_available_group(self, db: Session, role: str):
        groups = self.group_repo.list_open_groups(db)
        for group in groups:
            if self._has_capacity(db, group, role):
                return group
        return None
