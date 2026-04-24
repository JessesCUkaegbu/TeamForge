from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.core.dependencies import get_current_user
from app.models import Group
from app.schemas.group import GroupOut
from app.repositories.assessment_repository import AssessmentRepository
from app.services.group_assignment_service import GroupAssignmentService

router = APIRouter()


@router.get("/me", response_model=GroupOut | None)
def my_group(db: Session = Depends(get_db), current_user=Depends(get_current_user)):
    membership = next(iter(current_user.group_memberships), None)

    if not membership:
        return None

    latest_attempt = AssessmentRepository().get_latest_attempt_by_user(db, current_user.id)
    if not latest_attempt or not latest_attempt.passed:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Pass the assessment to access group details",
        )

    return db.query(Group).filter(Group.id == membership.group_id).first()


@router.get("/available", response_model=GroupOut | None)
def available_group(role: str, db: Session = Depends(get_db)):
    return GroupAssignmentService().find_available_group(db, role)
