# Backend Microservice Architecture

This repository contains a TypeScript microservice architecture project.   

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Directory Structure](#directory-structure)
- [Dependencies](#dependencies)
- [License](#license)

![Example](./TypeScript/server/shared/src/assets/microservicesVisual3.jpeg)

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

### /myEndPoint1

- Description: This endpoint processes requests and interacts with Microservice 1.
- HTTP Method: POST
- Rate Limiting: The requests to this endpoint are rate-limited using the `limiter` middleware module
- Request Body Validation: The incoming request body is validated against a predefined schema using the `Zod` library.
- Request Processing: Upon successful validation, the request data is passed to the `processMappers.process1` function from Microservice 1's `processMappers` module for further processing.
- Logging: Logging messages are generated using the `logger` module for different scenarios, such as warnings, errors, and informational messages.



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
   git clone https://github.com/anirudh-nayak-172k/Typescript-Microservice-Arch.git
```  

2 . Navigate to the Directory and install the dependencies:
```
    cd Typescript-Microservice-Arch
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
```
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
```
## Scripts

    npm run onlyTsFiles: Runs the TypeScript file server.ts using ts-node-dev, monitoring it for changes, transpiling it on-the-fly, and restarting the application when changes occur.

    npm start: Starts the application by running the compiled JavaScript file microserviceRouters.js.

    npm run startDev: Executes the startScript.sh shell script, which likely contains commands for starting your development environment. It starts the server code and TypeScript compiler in watch mode using pm2 and displays logs.

    npm run kill: Terminates the pm2 process manager along with all managed applications.

    npm run build: Transpiles the TypeScript code in the current directory using the TypeScript compiler (tsc), producing JavaScript files.

    npm run monitor: Opens a monitoring interface that displays real-time process statistics managed by pm2.

    npm run displayLogs: Displays the logs of the applications managed by pm2.

    npm run runts: Runs the TypeScript file microserviceRouters.ts using ts-node, transpiling and executing TypeScript files directly..

## Dependencies

    
**Prod Dependencies:**

- `body-parser`: Parses incoming request bodies in Express applications.
- `bunyan`: A structured logging library for Node.js applications.
- `bunyan-format`: A Bunyan log formatter that enhances the output for easier readability.
- `ddos`: Helps protect applications from Distributed Denial-of-Service (DDoS) attacks.
- `dotenv`: Loads environment variables from a `.env` file into `process.env`.
- `express`: A fast, unopinionated web framework for Node.js.
- `helmet`: Enhances security by setting various HTTP headers for Express applications.
- `jsonwebtoken`: Implements JSON Web Tokens (JWT) for user authentication and authorization.
- `limiter`: Provides rate limiting for APIs to prevent abuse.
- `morgan`: HTTP request logger middleware for Express applications.
- `nodemon`: Monitors for file changes and automatically restarts the server.
- `redis`: A popular in-memory data store for caching and other use cases.
- `response-time`: Measures the response time of Express applications.
- `ts-node-dev`: TypeScript execution and reloading tool for development.
- `zod`: A TypeScript-first schema validation library for JavaScript objects.

**Dev Dependencies:**

- `@types/express`: TypeScript type declarations for the Express framework.
- `@types/helmet`: TypeScript type declarations for the Helmet security middleware.
- `@types/jsonwebtoken`: TypeScript type declarations for JSON Web Tokens (JWT).
- `@types/morgan`: TypeScript type declarations for the Morgan HTTP request logger.
- `@types/node`: TypeScript type declarations for Node.js.
- `concurrently`: Runs multiple commands concurrently in the terminal.
- `nodemon`: Monitors for file changes and automatically restarts the server (used for development).
- `pm2`: A process manager that simplifies deployment and management of Node.js applications.
- `ts-node`: TypeScript execution environment for running TypeScript files directly.
- `typescript`: The TypeScript programming language.


## License

    This project is licensed under the MIT License.
