import enum


class Role(str, enum.Enum):
    developer = "developer"
    designer = "designer"
    pm = "pm"


class SkillLevel(str, enum.Enum):
    beginner = "beginner"
    intermediate = "intermediate"


class GroupStatus(str, enum.Enum):
    open = "open"
    full = "full"
    inactive = "inactive"


class WaitlistStatus(str, enum.Enum):
    waiting = "waiting"
    assigned = "assigned"
