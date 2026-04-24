from typing import List, Optional

from pydantic import BaseModel


class QuestionOut(BaseModel):
    id: int
    role: str
    question_text: str
    question_type: str
    options_json: Optional[str] = None
    points: int

    class Config:
        from_attributes = True


class AnswerIn(BaseModel):
    question_id: int
    selected_answer: Optional[str] = None


class SubmitRequest(BaseModel):
    role: str
    answers: List[AnswerIn]


class SubmitResponse(BaseModel):
    score: int
    passed: bool
    group_assigned: bool
    whatsapp_link: Optional[str] = None
