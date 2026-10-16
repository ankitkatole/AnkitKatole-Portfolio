---
title: "Standardized API Error Handling with RFC-7807 in Spring Boot"
slug: "clean-spring-boot-exception-handling"
description: "Eliminating ambiguous HTTP 500 errors by structuring REST exceptions with Spring Boot ProblemDetail and standard RFC-7807 specifications."
publishedAt: "2026-09-14"
tags: ["Spring Boot", "REST APIs", "Java", "Backend"]
draft: false
---

In many backend systems, error responses are an afterthought. One endpoint returns a raw string message, another returns `{ "error": "something went wrong" }`, and uncaught exceptions spew stack traces directly into JSON payloads.

Client developers end up writing brittle parsing logic to deduce whether an issue was a validation failure, an unauthorized access attempt, or a stale database entity.

With Spring Boot 3, the `ProblemDetail` specification (RFC-7807) provides a standardized, battle-tested structure for expressing errors in HTTP APIs.

## 1. What RFC-7807 Defines

An RFC-7807 error document provides five standard members:
- `type`: A URI reference identifying the problem type.
- `title`: A short, human-readable summary of the problem.
- `status`: The HTTP status code.
- `detail`: An explanation specific to this occurrence of the problem.
- `instance`: A URI reference identifying the specific occurrence of the problem.

## 2. Implementing @RestControllerAdvice with ProblemDetail

Instead of building custom wrapper objects with arbitrary keys, extend Spring's `ResponseEntityExceptionHandler`:

```java
@RestControllerAdvice
public class GlobalApiExceptionHandler extends ResponseEntityExceptionHandler {

    private static final Logger log = LoggerFactory.getLogger(GlobalApiExceptionHandler.class);

    @ExceptionHandler(ResourceNotFoundException.class)
    public ProblemDetail handleResourceNotFound(ResourceNotFoundException ex, HttpServletRequest request) {
        log.warn("Resource missing at URI {}: {}", request.getRequestURI(), ex.getMessage());

        ProblemDetail problem = ProblemDetail.forStatusAndDetail(HttpStatus.NOT_FOUND, ex.getMessage());
        problem.setTitle("Resource Not Found");
        problem.setType(URI.create("https://api.ankitkatole.dev/errors/not-found"));
        problem.setProperty("timestamp", Instant.now());
        problem.setProperty("path", request.getRequestURI());

        return problem;
    }

    @ExceptionHandler(BusinessValidationException.class)
    public ProblemDetail handleBusinessValidation(BusinessValidationException ex, HttpServletRequest request) {
        log.info("Business rule violation at {}: {}", request.getRequestURI(), ex.getMessage());

        ProblemDetail problem = ProblemDetail.forStatusAndDetail(HttpStatus.UNPROCESSABLE_ENTITY, ex.getMessage());
        problem.setTitle("Validation Violation");
        problem.setType(URI.create("https://api.ankitkatole.dev/errors/validation"));
        problem.setProperty("errorCode", ex.getErrorCode());
        problem.setProperty("rejectedValues", ex.getViolations());

        return problem;
    }
}
```

## 3. Why This Matters for Microservices

When building microservices behind an API Gateway, uniform error shapes allow:
1. Frontend applications to bind field-level errors directly to UI forms.
2. API Gateway filters to inspect error classifications without deserializing custom vendor schemas.
3. Centralized telemetry monitors (like Prometheus and ELK) to aggregate error rates by standard RFC URI types.

Standardization removes ambiguity and makes APIs a pleasure to integrate against.
