# VG Learning - Motion-Driven Full Stack Learning Platform

VG Learning is an interactive educational platform with an Angular frontend and a Node.js + Express backend, both written in TypeScript.

## Technology Stack

- **Frontend:** Angular (standalone), TypeScript, Angular animations, responsive CSS
- **Backend:** Node.js, Express, TypeScript

## Project Structure

```text
.
├── backend
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── models
│   │   ├── routes
│   │   ├── services
│   │   ├── types
│   │   ├── app.ts
│   │   └── server.ts
└── frontend
    ├── src
    │   ├── app
    │   │   ├── core
    │   │   ├── features/fullstack-learning
    │   │   └── shared/components
    │   └── assets/diagrams
```

## Backend Setup (http://localhost:3000)

```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

### Backend API

- `GET /api/learning/fullstack`
- Response schema:

```json
[
  {
    "section": "APIs",
    "level": "beginner",
    "title": "REST API Design and Request Lifecycle",
    "explanation": "...",
    "realWorldExample": "...",
    "workflowSteps": ["..."],
    "commonMistakes": ["..."],
    "bestPractices": ["..."],
    "codeExamples": [
      {
        "title": "Express REST route",
        "language": "typescript",
        "description": "...",
        "code": "..."
      }
    ],
    "diagrams": [
      {
        "id": "api-request-lifecycle",
        "title": "API Request Lifecycle",
        "path": "/assets/diagrams/api-request-lifecycle.svg",
        "description": "..."
      }
    ]
  }
]
```

## Frontend Setup (http://localhost:4200)

```bash
cd frontend
npm install
npm start
```

## Highlights

- Motion-inspired UI with animated wrappers, interactive learning cards, and smooth tab transitions.
- Expand/collapse learning modules with Beginner / Intermediate / Advanced content slices.
- Copy-to-clipboard code blocks for all major syntax and framework examples.
- Diagram visualizations for API lifecycle, JWT flow, Angular flow, Node request pipeline, and CORS behavior.
- Enterprise-friendly architecture with reusable Angular shared components and strongly typed backend models.

## Testing and Coverage Quality Gates

### Backend

```bash
cd backend
npm run test
npm run test:coverage
```

- Unit and integration tests use Mocha, Chai, and Supertest.
- Coverage is enforced with NYC at **99% minimum** across statements, branches, functions, and lines.

### Frontend

```bash
cd frontend
npm run test
npm run test:coverage
```

- Angular unit/component/service tests run with Karma + Jasmine in headless Chrome.
- Coverage is enforced at **95% minimum** globally.

### CI Automation

- `.github/workflows/ci.yml` runs backend and frontend tests and enforces coverage thresholds.
- `.github/workflows/pr-summary.yml` runs a free PR summary bot that comments categorized change summaries on pull requests.
