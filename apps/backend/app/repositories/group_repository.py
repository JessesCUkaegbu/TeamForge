from sqlalchemy.orm import Session

from app.models import Group, GroupMembership, Waitlist


class GroupRepository:
    def list_open_groups(self, db: Session):
        return db.query(Group).filter(Group.status == "open").all()

    def add_membership(self, db: Session, group_id: int, user_id: int, assigned_role: str):
        membership = GroupMembership(group_id=group_id, user_id=user_id, assigned_role=assigned_role)
        db.add(membership)
        db.commit()
        db.refresh(membership)
        return membership

    def count_memberships(self, db: Session, group_id: int, role: str):
        return (
            db.query(GroupMembership)
            .filter(GroupMembership.group_id == group_id, GroupMembership.assigned_role == role)
            .count()
        )

    def get_waitlist_by_user(self, db: Session, user_id: int):
        return db.query(Waitlist).filter(Waitlist.user_id == user_id).order_by(Waitlist.created_at.desc()).first()
