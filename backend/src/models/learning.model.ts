import { LearningSection } from '../types/learning.types';

export class LearningModel {
  public static getFullStackSections(): LearningSection[] {
    return [
      {
        section: 'APIs',
        content:
          'APIs are contracts between systems. In REST APIs, resources are exposed via predictable URLs and manipulated with HTTP methods (GET read, POST create, PUT/PATCH update, DELETE remove). The request/response lifecycle usually starts at a route, flows through middleware, reaches controller logic, calls service/domain logic, and ends with a serialized JSON response. In enterprise systems, API contracts are versioned (/api/v1), validated at boundaries, and documented for cross-team alignment. Real-world example: a learning platform calls GET /courses to render course cards, then POST /enrollments when a user enrolls.'
      },
      {
        section: 'JSON',
        content:
          'JSON is the standard data interchange format for web applications because it is human-readable, lightweight, and language-agnostic. Its structure is object and array based, with primitive values such as strings, numbers, booleans, and null. Parsing in JavaScript/TypeScript typically uses JSON.parse and JSON.stringify. Best practices include stable field naming, avoiding deeply nested payloads when unnecessary, and using schema validation for safety. Example: the backend returns {"section":"JWT Authentication","content":"..."} and Angular maps it directly into typed interfaces.'
      },
      {
        section: 'Node.js backend fundamentals',
        content:
          'Node.js runs JavaScript on the server using an event-driven, non-blocking I/O model that is excellent for APIs. The event loop allows high concurrency while keeping single-threaded application code simple. Enterprise fundamentals include clean layering (routes, controllers, services), dependency management, environment-based configuration, observability, and graceful error handling. Example flow diagram in text: Client -> Express Route -> Controller -> Service -> Data Access -> Response. This separation reduces coupling and enables independent testing.'
      },
      {
        section: 'TypeScript basics and advanced usage',
        content:
          'TypeScript adds static typing to JavaScript so teams can catch errors earlier and maintain large codebases confidently. Basics: interfaces, type aliases, enums, and typed function signatures. Advanced usage: discriminated unions for state modeling, generics for reusable abstractions, utility types (Partial, Pick, Record), and strict compiler settings. In enterprise apps, strong typing across API boundaries prevents runtime mismatches and improves IDE tooling. Example: LearningSection[] guarantees each section has both section and content fields.'
      },
      {
        section: 'Angular architecture and components',
        content:
          'Angular architecture is component-driven with dependency injection and declarative templates. Standalone components reduce module overhead and keep features encapsulated. Router organizes screens by URL, while services centralize data access and business logic. Recommended enterprise pattern: feature folders, shared UI primitives, and core singleton services. Real-world flow diagram in text: User navigates to /fullstack -> Router loads FullstackLearningComponent -> Component calls LearningService -> HttpClient fetches backend JSON -> UI renders responsive cards.'
      },
      {
        section: 'JWT Authentication (how JWT works, flow, security)',
        content:
          'JWT (JSON Web Token) encodes user claims in a signed token (header.payload.signature). Typical auth flow: user logs in, server validates credentials, server issues access token, client sends token in Authorization: Bearer <token>, backend middleware verifies signature and claims. Security best practices: short-lived tokens, HTTPS only, secure storage strategy, token rotation, and revocation strategy for sensitive apps. Enterprise systems also include role/permission claims and audit logs for critical actions.'
      },
      {
        section: 'CORS (what it is, why needed, implementation)',
        content:
          'CORS (Cross-Origin Resource Sharing) is a browser security mechanism controlling cross-origin HTTP calls. Since frontend and backend often run on different origins in development (localhost:4200 and localhost:3000), the backend must explicitly allow trusted origins. Implementation in Express uses cors middleware with origin configuration. Best practice: keep origin allow-lists environment-driven, avoid wildcard origins in protected APIs, and handle preflight OPTIONS requests correctly for custom headers such as Authorization.'
      },
      {
        section: 'Middleware concept',
        content:
          'Middleware are reusable functions that execute during request processing before the final route handler returns a response. They can parse JSON bodies, apply authentication, enforce rate limits, add logging, or normalize errors. Think of middleware as a pipeline: Request -> Logger -> Auth -> Validation -> Controller -> Error Handler. Enterprise benefits include consistency and centralized concerns. Example: one middleware can append request IDs for observability across services.'
      },
      {
        section: 'Routing concepts',
        content:
          'Routing maps incoming HTTP requests to handlers based on method and path. A scalable approach groups routes by domain (learning, users, auth) and versions APIs. Router-level middleware can enforce domain-specific policies. In frontend Angular routing, URL segments map to feature components and can be lazy loaded for performance. Enterprise guidance: keep route handlers thin, move business rules to services, and use consistent naming conventions to simplify maintenance and onboarding.'
      },
      {
        section: 'Error handling patterns',
        content:
          'Robust applications treat errors as first-class design concerns. Use centralized error middleware to standardize response shape, status codes, and safe messages. Distinguish operational errors (validation, not found) from unexpected errors (bugs, outages). Provide correlation IDs for diagnostics and avoid leaking sensitive stack traces in production. Example response pattern: {"message":"Resource not found","statusCode":404}. This consistency improves client behavior and monitoring reliability.'
      },
      {
        section: 'Enterprise backend architecture',
        content:
          'Enterprise architecture favors separation of concerns, testability, and long-term scalability. Typical layered diagram in text: API Layer (routes/controllers) -> Application Layer (services/use-cases) -> Domain Models -> Infrastructure (database, cache, messaging). Cross-cutting concerns include configuration, security, logging, tracing, and CI/CD quality gates. For VG Learning, this structure allows adding modules such as quizzes, progress tracking, and certification without rewriting existing foundations.'
      }
    ];
  }
}
