from fastapi import APIRouter

from app.api.v1.endpoints import auth, users, assessments, groups, dashboard, admin

api_router = APIRouter()

api_router.include_router(auth.router, prefix="/auth", tags=["auth"])
api_router.include_router(users.router, prefix="/users", tags=["users"])
api_router.include_router(assessments.router, prefix="/assessments", tags=["assessments"])
api_router.include_router(groups.router, prefix="/groups", tags=["groups"])
api_router.include_router(dashboard.router, prefix="/dashboard", tags=["dashboard"])
api_router.include_router(admin.router, prefix="/admin", tags=["admin"])
