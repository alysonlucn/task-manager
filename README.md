# Task Manager

A simple task management API built with Node.js, Express, TypeScript, and TypeORM.

## Features

- User authentication and registration
- Create, read, update, delete tasks
- Toggle task completion status
- PostgreSQL database with TypeORM

## Installation

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables (see .env.example)
4. Run the development server: `npm run dev`

## API Endpoints

### Authentication
- POST /users - Register a new user
- POST /users/login - Login

### Tasks (requires authentication)
- GET /tasks - List user's tasks
- POST /tasks - Create a new task
- GET /tasks/:id - Get task by ID
- PUT /tasks/:id - Update task
- DELETE /tasks/:id - Delete task
- PATCH /tasks/:id/complete - Toggle task completion

### Health
- GET /health - Health check
