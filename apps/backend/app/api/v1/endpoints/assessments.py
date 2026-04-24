from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.core.dependencies import get_current_user
from app.repositories.assessment_repository import AssessmentRepository
from app.schemas.assessment import QuestionOut, SubmitRequest, SubmitResponse
from app.services.assessment_service import AssessmentService

router = APIRouter()


@router.get("/questions", response_model=list[QuestionOut])
def list_questions(
    role: str,
    db: Session = Depends(get_db),
    current_user=Depends(get_current_user),
):
    if not current_user.onboarding_completed:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Complete onboarding before taking the assessment",
        )
    questions = AssessmentRepository().get_active_questions_by_role(db, role)
    return questions


@router.post("/submit", response_model=SubmitResponse)
def submit(payload: SubmitRequest, db: Session = Depends(get_db), current_user=Depends(get_current_user)):
    if not current_user.onboarding_completed:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Complete onboarding before taking the assessment",
        )
    if current_user.role and current_user.role != payload.role:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Role mismatch")

    score, passed, group = AssessmentService().submit(
        db,
        user_id=current_user.id,
        role=payload.role,
        answers=[a.model_dump() for a in payload.answers],
    )

    return SubmitResponse(
        score=score,
        passed=passed,
        group_assigned=group is not None,
        whatsapp_link=group.whatsapp_link if group else None,
    )
