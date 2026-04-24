from sqlalchemy.orm import Session

from app.models import AssessmentQuestion


class QuestionRepository:
    def create(self, db: Session, **kwargs):
        question = AssessmentQuestion(**kwargs)
        db.add(question)
        db.commit()
        db.refresh(question)
        return question
