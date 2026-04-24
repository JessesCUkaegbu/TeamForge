from fastapi import APIRouter, Depends

from app.core.database import get_db
from app.core.dependencies import get_current_user
from app.repositories.assessment_repository import AssessmentRepository
from app.repositories.group_repository import GroupRepository

router = APIRouter()


@router.get("/")
def dashboard(db=Depends(get_db), current_user=Depends(get_current_user)):
    latest_attempt = AssessmentRepository().get_latest_attempt_by_user(db, current_user.id)
    waitlist_entry = GroupRepository().get_waitlist_by_user(db, current_user.id)

    membership = next(iter(current_user.group_memberships), None)
    group = membership.group if membership else None

    assessment = None
    if latest_attempt:
        assessment = {
            "score": latest_attempt.score,
            "passed": latest_attempt.passed,
            "submitted_at": latest_attempt.submitted_at,
        }

    group_data = None
    if group and latest_attempt and latest_attempt.passed:
        group_data = {
            "id": group.id,
            "name": group.name,
            "status": group.status,
            "whatsapp_link": group.whatsapp_link,
        }

    return {
        "user": {
            "id": current_user.id,
            "email": current_user.email,
            "full_name": current_user.full_name,
            "role": current_user.role,
            "skill_level": current_user.skill_level,
            "onboarding_completed": current_user.onboarding_completed,
        },
        "assessment": assessment,
        "group": group_data,
        "waitlist": {
            "status": waitlist_entry.status,
            "role": waitlist_entry.role,
            "created_at": waitlist_entry.created_at,
        } if waitlist_entry else None,
    }
