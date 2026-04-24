from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.models import AssessmentQuestion, Group

router = APIRouter()


@router.post("/seed")
def seed(db: Session = Depends(get_db)):
    if not db.query(AssessmentQuestion).first():
        questions = [
            AssessmentQuestion(
                role="developer",
                question_text="What does HTTP stand for?",
                question_type="multiple_choice",
                options_json='["HyperText Transfer Protocol", "HighText Transfer Process"]',
                correct_answer="HyperText Transfer Protocol",
                points=5,
            ),
            AssessmentQuestion(
                role="designer",
                question_text="What is a wireframe?",
                question_type="text",
                correct_answer="basic layout",
                points=5,
            ),
            AssessmentQuestion(
                role="pm",
                question_text="What is a PRD?",
                question_type="text",
                correct_answer="product requirements document",
                points=5,
            ),
        ]
        db.add_all(questions)

    if not db.query(Group).first():
        groups = [
            Group(
                name="Alpha Team",
                whatsapp_link="https://chat.whatsapp.com/alpha",
                status="open",
                max_members=6,
                dev_slots=2,
                designer_slots=2,
                pm_slots=2,
            )
        ]
        db.add_all(groups)

    db.commit()
    return {"message": "Seeded"}
