# Backend Microservice Architecture

This repository demonstrates a sample backend microservice architecture using Node.js and Express.js.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Directory Structure](#directory-structure)
- [Dependencies](#dependencies)
- [License](#license)

## Introduction

This project showcases a microservice-based architecture for building scalable and modular backend systems. It aims to provide a foundation for building distributed applications with separate services for different functionalities.

## Middleware

The project includes several middleware components that enhance the functionality and security of the API Gateway service:

- Response Time Middleware: Measures the response time of each request and adds it to the response headers.

- Morgan Middleware: Logs HTTP requests to the console, providing useful information for debugging and monitoring.

- Helmet Middleware: Sets various security-related HTTP headers to protect the API from common vulnerabilities.

- JWT Middleware: Handles JSON Web Token (JWT) authentication, ensuring secure access to protected routes.

- DDoS Middleware: Provides protection against Distributed Denial-of-Service (DDoS) attacks by limiting request rates.

- Body Parser Middleware: Parses incoming request bodies in JSON format, allowing easy access to request data.

Feel free to explore the individual middleware modules located in the 'Middlewares/Gateway-Middlewares' directory for more details on their implementation and usage.

## API Endpoints

The API Gateway service includes multiple endpoints that interact with various microservices. Each endpoint is associated with specific rate-limiting middleware and request processing logic. Here are the details of the endpoints:

### /myEndPoint

- Description: This endpoint processes requests and interacts with Microservice 1.
- HTTP Method: POST
- Rate Limiting: The requests to this endpoint are rate-limited using the `expressRateLimiterMiddleware` middleware from the `myEndPointMiddlewares` module.
- Request Body Validation: The incoming request body is validated against a predefined schema using the `Joi` library.
- Request Processing: Upon successful validation, the request data is passed to the `processMappers.process1` function from Microservice 1's `processMappers` module for further processing.
- Logging: Logging messages are generated using the `logger` module for different scenarios, such as warnings, errors, and informational messages.

### /myEndPoint2

- Description: This endpoint processes requests and interacts with Microservice 2.
- HTTP Method: POST
- Rate Limiting: The requests to this endpoint are rate-limited using the `expressRateLimiterMiddleware` middleware from the `myEndPoint2Middlewares` module.
- Request Body Validation: The incoming request body is validated against a predefined schema using the `Joi` library.
- Request Processing: Upon successful validation, the request data is passed to the `processMappers2.process1` function from Microservice 2's `processMappers` module for further processing.
- Logging: Logging messages are generated using the `logger` module for different scenarios, such as warnings, errors, and informational messages.

### /myEndPoint3

- Description: This endpoint processes requests and interacts with Microservice 3.
- HTTP Method: POST
- Rate Limiting: The requests to this endpoint are rate-limited using the `expressRateLimiterMiddleware` middleware from the `myEndPoint3Middlewares` module.
- Request Body Validation: The incoming request body is validated against a predefined schema using the `Joi` library.
- Request Processing: Upon successful validation, the request data is passed to the `processMappers3.process1` function from Microservice 3's `processMappers` module for further processing.
- Logging: Logging messages are generated using the `logger` module for different scenarios, such as warnings, errors, and informational messages.

Feel free to explore the code in `microserviceRouters.js` for more details on the implementation of each endpoint and its associated middleware.

## Features

- **Microservices**: The architecture is based on microservices, where each service represents a specific business functionality or feature.
- **RESTful APIs**: Each microservice exposes RESTful APIs for communication and interaction with other services.
- **Logging and Monitoring**: Built-in logging and monitoring capabilities are implemented to track service performance and troubleshoot issues.
- **Database Integration**: Services integrate with appropriate databases for data storage and retrieval.
- **Error Handling**: Error handling mechanisms are implemented to provide meaningful error messages and handle exceptions gracefully.
- **Authentication and Authorization**: Services implement authentication and authorization mechanisms to ensure secure access to resources.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:
```  
   git clone https://github.com/anirudh-nayak-172k/Backend-Microservice -Architecture.git
```  

2 . Navigate to the Directory and install the dependencies:
```
    cd Backend-Microservice-Architecture
    npm install
```

3 . Run the startDev script to start the application

```    
    npm run startDev
   
```
4 . Access the APIs:
Each service exposes its own set of APIs.

5. To see the Logs:

```    
    npm run displayLogs
   
```
 6. To stop the application entirely,

```    
    npm run kill
   
```
## Directory Structure

├── ecosystem.config.js
├── JavaScriptFiles
│   └── server
│       ├── API-Gateway
│       │   └── src
│       │       ├── app.js
│       │       ├── app.js.map
│       │       ├── Microservice-Routers
│       │       │   ├── microserviceRouters.js
│       │       │   └── microserviceRouters.js.map
│       │       └── Middlewares
│       │           ├── Gateway-Middlewares
│       │           │   ├── ddos.middleware.js
│       │           │   ├── ddos.middleware.js.map
│       │           │   ├── helmet.middleware.js
│       │           │   ├── helmet.middleware.js.map
│       │           │   ├── jwt.middleware.js
│       │           │   ├── jwt.middleware.js.map
│       │           │   ├── morgan.middleware.js
│       │           │   ├── morgan.middleware.js.map
│       │           │   ├── responseTime.middleware.js
│       │           │   └── responseTime.middleware.js.map
│       │           └── Route-Middlewares
│       │               ├── expressRateLimit.middleware.js
│       │               └── expressRateLimit.middleware.js.map
│       ├── shared
│       │   └── src
│       │       ├── classes
│       │       │   ├── userDefinedClasses.js
│       │       │   └── userDefinedClasses.js.map
│       │       ├── configurations
│       │       │   ├── logger.configurations.js
│       │       │   ├── logger.configurations.js.map
│       │       │   ├── redis.configurations.js
│       │       │   └── redis.configurations.js.map
│       │       ├── constants
│       │       │   ├── constants.js
│       │       │   └── constants.js.map
│       │       ├── interfaces
│       │       │   ├── userDefinedInterfaces.js
│       │       │   └── userDefinedInterfaces.js.map
│       │       ├── models
│       │       │   ├── models.js
│       │       │   └── models.js.map
│       │       └── utilities
│       │           ├── errorManagementUtilities.js
│       │           └── errorManagementUtilities.js.map
│       └── sub-systems
│           └── Microservice-1
│               ├── Processes
│               │   ├── process.js
│               │   └── process.js.map
│               └── Process-Mappers
│                   ├── processMappers.js
│                   └── processMappers.js.map
├── package.json
├── package-lock.json
├── README.md
├── startScript.sh
├── tsconfig.json
└── TypeScript
    └── server
        ├── API-Gateway
        │   └── src
        │       ├── app.ts
        │       ├── Microservice-Routers
        │       │   └── microserviceRouters.ts
        │       └── Middlewares
        │           ├── Gateway-Middlewares
        │           │   ├── ddos.middleware.ts
        │           │   ├── helmet.middleware.ts
        │           │   ├── jwt.middleware.ts
        │           │   ├── morgan.middleware.ts
        │           │   └── responseTime.middleware.ts
        │           └── Route-Middlewares
        │               └── expressRateLimit.middleware.ts
        ├── shared
        │   └── src
        │       ├── classes
        │       │   └── userDefinedClasses.ts
        │       ├── configurations
        │       │   ├── logger.configurations.ts
        │       │   └── redis.configurations.ts
        │       ├── constants
        │       │   └── constants.ts
        │       ├── customDeclarations
        │       │   └── customDeclarations.d.ts
        │       ├── interfaces
        │       │   └── userDefinedInterfaces.ts
        │       ├── models
        │       │   └── models.ts
        │       └── utilities
        │           └── errorManagementUtilities.ts
        └── sub-systems
            └── Microservice-1
                ├── Processes
                │   └── process.ts
                └── Process-Mappers
                    └── processMappers.ts

## Scripts

    npm startDev: Starts the services using PM2 in development mode.
    
    npm start: Starts the API Gateway service.
    
    npm kill: Stops all running PM2 processes.
    
    npm monitor: Monitors the PM2 processes.
    
    npm displayLogs: Displays the logs from PM2 processes.
    
    npm test: Runs the test scripts.

## Dependencies

    Express: Fast, unopinionated, minimalist web framework for Node.js.
    
    Body Parser: Node.js body parsing middleware.
    
    Bunyan: Logging library for Node.js.
    
    Bunyan Format: Human-readable bunyan log formatter.
    
    DDoS: DDoS protection middleware for Express.js.
    
    Dotenv: Loads environment variables from a .env file.
    
    Helmet: Secure your Express apps by setting various HTTP headers.
    
    Joi: Object schema validation for Node.js. 
    
    JSONWebToken: JSON Web Token implementation for Node.js.
    
    Morgan: HTTP request logger middleware for Node.js.
    
    Nodemon: Automatically restarts the server on file changes during   development.
    
    PM2: Production process manager for Node.js applications.
    
    Express Rate Limit: Rate limiting middleware for Express.js.
    
    Redis: In-memory data structure store used as a database and cache.
    
    Rate Limit Redis: Redis-based store for express-rate-limit middleware.
    
    Response Time: Express.js middleware to record response times.

## License

    This project is licensed under the MIT License.
