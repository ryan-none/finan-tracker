# Finance Tracker Backend

Production-ready authentication backend using Node.js, Express, TypeScript, and PostgreSQL.

## Features
- User signup and signin with JWT authentication
- Secure password hashing (bcrypt)
- Centralized error handling
- Strict TypeScript
- Scalable folder structure
- Security best practices

## Setup
1. Copy `.env.example` to `.env` and fill in your values.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Build and run in development:
   ```sh
   npm run dev
   ```
4. Build for production:
   ```sh
   npm run build && npm start
   ```

## SQL Schema
```
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## Folder Structure
- src/controllers
- src/routes
- src/services
- src/middleware
- src/config
- src/utils
- src/types

## Security Decisions
- Passwords are hashed with bcrypt (configurable salt rounds)
- JWT secret and DB credentials are stored in environment variables
- Parameterized queries prevent SQL injection
- Centralized error handler prevents sensitive info leaks
- JWT tokens have expiration
- Input validation for all auth endpoints

## License
MIT
