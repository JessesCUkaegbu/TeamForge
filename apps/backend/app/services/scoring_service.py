from typing import List, Tuple

from app.models import AssessmentQuestion
from app.utils.constants import PASSING_SCORE_PERCENT


class ScoringService:
    def score(self, questions: List[AssessmentQuestion], answers_map: dict[int, str]) -> Tuple[int, bool, list[tuple[int, bool]]]:
        total_points = sum(q.points for q in questions) or 1
        earned = 0
        correctness: list[tuple[int, bool]] = []

        for question in questions:
            selected = answers_map.get(question.id)
            is_correct = selected is not None and question.correct_answer == selected
            if is_correct:
                earned += question.points
            correctness.append((question.id, is_correct))

        percent = int((earned / total_points) * 100)
        passed = percent >= PASSING_SCORE_PERCENT
        return earned, passed, correctness
