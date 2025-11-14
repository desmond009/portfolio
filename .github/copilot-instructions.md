<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Development Portfolio Project Guidelines

## Project Overview
This is a full-stack developer portfolio website built with:
- **Frontend**: React with Vite (dark theme, modern UI)
- **Backend**: Node.js with Express (RESTful API)
- **Architecture**: Modular, clean code organization

## Code Style Guidelines

### Frontend (React)
- Use functional components with hooks
- Keep components under 300 lines
- Use meaningful component names (e.g., `HeroSection`, not `Hero2`)
- Import styles as CSS files, not inline
- Use `const` over `let`/`var`
- PropTypes or TypeScript for type safety

### Backend (Node.js/Express)
- Keep routes simple, move logic to controllers
- Use middleware for cross-cutting concerns
- Follow REST conventions (GET, POST, etc.)
- Return consistent JSON responses
- Implement proper error handling
- Use async/await over callbacks

## Project Structure
```
frontend/
├── src/
│   ├── components/     # Reusable UI components
│   ├── api/           # API client functions
│   ├── constants/     # Static data (projects, skills)
│   ├── styles/        # Global CSS
│   ├── utils/         # Helper functions
│   └── App.jsx        # Main component

backend/
├── config/            # Configuration files
├── routes/            # API route definitions
├── controllers/       # Business logic
├── middleware/        # Express middleware
├── utils/            # Helper utilities
├── public/           # Static files (resume, etc.)
└── server.js         # Main entry point
```

## File Naming Conventions
- Components: PascalCase (e.g., `HeroSection.jsx`)
- Utils/helpers: camelCase (e.g., `scrollToSection.js`)
- CSS files: match component name (e.g., `HeroSection.css`)

## Common Tasks

### Adding a New Section
1. Create component in `frontend/src/components/`
2. Add styles in matching `.css` file
3. Import and add to `App.jsx`

### Adding Projects/Skills
1. Edit `frontend/src/constants/index.js`
2. Components automatically render new data

### Adding Backend Endpoint
1. Create controller in `backend/controllers/`
2. Create route in `backend/routes/`
3. Add to routes in `server.js`

## Technology Stack
- **Frontend**: React 18, Vite, CSS3, ES6+
- **Backend**: Express, CORS, body-parser, nodemon

## Environment Variables
- **Frontend**: `VITE_API_URL` for backend API URL
- **Backend**: `PORT` (default 5000), `NODE_ENV`