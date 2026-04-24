from sqlalchemy.orm import Session

from app.repositories.assessment_repository import AssessmentRepository
from app.services.group_assignment_service import GroupAssignmentService
from app.services.scoring_service import ScoringService


class AssessmentService:
    def __init__(self):
        self.assessment_repo = AssessmentRepository()
        self.scoring_service = ScoringService()
        self.group_assignment_service = GroupAssignmentService()

    def submit(self, db: Session, user_id: int, role: str, answers: list[dict]):
        questions = self.assessment_repo.get_active_questions_by_role(db, role)
        answers_map = {a["question_id"]: a.get("selected_answer") for a in answers}
        score, passed, correctness = self.scoring_service.score(questions, answers_map)

        attempt = self.assessment_repo.create_attempt(db, user_id, role, score, passed)
        for question_id, is_correct in correctness:
            self.assessment_repo.add_answer(
                db,
                attempt_id=attempt.id,
                question_id=question_id,
                selected_answer=answers_map.get(question_id),
                is_correct=is_correct,
            )

        membership, group = (None, None)
        if passed:
            membership, group = self.group_assignment_service.assign(db, user_id, role)

        return score, passed, group
