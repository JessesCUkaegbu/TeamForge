from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import relationship

from app.core.database import Base
from app.utils.helpers import utc_now


class AssessmentQuestion(Base):
    __tablename__ = "assessment_questions"

    id = Column(Integer, primary_key=True, index=True)
    role = Column(String, nullable=False)
    question_text = Column(String, nullable=False)
    question_type = Column(String, nullable=False)
    options_json = Column(String, nullable=True)
    correct_answer = Column(String, nullable=True)
    points = Column(Integer, default=1)
    is_active = Column(Boolean, default=True)


class AssessmentAttempt(Base):
    __tablename__ = "assessment_attempts"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)
    role = Column(String, nullable=False)
    score = Column(Integer, default=0)
    passed = Column(Boolean, default=False)
    submitted_at = Column(DateTime(timezone=True), default=utc_now)

    user = relationship("User", back_populates="assessment_attempts")
    answers = relationship("AssessmentAnswer", back_populates="attempt")


class AssessmentAnswer(Base):
    __tablename__ = "assessment_answers"

    id = Column(Integer, primary_key=True, index=True)
    attempt_id = Column(Integer, ForeignKey("assessment_attempts.id"), nullable=False)
    question_id = Column(Integer, ForeignKey("assessment_questions.id"), nullable=False)
    selected_answer = Column(String, nullable=True)
    is_correct = Column(Boolean, default=False)

    attempt = relationship("AssessmentAttempt", back_populates="answers")
    question = relationship("AssessmentQuestion")
