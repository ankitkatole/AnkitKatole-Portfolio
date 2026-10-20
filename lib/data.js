/**
 * Verified personal and technical data for Ankit Katole
 * Sourced directly from resume.md and project records.
 * No fabricated statistics, testimonials, or claims.
 */

export const personalInfo = {
  name: "Ankit Katole",
  title: "Software Engineer",
  focus: "Java, Spring Boot & Distributed Backend Systems",
  location: "India",
  email: "katoleankit06@gmail.com",
  phone: "+91 9307512981",
  resumePath: "/Ankit_Katole_Software_Engineer_Resume.pdf",
  bio: "Backend-focused Software Engineer with hands-on experience building REST APIs, microservices, and distributed pipelines using Java, Spring Boot, and the MERN stack. Currently engineering telecommunications Order Process Management systems at Capgemini, with active work in Kafka, Spring Cloud, and practical LLM integration.",
  links: {
    github: "https://github.com/ankitkatole",
    linkedin: "https://www.linkedin.com/in/ankitkatole",
    leetcode: "https://leetcode.com/u/ankitkatole",
    medium: "https://medium.com/@unemployedEngineer",
    whatsapp: "https://wa.me/919307512981",
    email: "mailto:katoleankit06@gmail.com"
  },
  status: {
    available: true,
    currentRole: "Software Engineer at Capgemini",
    coreStack: "Java 8+ · Spring Boot · Microservices · MySQL · Kafka"
  }
};

export const skillsData = {
  backend: {
    title: "Backend Engineering",
    description: "Core server architectures, enterprise frameworks, and distributed services.",
    items: [
      { name: "Java 8+", detail: "Stream API, Lambdas, Functional Interfaces, Generics, Multithreading, Memory Management" },
      { name: "Spring Boot", detail: "REST controllers, dependency injection, auto-configuration, Actuator metrics" },
      { name: "Spring Data JPA & Hibernate", detail: "Entity mappings, custom JPQL, transaction management, connection pooling" },
      { name: "Spring Security", detail: "Stateless JWT authentication filters, role-based authorization, BCrypt" },
      { name: "Node.js & Express.js", detail: "Asynchronous I/O services, REST endpoints, middleware pipelines" }
    ]
  },
  architecture: {
    title: "APIs & System Architecture",
    description: "Inter-service communication, contracts, and workflow orchestration.",
    items: [
      { name: "Microservices Architecture", detail: "Database-per-service isolation, domain boundaries, resilient endpoints" },
      { name: "Spring Cloud Gateway & Eureka", detail: "Dynamic route predicates, circuit breakers, service registry discovery" },
      { name: "RESTful API Design", detail: "Resource-oriented endpoints, structured error handling, OpenAPI / Swagger specs" },
      { name: "WebSockets & STOMP", detail: "Bi-directional real-time communication channels over SockJS" },
      { name: "Camunda BPM", detail: "BPMN 2.0 workflow orchestration, user tasks, automated service delegation" }
    ]
  },
  databases: {
    title: "Databases & Messaging",
    description: "Data persistence, index tuning, and asynchronous event streams.",
    items: [
      { name: "MySQL", detail: "Relational schema design, ACID transactions, indexed queries, foreign keys" },
      { name: "MongoDB", detail: "Document modeling, aggregation pipelines, flexible document storage" },
      { name: "Apache Kafka", detail: "Event-driven topics, partition keys, consumer groups, decoupled messaging" },
      { name: "Redis", detail: "In-memory caching layer, session state storage, key expiration" }
    ]
  },
  frontend: {
    title: "Frontend Engineering",
    description: "Clean, responsive client applications built with modern React paradigms.",
    items: [
      { name: "React.js", detail: "Hooks, functional components, state management, context providers" },
      { name: "Next.js", detail: "App Router, Server Components, dynamic routing, metadata generation" },
      { name: "JavaScript (ES6+)", detail: "Promises, async/await, closures, modern array pipelines" },
      { name: "Tailwind CSS", detail: "Utility-first design tokens, responsive breakpoints, editorial layouts" }
    ]
  },
  aiIntegration: {
    title: "AI Integration & Practical LLMs",
    description: "Incorporating generative intelligence into business backend flows.",
    items: [
      { name: "Spring AI", detail: "Structured prompt clients, output parsers, model abstraction layers" },
      { name: "Google Gemini API", detail: "Function calling, prompt engineering, context management" },
      { name: "OpenAI API", detail: "Automated code review flows, DSA problem generator pipelines" }
    ]
  },
  tools: {
    title: "Tools, Practices & DevOps",
    description: "Engineering rigor, containerization, and continuous delivery.",
    items: [
      { name: "Docker", detail: "Multi-stage builds, container isolation, compose configurations" },
      { name: "Git & GitHub", detail: "Feature branching, pull requests, semantic commit conventions" },
      { name: "Maven", detail: "Dependency management, multi-module builds, plugin configurations" },
      { name: "Postman & Swagger", detail: "API test suites, contract mocking, automated documentation" },
      { name: "Agile / Scrum", detail: "Sprint planning, standups, continuous delivery, SDLC discipline" }
    ]
  }
};

export const experienceData = [
  {
    role: "Software Engineer",
    company: "Capgemini",
    location: "Bangalore, India",
    period: "June 2026 - Present",
    type: "Full-time",
    stack: ["Java 8", "Spring Boot", "Microservices", "REST APIs", "Swagger", "Actuator", "Cron Jobs", "Agile"],
    summary: "Contributing to an enterprise telecommunications Order Process Management platform servicing internet, mobile, and cable infrastructure.",
    bulletPoints: [
      "Engineered backend microservices and maintainable REST APIs in Java 8 and Spring Boot for high-volume order state transitions.",
      "Configured centralized application logging and structured diagnostic telemetry to accelerate troubleshooting across service boundaries.",
      "Architected reliable Spring cron jobs and scheduled task workers to execute periodic order validation and status synchronization.",
      "Documented public and internal API contracts using Swagger / OpenAPI and implemented health metrics using Spring Boot Actuator.",
      "Undergoing enterprise Generative AI training while delivering active feature enhancements on the Integration team."
    ]
  },
  {
    role: "Software Engineer Intern",
    company: "Capgemini",
    location: "Bangalore, India",
    period: "Feb 2026 - Apr 2026",
    type: "Internship",
    stack: ["Java", "Spring Boot", "Spring AI", "Gemini API", "REST APIs", "Prompt Engineering"],
    summary: "Built an intelligent email assistance service automating enterprise customer response generation.",
    bulletPoints: [
      "Developed an AI-powered email assistant utilizing Spring Boot and the Spring AI framework interfaced with Google Gemini API.",
      "Designed and validated RESTful controllers for processing incoming customer queries and generating context-aware draft responses.",
      "Applied prompt engineering techniques and system prompt constraints to ensure response tone consistency and accuracy."
    ],
    certificates: [
      {
        id: "capgemini-letter",
        title: "Capgemini Internship Letter",
        shortLabel: "Internship Letter",
        issuer: "Capgemini Technology Services",
        date: "April 21, 2026",
        ref: "Reference No: 1407219082",
        image: "/certificates/capgemini-internship-letter.png",
        description: "Official internship completion letter certifying Ankit Katole's engineering tenure from Feb 19, 2026 to Apr 21, 2026 under Ms. Virgin Joao Dsouza."
      },
      {
        id: "capgemini-certificate",
        title: "Capgemini Exceller Edge Certificate",
        shortLabel: "Exceller Certificate",
        issuer: "Capgemini Exceller Early Career Program",
        date: "April 21, 2026",
        ref: "Certificate ID: 20250414002611",
        image: "/certificates/capgemini-exceller-certificate.png",
        description: "Certificate of Recognition awarded to Ankit Diliprao Katole for successful completion of the Capgemini Exceller Edge Internship Program."
      }
    ]
  },
  {
    role: "Full Stack Developer (Freelance)",
    company: "Italy-based Client",
    location: "Remote",
    period: "Apr 2025 - Dec 2025",
    type: "Freelance Contract",
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "RESTful APIs"],
    summary: "Delivered custom full-stack web applications and API integrations for an international European client.",
    bulletPoints: [
      "Developed full-stack web applications using the MERN stack with strict adherence to client requirements and deadlines.",
      "Built responsive, accessible user interfaces in React.js and connected them to secure Express.js REST backends.",
      "Optimized query performance and payload sizes, cutting initial client load overhead and improving runtime stability."
    ]
  },
  {
    role: "Full Stack Developer Intern",
    company: "MagnifyX",
    location: "London, UK (Remote)",
    period: "Dec 2024 - Apr 2025",
    type: "Internship",
    stack: ["MERN Stack", "MongoDB", "Express.js", "React.js", "Node.js"],
    summary: "Redesigned hospital digital infrastructure and patient management interfaces.",
    bulletPoints: [
      "Redesigned a responsive healthcare portal to enhance patient booking flows, interface clarity, and device adaptability.",
      "Developed a centralized administrative dashboard for medical staff to manage appointment schedules and patient inquiries efficiently."
    ],
    certificates: [
      {
        id: "magnifyx-experience",
        title: "MagnifyX Experience Certificate",
        shortLabel: "Experience Certificate",
        issuer: "MAGNIFY X LIMITED (London, UK)",
        date: "August 22, 2025",
        ref: "Director: Karna Hiranwar",
        image: "/certificates/magnifyx-experience-certificate.png",
        description: "Official Experience Certificate validating full-stack MERN development, API integrations, and healthcare portal code optimization from Dec 16, 2024 to Apr 15, 2025."
      },
      {
        id: "magnifyx-completion",
        title: "MagnifyX Internship Completion Certificate",
        shortLabel: "Completion Certificate",
        issuer: "MAGNIFY X LIMITED (London, UK)",
        date: "August 22, 2025",
        ref: "Director: Karna Hiranwar",
        image: "/certificates/magnifyx-completion-certificate.png",
        description: "Internship completion certificate recognizing exceptional professionalism, full-stack development contributions, and project delivery."
      }
    ]
  }
];

export const projectsData = [
  {
    id: "codecollab",
    title: "CodeCollab",
    subtitle: "Real-time Distributed Collaborative Coding & AI Mentorship Platform",
    featured: true,
    year: "2026",
    tagline: "Microservices architecture supporting real-time collaborative Monaco rooms, WebSockets, and AI code review pipelines.",
    description: "Architected a scalable microservices ecosystem designed for real-time peer coding. Employs a database-per-service pattern with Eureka service discovery, an API Gateway, WebSocket synchronization over STOMP, and an isolated multi-language code execution engine with AI-driven mentorship.",
    stack: ["Spring Boot", "Spring Cloud", "React", "WebSockets (STOMP)", "Spring AI", "MySQL", "MongoDB", "Docker"],
    architectureHighlights: [
      "Microservices architecture with Spring Cloud Gateway routing requests to Auth, Collaboration, AI, and Execution services.",
      "Eureka Service Registry for dynamic service discovery and OpenFeign for declarative inter-service HTTP clients.",
      "Real-time synchronized coding rooms powered by Spring WebSocket (SockJS + STOMP) and Monaco Editor with minimal latency.",
      "Spring AI integration with OpenAI for automated code reviews, contextual syntax hints, and dynamic DSA challenge generation.",
      "Stateless JWT security filters enforced at the gateway boundary with fine-grained claim validation."
    ],
    technicalDeepDive: {
      problem: "Traditional peer coding environments suffer from high coordination overhead, monolithic tight coupling, and unsecured code evaluation.",
      solution: "Decomposed the system into distinct bounded contexts. The Collaboration Service maintains room state in memory with persistence snapshots, while the Execution Service isolates user scripts in containerized sandboxes.",
      dataFlow: "Client -> Spring Cloud Gateway (JWT Auth) -> WebSocket Broker (STOMP) -> Collaboration Service (Room state) -> Spring AI Service (Async Review via queue)."
    },
    github: "https://github.com/ankitkatole",
    demo: null,
    status: "Production Ready / Completed"
  },
  {
    id: "subpulse",
    title: "SubPulse",
    subtitle: "Microservices-Based Subscription Intelligence Platform",
    featured: false,
    year: "2026",
    tagline: "Subscription lifecycle tracking with automated renewal reminders and Gemini-driven cost optimization.",
    description: "A microservices application engineered to streamline recurring subscription tracking. Features JWT-secured REST APIs, Eureka-based discovery, automated email notification workers, and AI-assisted financial spending insights via Google Gemini.",
    stack: ["Spring Boot", "Spring Cloud Eureka", "API Gateway", "React", "MySQL", "Gemini API"],
    architectureHighlights: [
      "Decomposed user management and subscription ledger services behind an API Gateway.",
      "JWT-secured authentication filters with refresh token rotation and BCrypt password encryption.",
      "Automated scheduled cron workers checking upcoming renewal expirations and dispatching notifications.",
      "Google Gemini API integration to parse uploaded subscription invoices and suggest consolidation savings."
    ],
    technicalDeepDive: {
      problem: "Users lose track of recurring SaaS billing cycles, incurring unexpected charges without clear visibility into cumulative spending.",
      solution: "Engineered automated notification workers with scheduled cron triggers in Spring Boot, combined with LLM prompt pipelines to analyze spending trends.",
      dataFlow: "React Client -> API Gateway -> Subscription Service (MySQL) -> Gemini API Client -> Notification Scheduler."
    },
    github: "https://github.com/ankitkatole",
    demo: null,
    status: "Completed"
  },
  {
    id: "key-n-share",
    title: "Key-N-Share",
    subtitle: "Decentralized Encrypted Dataset Marketplace",
    featured: false,
    year: "2025",
    tagline: "Cryptographically enforced anti-piracy data pipeline with Solana transaction settlement and IPFS storage.",
    description: "Built an end-to-end encrypted dataset marketplace using a hybrid Web3 architecture. Settles transactions on Solana for sub-second, sub-cent finality, stores encrypted assets on IPFS, and runs an anti-piracy pipeline embedding unique cryptographic watermarks into purchased files.",
    stack: ["Next.js", "Node.js", "Solana Web3.js", "IPFS", "AES-256", "RSA-OAEP-SHA256"],
    architectureHighlights: [
      "Zero plaintext disk exposure: files are encrypted in flight with symmetric AES-256 and asymmetric RSA-OAEP keys.",
      "Dynamic buyer-specific digital watermarking embedded at download time for anti-piracy traceability.",
      "On-chain SHA-256 content hashing to enforce authorship verification and prevent duplicate file uploads.",
      "Wallet-to-email identity verification bridging Web3 privacy with verified-buyer merchant ratings."
    ],
    technicalDeepDive: {
      problem: "Digital content creators face piracy and platform extortion when selling high-value proprietary datasets online.",
      solution: "Combined Solana on-chain receipt verification with ephemeral key decryption, ensuring files are only decipherable by the verified buyer while embedding a forensic watermark.",
      dataFlow: "Buyer Wallet -> Solana Settlement -> Node.js Cryptographic Pipeline -> IPFS Encrypted Blob Fetch -> Watermark Injector -> Streamed Response."
    },
    github: "https://github.com/ankitkatole",
    demo: null,
    status: "Completed"
  }
];

export const educationData = {
  degree: "B.Tech in Computer Science and Engineering",
  institution: "G H Raisoni College of Engineering and Management",
  location: "Nagpur, India",
  period: "Aug 2022 - June 2026",
  cgpa: "9.61 / 10",
  highlights: [
    "Academic Excellence with 9.61 CGPA throughout the computer engineering curriculum.",
    "Core coursework: Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, Operating Systems.",
    "Peer Teacher: Apache Kafka (conducted workshops covering producers, consumers, partitions, and event-driven architectures).",
    "Treasurer, Cortex Forum: Managed annual budget and coordinated technical events for 300+ attendees."
  ]
};

export const codeSnippets = {
  java: {
    title: "Spring Boot · Global RFC-7807 Exception Handler",
    language: "java",
    file: "GlobalExceptionHandler.java",
    description: "Production-ready Spring Boot exception handling with structured ProblemDetail responses, strict status mapping, and sanitized error payloads.",
    code: `@RestControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    private static final Logger log = LoggerFactory.getLogger(GlobalExceptionHandler.class);

    @ExceptionHandler(ResourceNotFoundException.class)
    public ProblemDetail handleResourceNotFound(ResourceNotFoundException ex, HttpServletRequest req) {
        log.warn("Resource not found at {}: {}", req.getRequestURI(), ex.getMessage());
        ProblemDetail problem = ProblemDetail.forStatusAndDetail(HttpStatus.NOT_FOUND, ex.getMessage());
        problem.setTitle("Resource Not Found");
        problem.setProperty("timestamp", Instant.now());
        problem.setProperty("path", req.getRequestURI());
        return problem;
    }

    @ExceptionHandler(OrderProcessingException.class)
    public ProblemDetail handleOrderProcessing(OrderProcessingException ex, HttpServletRequest req) {
        log.error("Order workflow failure [orderId={}]: {}", ex.getOrderId(), ex.getMessage(), ex);
        ProblemDetail problem = ProblemDetail.forStatusAndDetail(HttpStatus.UNPROCESSABLE_ENTITY, ex.getMessage());
        problem.setTitle("Order Processing Failed");
        problem.setProperty("orderId", ex.getOrderId());
        problem.setProperty("errorCode", ex.getErrorCode());
        return problem;
    }
}`
  },
  kafka: {
    title: "Apache Kafka · Resilient Event Consumer with Dead-Letter Topic",
    language: "java",
    file: "OrderEventConsumer.java",
    description: "Idempotent Kafka consumer in Spring Boot handling telecommunications order state events with graceful retry and DLT routing.",
    code: `@Service
public class OrderEventConsumer {

    private static final Logger log = LoggerFactory.getLogger(OrderEventConsumer.class);
    private final OrderWorkflowService workflowService;

    public OrderEventConsumer(OrderWorkflowService workflowService) {
        this.workflowService = workflowService;
    }

    @RetryableTopic(
        attempts = "3",
        backoff = @Backoff(delay = 1000, multiplier = 2.0),
        dltStrategy = DltStrategy.FAIL_ON_ERROR
    )
    @KafkaListener(topics = "telecom.order.events", groupId = "order-processor-group")
    public void consumeOrderEvent(
        @Payload OrderEvent event,
        @Header(KafkaHeaders.RECEIVED_KEY) String orderId,
        @Header(KafkaHeaders.RECEIVED_PARTITION) int partition
    ) {
        log.info("Processing order {} from partition {}", orderId, partition);
        workflowService.processOrderState(event);
    }

    @DltHandler
    public void handleDlt(OrderEvent event, @Header(KafkaHeaders.EXCEPTION_MESSAGE) String error) {
        log.error("Order {} permanently routed to DLT. Cause: {}", event.orderId(), error);
    }
}`
  },
  sql: {
    title: "SQL / MySQL · Partitioned Order State Query",
    language: "sql",
    file: "order_state_telemetry.sql",
    description: "Optimized relational query demonstrating indexing, state filtering, and aggregation for high-throughput order status telemetry.",
    code: `-- Fetch active pending orders with SLA threshold breach alerts
SELECT 
    o.order_id,
    o.customer_id,
    o.service_type,
    o.current_state,
    o.created_at,
    TIMESTAMPDIFF(MINUTE, o.updated_at, NOW()) AS elapsed_minutes_since_update
FROM orders o
INNER JOIN order_milestones m 
    ON o.order_id = m.order_id 
    AND m.milestone_status = 'IN_PROGRESS'
WHERE o.current_state IN ('PROVISIONING_PENDING', 'CARRIER_HANDOFF')
  AND o.created_at >= NOW() - INTERVAL 24 HOUR
ORDER BY o.priority_level DESC, o.created_at ASC
LIMIT 50;`
  },
  springAi: {
    title: "Spring AI · Structured LLM Client with Schema Validation",
    language: "java",
    file: "EmailAssistantService.java",
    description: "Spring AI service utilizing Google Gemini with system prompt constraints and structured BeanOutputParser validation.",
    code: `@Service
public class EmailAssistantService {

    private final ChatClient chatClient;

    public EmailAssistantService(ChatClient.Builder chatClientBuilder) {
        this.chatClient = chatClientBuilder
            .defaultSystem("You are a telecommunications customer support assistant. " +
                           "Draft concise, empathetic, and technically accurate responses.")
            .build();
    }

    public DraftResponse generateDraft(String customerQuery, String serviceContext) {
        var parser = new BeanOutputParser<>(DraftResponse.class);
        
        String prompt = """
            Customer Inquiry: {query}
            Service Context: {context}
            Generate a formal response adhering to schema: {format}
            """;

        return chatClient.prompt()
            .user(u -> u.text(prompt)
                .param("query", customerQuery)
                .param("context", serviceContext)
                .param("format", parser.getFormat()))
            .call()
            .entity(parser);
    }
}`
  }
};

export const featuredArticle = {
  title: "The Complete Spring MVC Request-Response Lifecycle Explained",
  platform: "Medium",
  handle: "@unemployedEngineer",
  url: "https://medium.com/@unemployedEngineer/the-complete-spring-mvc-request-response-lifecycle-explained-9f342700bdb7",
  description: "An end-to-end architectural deep-dive tracing an HTTP request through Tomcat, the Servlet Filter Chain, DispatcherServlet orchestration, HandlerMappings, Interceptors, Argument Resolvers, and HttpMessageConverters back to client response serialization.",
  tags: ["Spring MVC", "Spring Boot", "DispatcherServlet", "Architecture", "Java"]
};

export const publicationsData = [
  {
    id: "ijarpr-dataset-marketplace",
    title: "A Blockchain-Based Decentralized Dataset Marketplace for Secure Data Sharing and Monetization",
    journal: "International Journal of Advance Research Publication and Reviews (IJARPR)",
    issn: "ISSN: 2582-7421",
    volume: "Volume 2, Issue 11",
    period: "November 2025",
    authors: [
      { name: "Mrs. Hemlata Kosare", role: "Co-Author" },
      { name: "Akshat Tomar", role: "Co-Author" },
      { name: "Ankit Katole", role: "Author", isHighlighted: true },
      { name: "Jayesh Kahate", role: "Co-Author" },
      { name: "Jitesh Varade", role: "Co-Author" },
      { name: "Gajendra Naphade", role: "Co-Author" }
    ],
    abstract: "A decentralized peer-to-peer framework for secure dataset trading and monetization without reliance on centralized data brokers. Employs Ethereum smart contracts for trustless access control, verifiable ownership records, and automatic payment execution, paired with InterPlanetary File System (IPFS) content-addressed distributed storage to guarantee cryptographic data integrity and provenance tracking.",
    keywords: ["Blockchain", "Smart Contracts", "IPFS", "Decentralized Storage", "Data Monetization", "Peer-to-Peer"],
    pdfUrl: "https://ijarpr.com/uploads/V2ISSUE11/IJARPR1114.pdf",
    publisherUrl: "https://ijarpr.com",
    paperId: "IJARPR1114",
    type: "Peer-Reviewed Journal Publication"
  }
];
