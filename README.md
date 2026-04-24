# Team Formation Platform

A full-stack application for forming teams based on skills, preferences, and assessments.

## Tech Stack

- **Backend**: FastAPI (Python)
- **Frontend**: Next.js (React/TypeScript)
- **Database**: SQLAlchemy with Alembic migrations
- **Authentication**: JWT-based auth

## Project Structure

```
team-formation-platform/
├── apps/
│   ├── backend/          # FastAPI backend
│   │   ├── app/
│   │   │   ├── api/      # API routes
│   │   │   ├── core/    # Core config, database
│   │   │   ├── models/  # SQLAlchemy models
│   │   │   ├── repositories/
│   │   │   ├── schemas/ # Pydantic schemas
│   │   │   ├── services/
│   │   │   └── utils/
│   │   └── tests/       # Backend tests
│   └── frontend/         # Next.js frontend
│       └── src/
│           ├── app/
│           ├── components/
│           ├── hooks/
│           ├── lib/
│           ├── services/
│           ├── store/
│           └── types/
└── myenv/                # Python virtual environment
```

## Getting Started

### Prerequisites

- Python 3.10+
- Node.js 18+
- PostgreSQL (optional, defaults to SQLite)

### Backend Setup

```bash
cd apps/backend
python -m venv ../../myenv
source ../../myenv/Scripts/activate  # Windows
# source ../../myenv/bin/activate    # Linux/Mac

pip install -r requirements.txt

# Run the backend
uvicorn app.main:app --reload
```

### Frontend Setup

```bash
cd apps/frontend
npm install
npm run dev
```

## Environment Variables

Create `.env` files in `apps/backend/` and `apps/frontend/`:

**Backend** (`apps/backend/.env`):
```env
SECRET_KEY=your-secret-key
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30
DATABASE_URL=sqlite:///./team_formation.db
```

**Frontend** (`apps/frontend/.env.local`):
```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
```

## API Documentation

Once the backend is running, visit:
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

## License

MIT