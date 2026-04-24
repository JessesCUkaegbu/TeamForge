# TeamForge - Product Requirements Document (PRD)

## MVP Version 1.0

---

## 1. Executive Summary

**TeamForge** is a team formation platform that matches developers, designers, and product managers into real-world collaboration groups for building projects together.

**Core Value Proposition:** "Learn by building, not by waiting" — users don't just consume content, they ship real projects with real teams.

**Target Users:**
- Junior/mid-level developers seeking collaboration experience
- Designers wanting cross-functional team exposure
- Product Managers building practical skills

---

## 2. User Flow Overview

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Register  │───▶│  Onboarding  │───▶│ Assessment  │───▶│   Results   │───▶│   Dashboard │
│   (Sign up) │    │ (Role Pick)  │    │   (Quiz)    │    │ (Pass/Fail) │    │  (My Team)  │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
                                                                                      │
                                                                                      ▼
                                                                              ┌─────────────┐
                                                                              │  WhatsApp   │
                                                                              │   Group     │
                                                                              └─────────────┘
```

---

## 3. User Stories

### 3.1 Authentication & Registration

| ID | Story | Priority | Status |
|----|-------|----------|--------|
| AUTH-001 | As a new user, I want to register with my email and password so that I can create an account | P0 | ⚠️ Stub |
| AUTH-002 | As a registered user, I want to log in with my email and password so that I can access my account | P0 | ⚠️ Stub |
| AUTH-003 | As a logged-in user, I want to receive a JWT token so that I can authenticate subsequent requests | P0 | ✅ Done |
| AUTH-004 | As a logged-in user, I want to view my profile so that I can verify my information | P0 | ✅ Done |

**Acceptance Criteria:**
- [ ] User can register with email (unique) and password (min 8 chars)
- [ ] User can login and receive JWT token valid for 30 minutes
- [ ] Protected routes require valid JWT token
- [ ] Duplicate email registration returns 400 error

---

### 3.2 Onboarding

| ID | Story | Priority | Status |
|----|-------|----------|--------|
| ONBOARD-001 | As a new user, I want to select my role (Developer/Designer/PM) during onboarding so that I can be matched with the right team | P0 | ⚠️ Empty |
| ONBOARD-002 | As a new user, I want to indicate my skill level (Beginner/Intermediate/Advanced) so that I can be matched with compatible teammates | P0 | ⚠️ Empty |
| ONBOARD-003 | As a new user, I want to write a short motivation text so that I can express why I want to join | P0 | ⚠️ Empty |
| ONBOARD-004 | As a new user, I want to complete onboarding before taking assessment so that my profile is ready | P0 | ⚠️ Empty |

**Acceptance Criteria:**
- [ ] User must complete all onboarding fields before accessing assessment
- [ ] Role selection is required (Developer, Designer, or PM)
- [ ] Skill level selection is required
- [ ] Motivation text is optional (max 500 chars)
- [ ] Onboarding completion is tracked in user profile

---

### 3.3 Assessment

| ID | Story | Priority | Status |
|----|-------|----------|--------|
| ASSESS-001 | As a user who completed onboarding, I want to take a role-specific assessment so that my skills can be evaluated | P0 | ⚠️ Empty |
| ASSESS-002 | As a user, I want to see questions relevant to my selected role so that I can demonstrate my abilities | P0 | ✅ Done |
| ASSESS-003 | As a user, I want to see a timer during the assessment so that I know my time limit | P0 | ⚠️ Empty |
| ASSESS-004 | As a user, I want to submit my answers and receive a score so that I know how I performed | P0 | ✅ Done |
| ASSESS-005 | As a user, I want to pass with 70% or higher so that I can join a team | P0 | ✅ Done |

**Acceptance Criteria:**
- [ ] Assessment only accessible after onboarding completion
- [ ] Questions filtered by user's selected role
- [ ] Minimum 10 questions per role
- [ ] Passing score: 70% or higher
- [ ] Score and pass/fail result displayed after submission
- [ ] User cannot retake assessment immediately (cooldown period)

---

### 3.4 Team Formation & Assignment

| ID | Story | Priority | Status |
|----|-------|----------|--------|
| TEAM-001 | As a user who passed the assessment, I want to be automatically assigned to a team so that I can start collaborating | P0 | ✅ Done |
| TEAM-002 | As a user, I want to join a team with my selected role so that I work on what I'm best at | P0 | ✅ Done |
| TEAM-003 | As a user who passed but no slots available, I want to be added to a waitlist so that I can be notified when a spot opens | P0 | ✅ Done |
| TEAM-004 | As a user, I want to see my assigned team's WhatsApp link so that I can join the group chat | P0 | ✅ Done |
| TEAM-005 | As a team member, I want to see my team details (name, members, project) so that I know who I'm working with | P0 | ⚠️ Empty |

**Acceptance Criteria:**
- [ ] On passing, user automatically assigned to group with open role slots
- [ ] Group size limit: 6 members max (2 devs, 2 designers, 2 PMs)
- [ ] Waitlist entry created if no slots available
- [ ] WhatsApp link visible only to passed users
- [ ] Group details page shows all members and their roles

---

### 3.5 Dashboard

| ID | Story | Priority | Status |
|----|-------|----------|--------|
| DASH-001 | As a logged-in user, I want to view my dashboard so that I can see my current status | P0 | ⚠️ Empty |
| DASH-002 | As a user, I want to see my assessment history so that I can track my progress | P0 | ✅ Done |
| DASH-003 | As a user, I want to see if I'm in a group or on the waitlist so that I know my team status | P0 | ✅ Done |
| DASH-004 | As a user, I want to see my profile information so that I can verify my details | P0 | ⚠️ Empty |
| DASH-005 | As a user, I want to update my profile so that I can keep my information current | P0 | ✅ Done |

**Acceptance Criteria:**
- [ ] Dashboard shows user profile summary
- [ ] Assessment history with scores and dates displayed
- [ ] Group assignment status (in group / waitlist / not taken)
- [ ] Quick links to assessment (if not passed) or group (if passed)
- [ ] Profile edit capability

---

### 3.6 Public Pages

| ID | Story | Priority | Status |
|----|-------|----------|--------|
| PUB-001 | As a visitor, I want to view the landing page so that I can understand what the platform offers | P0 | ✅ Done |
| PUB-002 | As a visitor, I want to view the "How it Works" page so that I understand the process | P0 | ⚠️ Empty |
| PUB-003 | As a visitor, I want to view the FAQ page so that I can get common questions answered | P0 | ⚠️ Empty |
| PUB-004 | As a visitor, I want to view Sample Projects page so that I can see what teams build | P0 | ⚠️ Stub |

**Acceptance Criteria:**
- [ ] Landing page clearly explains value proposition
- [ ] How it Works shows 3-step process with visuals
- [ ] FAQ covers at least 10 common questions
- [ ] Sample Projects shows 3+ example team projects

---

## 4. Technical Requirements

### 4.1 Backend (FastAPI)

| Component | Requirement |
|-----------|-------------|
| **Framework** | FastAPI |
| **Database** | SQLAlchemy with SQLite (dev) / PostgreSQL (prod) |
| **Auth** | JWT with 30-minute expiry |
| **API Version** | v1 |
| **CORS** | Configurable origins |

### 4.2 Frontend (Next.js)

| Component | Requirement |
|-----------|-------------|
| **Framework** | Next.js 14+ (App Router) |
| **Language** | TypeScript |
| **UI** | Custom CSS Modules |
| **State** | Client-side state management |
| **API Client** | Fetch with JWT headers |

---

## 5. Data Models

### User
- id, email, password_hash, full_name, role, skill_level, motivation_text, onboarding_completed, is_active, created_at, updated_at

### AssessmentQuestion
- id, role, question_text, question_type, options_json, correct_answer, points, is_active

### AssessmentAttempt
- id, user_id, role, score, passed, submitted_at

### Group
- id, name, whatsapp_link, status, max_members, dev_slots, designer_slots, pm_slots, created_at

### GroupMembership
- id, group_id, user_id, assigned_role, joined_at

### Waitlist
- id, user_id, role, status, created_at

---

## 6. Out of Scope (MVP)

The following features are deferred to future versions:

- [ ] Email verification
- [ ] Password reset
- [ ] Payment/subscription system
- [ ] Admin dashboard UI
- [ ] Project submission & tracking
- [ ] Real-time messaging
- [ ] Push notifications
- [ ] Analytics/reporting
- [ ] Multiple assessment retakes
- [ ] Team project templates

---

## 7. Success Metrics

| Metric | Target |
|--------|--------|
| User registration conversion | > 60% |
| Onboarding completion rate | > 80% |
| Assessment pass rate | 60-70% |
| Team assignment rate (of passers) | > 85% |
| Page load time | < 2 seconds |

---

## 8. Timeline Estimate

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| **Phase 1: Auth & Onboarding** | 1 week | Login/Register forms, Profile completion |
| **Phase 2: Assessment UI** | 1 week | Quiz interface, Timer, Results display |
| **Phase 3: Dashboard & Team** | 1 week | User dashboard, Group details page |
| **Phase 4: Public Pages** | 1 week | How it Works, FAQ, Sample Projects |
| **Phase 5: Testing & Polish** | 1 week | Bug fixes, UI polish, Deployment |

**Total MVP Estimate:** 5 weeks

---

*Document Version: 1.0*
*Created: April 24, 2026*