# VG Learning - Enterprise Full Stack Learning Platform

VG Learning is a full stack educational web application with an Angular frontend and Node.js + Express backend, both written in TypeScript.

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
│   ├── package.json
│   └── tsconfig.json
└── frontend
    ├── src/app
    │   ├── core
    │   ├── features/fullstack-learning
    │   └── shared
    ├── angular.json
    └── package.json
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
- Response:

```json
[
  {
    "section": "APIs",
    "content": "..."
  }
]
```

## Frontend Setup (http://localhost:4200)

Open a new terminal:

```bash
cd frontend
npm install
npm start
```

## Highlights

- Enterprise backend layering: route -> controller -> service -> model.
- CORS enabled and environment-driven configuration.
- Centralized Express error handling middleware.
- Angular standalone components with router and HttpClient.
- Responsive colorful card-based UI with hover animations.
- Learning content generated programmatically via backend model data (not hardcoded in template).
