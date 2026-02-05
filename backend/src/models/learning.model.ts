import { LearningDiagram, LearningLevel, LearningSection } from '../types/learning.types';

interface TopicContent {
  section: string;
  title: string;
  explanations: Record<LearningLevel, string>;
  realWorldExample: string;
  workflowSteps: string[];
  commonMistakes: string[];
  bestPractices: string[];
  codeExamples: LearningSection['codeExamples'];
  diagrams: LearningDiagram[];
}

const coreDiagrams = {
  apiLifecycle: {
    id: 'api-request-lifecycle',
    title: 'API Request Lifecycle',
    path: '/assets/diagrams/api-request-lifecycle.svg',
    description: 'Client to controller to service and response flow.'
  },
  jwtFlow: {
    id: 'jwt-authentication-flow',
    title: 'JWT Authentication Flow',
    path: '/assets/diagrams/jwt-auth-flow.svg',
    description: 'Login, token issuance, token verification, and access.'
  },
  angularFlow: {
    id: 'angular-data-flow',
    title: 'Angular Data Flow',
    path: '/assets/diagrams/angular-data-flow.svg',
    description: 'Component, service, HttpClient, API, and state updates.'
  },
  nodeFlow: {
    id: 'node-request-processing',
    title: 'Node.js Request Processing',
    path: '/assets/diagrams/node-request-processing.svg',
    description: 'Request through middleware pipeline to handler and error layer.'
  },
  corsFlow: {
    id: 'cors-browser-flow',
    title: 'CORS Browser Flow',
    path: '/assets/diagrams/cors-browser-flow.svg',
    description: 'Preflight OPTIONS and actual request behavior.'
  }
} as const;

const topicContent: TopicContent[] = [
  {
    section: 'APIs',
    title: 'REST API Design and Request Lifecycle',
    explanations: {
      beginner:
        'An API is like a menu for your app: the frontend asks for data, and the backend returns it. REST APIs use clear routes (like /users) and HTTP methods (GET, POST, PUT, DELETE).',
      intermediate:
        'RESTful design models resources, nouns, and status codes. Every request should pass through validation, business rules, and response shaping. Idempotency and pagination improve reliability and performance.',
      advanced:
        'Enterprise API design includes domain boundaries, versioning strategy, backward compatibility, observability, and contract-first governance. Advanced teams model APIs around capabilities, not tables, and use standardized error contracts.'
    },
    realWorldExample:
      'A learning platform mobile app calls GET /api/learning/fullstack to render level-specific lessons, while admin tools use POST endpoints to publish new modules.',
    workflowSteps: [
      'Define resources and route naming conventions.',
      'Design request/response DTOs and validation contracts.',
      'Implement route -> controller -> service layers.',
      'Add centralized error handling and telemetry.',
      'Publish OpenAPI docs and monitor endpoint usage.'
    ],
    commonMistakes: [
      'Using verbs in routes (getUsersData) instead of resource nouns.',
      'Returning inconsistent status codes for similar failures.',
      'Exposing internal database fields directly to clients.'
    ],
    bestPractices: [
      'Use semantic status codes and stable response shapes.',
      'Apply request validation near route boundaries.',
      'Track latency and errors per endpoint.'
    ],
    codeExamples: [
      {
        title: 'Express REST route',
        language: 'typescript',
        description: 'Simple REST endpoint returning learning modules.',
        code: `router.get('/fullstack', async (_req, res) => {
  const sections = await learningService.getFullStackLearningContent();
  res.status(200).json(sections);
});`
      }
    ],
    diagrams: [coreDiagrams.apiLifecycle, coreDiagrams.nodeFlow]
  },
  {
    section: 'JSON',
    title: 'JSON Modeling and API Payloads',
    explanations: {
      beginner:
        'JSON is a text format used to send data between frontend and backend. It supports objects, arrays, strings, numbers, booleans, and null.',
      intermediate:
        'At intermediate level, JSON becomes a contract. You should define predictable object shapes, naming conventions (camelCase), and optional/required fields.',
      advanced:
        'In enterprise systems, JSON contracts are versioned and validated through schema tooling. Teams enforce compatibility guarantees so mobile and web clients do not break after backend changes.'
    },
    realWorldExample:
      'An Angular app receives a JSON lesson object with title, level, codeExamples, and diagrams, then maps it into reusable UI components.',
    workflowSteps: [
      'Model payload shape in TypeScript interfaces.',
      'Validate incoming JSON at backend boundary.',
      'Transform domain data into API response DTOs.',
      'Handle nullable and optional fields explicitly.',
      'Version payload changes when compatibility is impacted.'
    ],
    commonMistakes: [
      'Mixing snake_case and camelCase in the same API.',
      'Returning dates in inconsistent formats.',
      'Not handling missing keys in frontend rendering logic.'
    ],
    bestPractices: [
      'Use strict TypeScript interfaces for payload contracts.',
      'Keep response keys stable and well documented.',
      'Prefer ISO-8601 date strings for temporal values.'
    ],
    codeExamples: [
      {
        title: 'Typed JSON payload',
        language: 'json',
        description: 'Example JSON returned by VG Learning API.',
        code: `{
  "section": "JSON",
  "level": "intermediate",
  "title": "JSON Modeling and API Payloads",
  "explanation": "At intermediate level, JSON becomes a contract...",
  "codeExamples": [],
  "diagrams": []
}`
      }
    ],
    diagrams: [coreDiagrams.apiLifecycle]
  },
  {
    section: 'Node.js Architecture',
    title: 'Node.js Layering and Request Processing',
    explanations: {
      beginner:
        'Node.js lets JavaScript run on the server so one language can power frontend and backend.',
      intermediate:
        'A maintainable Node app separates concerns: routes define endpoints, controllers coordinate input/output, and services hold business logic.',
      advanced:
        'Enterprise Node architecture includes modular domain boundaries, dependency inversion, structured logging, configuration providers, and graceful shutdown for resilient cloud deployments.'
    },
    realWorldExample:
      'When a student opens a module, the request goes through Express middleware, then controller and service layers fetch curated content and return structured JSON.',
    workflowSteps: [
      'Organize source by config, routes, controllers, services, and models.',
      'Keep controllers thin and side-effect free when possible.',
      'Inject dependencies into controllers/services.',
      'Centralize config and environment parsing.',
      'Add graceful error middleware and readiness endpoints.'
    ],
    commonMistakes: [
      'Putting all business logic directly in route handlers.',
      'Using global mutable state for request-specific data.',
      'Ignoring backpressure and async error propagation.'
    ],
    bestPractices: [
      'Apply modular architecture per domain.',
      'Use typed interfaces for service contracts.',
      'Instrument request duration and error rates.'
    ],
    codeExamples: [],
    diagrams: [coreDiagrams.nodeFlow]
  },
  {
    section: 'TypeScript Deep Concepts',
    title: 'Types, Generics, and Safe APIs',
    explanations: {
      beginner:
        'TypeScript adds types to JavaScript so editors can catch mistakes earlier.',
      intermediate:
        'Intermediate TypeScript uses interfaces, union types, and utility types to model real business data and reduce runtime errors.',
      advanced:
        'Advanced TypeScript applies generics, conditional types, discriminated unions, and type-safe API clients for large-scale codebases with hundreds of modules.'
    },
    realWorldExample:
      'A typed LearningSection model ensures frontend and backend agree on fields such as level, explanation, and diagrams.',
    workflowSteps: [
      'Define domain interfaces first.',
      'Use strict compiler options and avoid any.',
      'Build reusable generic helpers.',
      'Share DTO types where practical.',
      'Introduce linting/type-check gates in CI.'
    ],
    commonMistakes: ['Overusing any.', 'Ignoring null/undefined paths.', 'Duplicating type definitions across modules.'],
    bestPractices: [
      'Prefer explicit interfaces for API payloads.',
      'Use readonly where mutation is not intended.',
      'Model level states with string literal unions.'
    ],
    codeExamples: [
      {
        title: 'TypeScript interface and map usage',
        language: 'typescript',
        description: 'Interfaces and Map for keyed lookups.',
        code: `interface StudentProgress {
  studentId: string;
  completedModules: string[];
  scoreByModule: Record<string, number>;
}

const moduleMap = new Map<string, string>([
  ['api', 'REST API Design'],
  ['jwt', 'JWT Security Flow']
]);`
      }
    ],
    diagrams: [coreDiagrams.angularFlow]
  },
  {
    section: 'Angular Architecture',
    title: 'Feature-Driven Angular Structure',
    explanations: {
      beginner:
        'Angular builds pages from components. Services provide reusable logic and HTTP calls.',
      intermediate:
        'Intermediate architecture groups files by feature and reuses shared UI components. Standalone components simplify module management.',
      advanced:
        'Enterprise Angular emphasizes core/shared/features boundaries, smart-presentational split, typed HTTP contracts, and performance tuning with signals, memoization, and route-level chunking.'
    },
    realWorldExample:
      'VG Learning uses feature routes for home and full-stack modules while shared components render cards, code blocks, and diagrams consistently.',
    workflowSteps: [
      'Create feature folders and standalone route entries.',
      'Add typed services with HttpClient.',
      'Build shared presentational components.',
      'Apply animation wrappers for section transitions.',
      'Test rendering with realistic API fixtures.'
    ],
    commonMistakes: [
      'Placing all UI logic in one giant component.',
      'Skipping type contracts for API responses.',
      'Rewriting same card/code UI across pages.'
    ],
    bestPractices: [
      'Use reusable shared components.',
      'Use OnPush change detection for heavy UIs.',
      'Keep feature state close to the feature itself.'
    ],
    codeExamples: [
      {
        title: 'Angular service call',
        language: 'typescript',
        description: 'Typed service fetching learning content.',
        code: [
          'getFullStackLearning(): Observable<LearningSection[]> {',
          "  return this.http.get<LearningSection[]>(`${this.apiBaseUrl}/api/learning/fullstack`);",
          '}'
        ].join('\n')
      }
    ],
    diagrams: [coreDiagrams.angularFlow]
  },
  {
    section: 'JWT Authentication Flow',
    title: 'Token Security from Login to Protected APIs',
    explanations: {
      beginner:
        'JWT is a signed token that proves a user is authenticated after login.',
      intermediate:
        'The backend issues short-lived access tokens and validates them in middleware for protected routes.',
      advanced:
        'Enterprise JWT strategy includes rotating refresh tokens, key rotation, role claims, anomaly detection, and incident response practices.'
    },
    realWorldExample:
      'Instructor dashboard endpoints require valid JWT tokens so only authenticated teachers can publish course material.',
    workflowSteps: [
      'Authenticate user credentials.',
      'Generate and sign access token.',
      'Send token to client securely.',
      'Verify token in middleware for protected routes.',
      'Refresh or revoke tokens based on policy.'
    ],
    commonMistakes: [
      'Storing long-lived JWTs without rotation.',
      'Using weak signing secrets.',
      'Skipping expiration validation.'
    ],
    bestPractices: [
      'Use HTTPS and short-lived access tokens.',
      'Store secrets in vault/environment config.',
      'Audit authentication and authorization events.'
    ],
    codeExamples: [],
    diagrams: [coreDiagrams.jwtFlow]
  },
  {
    section: 'CORS Browser Flow',
    title: 'Cross-Origin Security Handshake',
    explanations: {
      beginner:
        'CORS is a browser security rule that controls whether one website can call another origin.',
      intermediate:
        'For custom headers like Authorization, browsers send a preflight OPTIONS request before the actual call.',
      advanced:
        'Enterprise CORS policies are environment-driven, per-route where needed, and audited to prevent accidental wildcard exposure in sensitive APIs.'
    },
    realWorldExample:
      'Frontend at localhost:4200 calls backend at localhost:3000, so backend explicitly allows that origin in development.',
    workflowSteps: [
      'Browser detects cross-origin request.',
      'Browser sends preflight OPTIONS with request metadata.',
      'Server validates origin/method/headers.',
      'Browser sends actual request if allowed.',
      'Response includes CORS headers for browser acceptance.'
    ],
    commonMistakes: [
      'Using Access-Control-Allow-Origin: * for authenticated APIs.',
      'Forgetting to allow Authorization header.',
      'Ignoring preflight failures during debugging.'
    ],
    bestPractices: [
      'Keep explicit allow-list origins.',
      'Set CORS per environment.',
      'Log blocked origin attempts for security visibility.'
    ],
    codeExamples: [],
    diagrams: [coreDiagrams.corsFlow]
  },
  {
    section: 'Middleware',
    title: 'Composable Request Pipeline',
    explanations: {
      beginner:
        'Middleware are functions that run before route handlers and can inspect or modify requests and responses.',
      intermediate:
        'Teams compose middleware for logging, auth, validation, and normalization to keep controllers clean.',
      advanced:
        'Enterprise middleware chains include correlation IDs, distributed tracing, rate limiting, and policy enforcement aligned with security requirements.'
    },
    realWorldExample:
      'A request ID middleware attaches x-request-id so logs from route, service, and error middleware are traceable end-to-end.',
    workflowSteps: [
      'Create middleware with (req, res, next).',
      'Register global middleware in app.ts.',
      'Add route-specific middleware where needed.',
      'Short-circuit with errors for policy failures.',
      'Centralize final error serialization.'
    ],
    commonMistakes: ['Calling next() after sending response.', 'Mutating req in undocumented ways.', 'Handling errors inconsistently.'],
    bestPractices: ['Keep middleware focused and small.', 'Use typed request augmentation.', 'Place error middleware last.'],
    codeExamples: [],
    diagrams: [coreDiagrams.nodeFlow]
  },
  {
    section: 'Routing and Error Handling',
    title: 'Reliable API Endpoints and Fail-Safe Responses',
    explanations: {
      beginner:
        'Routing maps URL paths to code handlers. Error handling ensures users get useful messages when something fails.',
      intermediate:
        'Use route grouping, request validation, and centralized error middleware to keep behavior predictable.',
      advanced:
        'At enterprise scale, error strategy includes error taxonomies, redaction policies, retry semantics, and observability tooling for proactive reliability.'
    },
    realWorldExample:
      'A malformed payload returns a 400 response with structured details, while unexpected failures return 500 without leaking internals.',
    workflowSteps: [
      'Define route files by domain.',
      'Validate input and throw operational errors.',
      'Call service layer for business logic.',
      'Catch and pass errors to middleware.',
      'Serialize safe response format for clients.'
    ],
    commonMistakes: [
      'Returning stack traces to clients in production.',
      'Using 200 status for failed operations.',
      'Duplicating error shape in each controller.'
    ],
    bestPractices: [
      'Standardize error JSON shape.',
      'Separate operational vs unexpected errors.',
      'Log full diagnostics server-side only.'
    ],
    codeExamples: [],
    diagrams: [coreDiagrams.apiLifecycle]
  },
  {
    section: 'Enterprise Backend Structure',
    title: 'Scalable Modular Service Architecture',
    explanations: {
      beginner:
        'Large backends are easier to maintain when organized into clear folders and layers.',
      intermediate:
        'Modular architecture allows separate teams to work on domains like learning, auth, and billing without stepping on each other.',
      advanced:
        'Enterprise backends employ clean architecture principles, domain-driven design boundaries, contract tests, and platform observability standards for long-term scalability.'
    },
    realWorldExample:
      'A new “progress tracking” feature can be added by creating new routes/controllers/services without rewriting existing learning modules.',
    workflowSteps: [
      'Define bounded context for each domain.',
      'Create module interfaces and service contracts.',
      'Separate application logic from infrastructure adapters.',
      'Enforce standards with linting and CI gates.',
      'Document ownership and operational runbooks.'
    ],
    commonMistakes: [
      'Monolithic service classes with many responsibilities.',
      'Tight coupling between domain and infrastructure code.',
      'No ownership model for modules.'
    ],
    bestPractices: [
      'Favor dependency injection and interface contracts.',
      'Keep modules cohesive and independently testable.',
      'Adopt clear ownership and incident response workflows.'
    ],
    codeExamples: [],
    diagrams: [coreDiagrams.nodeFlow, coreDiagrams.apiLifecycle]
  },
  {
    section: 'Syntax Essentials',
    title: 'Arrays, Objects, Maps, Functions, Promises and Framework Syntax',
    explanations: {
      beginner:
        'Syntax essentials are foundational patterns used in every JavaScript and TypeScript application.',
      intermediate:
        'Intermediate developers combine data structures and async functions to build maintainable business workflows.',
      advanced:
        'Advanced teams formalize these primitives into reusable patterns, typed utility libraries, and framework conventions that scale across teams.'
    },
    realWorldExample:
      'A learning dashboard uses arrays for modules, objects for lesson metadata, maps for quick lookups, and async functions to load API data.',
    workflowSteps: [
      'Model data structures for the feature.',
      'Implement business functions with typed signatures.',
      'Use Promise/async flows for IO.',
      'Integrate Express routes and Angular services.',
      'Review with linting and type checking.'
    ],
    commonMistakes: [
      'Mutating shared arrays unexpectedly.',
      'Mixing callbacks and async/await in confusing ways.',
      'Skipping interface definitions for critical data.'
    ],
    bestPractices: [
      'Prefer immutable transforms for predictability.',
      'Wrap async calls in domain-focused services.',
      'Document interfaces and function contracts.'
    ],
    codeExamples: [
      {
        title: 'Arrays, objects, map, dictionary, functions',
        language: 'typescript',
        description: 'Core data structures and functions.',
        code: [
          "const modules: string[] = ['APIs', 'JSON', 'Angular'];",
          "const lesson = { title: 'REST Basics', durationMinutes: 18 };",
          "const lookup: Record<string, number> = { beginner: 1, advanced: 3 };",
          "const sectionMap = new Map<string, string>([['jwt', 'JWT Flow']]);",
          '',
          'function formatLesson(name: string): string {',
          "  return `Module: ${name}`;",
          '}'
        ].join('\n')
      },
      {
        title: 'Promises and async/await',
        language: 'typescript',
        description: 'Asynchronous code flow.',
        code: [
          'const fetchLesson = (id: string): Promise<string> =>',
          '  Promise.resolve(`Lesson ${id}`);',
          '',
          'async function loadLesson(): Promise<void> {',
          "  const lesson = await fetchLesson('api-101');",
          '  console.log(lesson);',
          '}'
        ].join('\n')
      },
      {
        title: 'Express route + Angular service + TS interface',
        language: 'typescript',
        description: 'Framework syntax essentials.',
        code: `interface LearningSectionDto {
  section: string;
  level: 'beginner' | 'intermediate' | 'advanced';
}

// Express route
router.get('/fullstack', (_req, res) => res.json([] as LearningSectionDto[]));

// Angular service
@Injectable({ providedIn: 'root' })
export class LearningApiService {
  constructor(private readonly http: HttpClient) {}

  getSections(): Observable<LearningSectionDto[]> {
    return this.http.get<LearningSectionDto[]>('/api/learning/fullstack');
  }
}`
      }
    ],
    diagrams: [coreDiagrams.angularFlow]
  }
];

export class LearningModel {
  public static getFullStackSections(): LearningSection[] {
    return topicContent.flatMap((topic) =>
      (['beginner', 'intermediate', 'advanced'] as LearningLevel[]).map((level) => ({
        section: topic.section,
        level,
        title: topic.title,
        explanation: topic.explanations[level],
        realWorldExample: topic.realWorldExample,
        workflowSteps: topic.workflowSteps,
        commonMistakes: topic.commonMistakes,
        bestPractices: topic.bestPractices,
        codeExamples: topic.codeExamples,
        diagrams: topic.diagrams
      }))
    );
  }
}
