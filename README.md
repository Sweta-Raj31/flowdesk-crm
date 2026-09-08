# FlowDesk CRM

MERN CRM platform with Leads, Support and Logistics modules. Built with React, Node.js, Express and MongoDB.

## Run

```bash
git clone https://github.com/Sweta-Raj31/flowdesk-crm.git
cd flowdesk-crm
docker compose up --build
```

Frontend: http://localhost:5173  
API: http://localhost:5000/api/v1/health

Demo login: `admin@flowdesk.local` / `Admin@123`

## Features

- JWT authentication with bcrypt password hashing
- Role-based access control
- Lead management with search, filtering and pagination
- Support ticket management
- Shipment/logistics management
- Single aggregated dashboard endpoint to reduce frontend API calls
- Zod request validation
- MongoDB indexes and lean projections
- Helmet, CORS, rate limiting and bounded request bodies
- Docker Compose for MongoDB, API and React frontend

## Architecture

React -> Axios -> Express -> JWT middleware -> Controllers -> MongoDB/Mongoose

## API

`POST /api/v1/auth/login`  
`GET /api/v1/auth/me`  
`GET|POST|PUT|DELETE /api/v1/leads`  
`GET|POST|PUT /api/v1/tickets`  
`GET|POST|PUT /api/v1/shipments`  
`GET /api/v1/dashboard`  
`GET /api/v1/health`

## Local development

Backend: `cd backend && npm install && npm run dev`  
Frontend: `cd frontend && npm install && npm run dev`

Set `MONGODB_URI`, `JWT_SECRET`, `CLIENT_URL` and `VITE_API_URL` using the included `.env.example` files.
