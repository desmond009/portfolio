# Project Configuration Guide

## Directory Structure Overview

```
portfolio/
├── backend/                    # Express.js backend server
│   ├── config/
│   │   └── server.js          # Server configuration & environment variables
│   ├── routes/
│   │   └── contactRoutes.js   # API route handlers
│   ├── controllers/
│   │   └── contactController.js  # Business logic for routes
│   ├── middleware/
│   │   └── errorHandler.js    # Global error handling middleware
│   ├── utils/
│   │   └── logger.js          # Logging utility
│   ├── public/
│   │   └── resume.pdf         # Resume file (served to frontend)
│   ├── server.js              # Main server entry point
│   ├── package.json           # Backend dependencies
│   └── .env                   # Backend environment variables
│
├── frontend/                   # React + Vite frontend
│   ├── src/
│   │   ├── components/        # React components
│   │   │   ├── Hero.jsx       # Hero section with intro
│   │   │   ├── About.jsx      # About section
│   │   │   ├── Projects.jsx   # Projects showcase
│   │   │   ├── Skills.jsx     # Skills section
│   │   │   ├── Contact.jsx    # Contact form
│   │   │   └── Footer.jsx     # Footer with links
│   │   ├── api/
│   │   │   └── apiClient.js   # API communication with backend
│   │   ├── constants/
│   │   │   └── index.js       # Data: projects, skills, social links
│   │   ├── styles/
│   │   │   └── globals.css    # Global CSS & theme variables
│   │   ├── utils/
│   │   │   └── helpers.js     # Utility functions (scroll, download)
│   │   ├── App.jsx            # Main App component
│   │   ├── App.css            # App-level styles & navbar
│   │   └── main.jsx           # React entry point
│   ├── package.json           # Frontend dependencies
│   ├── vite.config.js         # Vite configuration
│   ├── index.html             # HTML template
│   └── .env                   # Frontend environment variables
│
├── .github/
│   └── copilot-instructions.md  # AI assistant guidelines
├── .gitignore                 # Git ignore rules
├── README.md                  # Main documentation
├── QUICKSTART.md              # Quick start guide
├── DEPLOYMENT.md              # Deployment instructions
├── setup.sh                   # Setup script (installs dependencies)
├── start.sh                   # Start script (runs both servers)
├── verify.sh                  # Verify script (checks project structure)
└── package.json               # Root package.json (convenience scripts)
```

## Configuration Files

### Backend Environment (.env)
```
PORT=5000
NODE_ENV=development
```

### Frontend Environment (.env)
```
VITE_API_URL=http://localhost:5000/api
```

## Key Configuration Points

### Backend Server (backend/config/server.js)
- **PORT**: 5000 (can be changed)
- **NODE_ENV**: "development" or "production"
- CORS enabled for frontend communication
- Body parser middleware configured

### Frontend Vite (frontend/vite.config.js)
- Default port: 5173
- Hot Module Reloading (HMR) enabled
- Optimized for development with fast refresh

### API Configuration (frontend/src/api/apiClient.js)
- Base URL: http://localhost:5000/api
- Endpoint: `/api/contact` for contact form
- Error handling and response parsing included

### Theme Configuration (frontend/src/styles/globals.css)
CSS variables for consistent theming:
```css
--primary-color: #6366f1
--secondary-color: #818cf8
--background-color: #0f172a
--surface-color: #1e293b
--text-primary: #f1f5f9
--text-secondary: #cbd5e1
--accent-color: #06b6d4
```

## Data Configuration

### Projects (frontend/src/constants/index.js)
- Minilink - URL shortener
- SoulScript - Blockchain journaling
- Sol_Faucet - Solana faucet
- Twin-up - Social platform
- TollCrypt - Blockchain toll system
- OrcaEarn - DeFi yield farming

### Skills Organization
- Frontend: React, TypeScript, CSS3, Vite
- Backend: Node.js, Express, MongoDB, REST APIs
- Blockchain: Solidity, Web3.js, Solana, Smart Contracts
- Languages: JavaScript, TypeScript, Python, C++

### Social Links
- GitHub
- LinkedIn
- Twitter
- Email

## Scripts and Commands

### Root Directory
```bash
npm run setup              # Install all dependencies
npm run start              # Start both servers
npm run verify             # Verify project structure
npm run dev:backend        # Start backend server only
npm run dev:frontend       # Start frontend server only
npm run build:frontend     # Build frontend for production
```

### Backend Directory
```bash
cd backend
npm start                  # Production mode
npm run dev               # Development with auto-reload (nodemon)
```

### Frontend Directory
```bash
cd frontend
npm run dev               # Development server
npm run build             # Build for production
npm run preview           # Preview production build
```

## API Endpoints

### POST /api/contact
Contact form submission
- Request: { name, email, message }
- Response: { success: true, message: "..." }

### GET /resume
Download resume file

### GET /health
Server health check

## Deployment Considerations

### Frontend
- Build output: `frontend/dist/`
- Deploy to: Vercel, Netlify, GitHub Pages, or custom server
- Environment variable: `VITE_API_URL` (backend URL)

### Backend
- Main file: `backend/server.js`
- Deploy to: Heroku, Railway, DigitalOcean, or custom server
- Environment variables: `PORT`, `NODE_ENV`

## Performance Settings

### Frontend Build
- Minification: terser (default)
- Code splitting: enabled
- CSS optimization: enabled

### Backend
- No database (currently uses in-memory/logging)
- Static file serving: `backend/public/`
- CORS: Configured for local development

## Security Notes

- ✅ CORS enabled for local development
- ✅ Input validation in contact form
- ✅ Environment variables for sensitive data
- ⚠️ In production, add request rate limiting
- ⚠️ Consider adding email verification for contact form
- ⚠️ Add HTTPS/SSL certificates in production

## Customization Checklist

- [ ] Update your name in Hero component
- [ ] Replace projects in constants
- [ ] Update skills list
- [ ] Change color scheme in globals.css
- [ ] Replace resume.pdf with your resume
- [ ] Update social links
- [ ] Change profile placeholder with actual image
- [ ] Update company/brand information
- [ ] Configure email service (optional)
- [ ] Set up analytics (optional)

## Troubleshooting Guide

### Port Conflicts
- Backend: Edit `backend/config/server.js` PORT variable
- Frontend: Edit `frontend/vite.config.js` server.port

### Module Not Found
```bash
# Clear and reinstall dependencies
rm -rf backend/node_modules frontend/node_modules
npm install (in each directory)
```

### CORS Errors
- Check backend is running on correct port
- Verify `VITE_API_URL` in frontend/.env
- Check browser console for exact error

### Styling Issues
- Verify CSS variable names match globals.css
- Check component CSS file is imported
- Clear browser cache (Ctrl+Shift+Delete)

## Next Steps

1. ✅ Verify project structure: `bash verify.sh`
2. ✅ Install dependencies: `bash setup.sh`
3. ✅ Start development: `bash start.sh`
4. ✅ Customize content in constants/index.js
5. ✅ Replace resume.pdf with your resume
6. ✅ Deploy frontend to Vercel/Netlify
7. ✅ Deploy backend to Railway/Heroku
