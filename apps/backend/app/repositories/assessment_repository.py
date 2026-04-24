from sqlalchemy.orm import Session

from app.models import AssessmentAnswer, AssessmentAttempt, AssessmentQuestion


class AssessmentRepository:
    def get_active_questions_by_role(self, db: Session, role: str):
        return (
            db.query(AssessmentQuestion)
            .filter(AssessmentQuestion.role == role, AssessmentQuestion.is_active == True)
            .all()
        )

    def create_attempt(self, db: Session, user_id: int, role: str, score: int, passed: bool):
        attempt = AssessmentAttempt(user_id=user_id, role=role, score=score, passed=passed)
        db.add(attempt)
        db.commit()
        db.refresh(attempt)
        return attempt

    def add_answer(self, db: Session, attempt_id: int, question_id: int, selected_answer: str, is_correct: bool):
        answer = AssessmentAnswer(
            attempt_id=attempt_id,
            question_id=question_id,
            selected_answer=selected_answer,
            is_correct=is_correct,
        )
        db.add(answer)
        db.commit()
        db.refresh(answer)
        return answer

    def get_latest_attempt_by_user(self, db: Session, user_id: int):
        return (
            db.query(AssessmentAttempt)
            .filter(AssessmentAttempt.user_id == user_id)
            .order_by(AssessmentAttempt.submitted_at.desc())
            .first()
        )
