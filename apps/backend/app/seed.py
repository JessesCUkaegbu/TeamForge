from app.core.database import SessionLocal
from app.models import AssessmentQuestion, Group


def run():
    db = SessionLocal()
    try:
        if not db.query(AssessmentQuestion).first():
            db.add_all(
                [
                    AssessmentQuestion(
                        role="developer",
                        question_text="What does HTTP stand for?",
                        question_type="multiple_choice",
                        options_json='["HyperText Transfer Protocol", "HighText Transfer Process"]',
                        correct_answer="HyperText Transfer Protocol",
                        points=5,
                    )
                ]
            )

        if not db.query(Group).first():
            db.add(
                Group(
                    name="Alpha Team",
                    whatsapp_link="https://chat.whatsapp.com/alpha",
                    status="open",
                    max_members=6,
                    dev_slots=2,
                    designer_slots=2,
                    pm_slots=2,
                )
            )
        db.commit()
    finally:
        db.close()


if __name__ == "__main__":
    run()
