# Gen Z Volunteer App

A platform connecting Gen Z with social impact projects and volunteer opportunities.

## Features

- User authentication (register/login)
- Browse volunteer opportunities
- Track volunteer hours and impact
- Community engagement
- Responsive design

## Technologies

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT

## Setup

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   cd client && npm install
   ```
3. Create `.env` file based on `.env.example`
4. Start development server:
   ```bash
   npm run dev
   ```

## Environment Variables

See `.env.example` for required variables.

## API Endpoints

- `POST /api/users/register` - Register new user
- `POST /api/users/login` - Login user
- `GET /api/opportunities` - Get all opportunities (protected)
- `POST /api/opportunities` - Create new opportunity (protected)

## Deployment

1. Build frontend:
   ```bash
   cd client && npm run build
   ```
2. Start production server:
   ```bash
   npm start
