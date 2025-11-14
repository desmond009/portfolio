# 🚀 Quick Start Guide

Get your portfolio website up and running in minutes!

## Prerequisites

- Node.js 16+ installed
- npm or yarn package manager
- Terminal/Command line access

## 1️⃣ Install Dependencies

### Backend
```bash
cd backend
npm install
```

### Frontend
```bash
cd frontend
npm install
```

## 2️⃣ Start the Development Servers

### Terminal 1 - Backend Server
```bash
cd backend
npm run dev
```
✅ Backend runs on `http://localhost:5000`

### Terminal 2 - Frontend Development Server
```bash
cd frontend
npm run dev
```
✅ Frontend runs on `http://localhost:5173`

## 3️⃣ Open in Browser

Visit `http://localhost:5173` to see your portfolio!

## 🔧 Configuration

### Update Your Information

Edit `frontend/src/constants/index.js`:

```javascript
// Update projects
export const PROJECTS = [
  {
    id: 1,
    name: 'Your Project Name',
    description: 'Your project description',
    demo: 'https://demo-link.com',
    code: 'https://github.com/yourrepo',
    tags: ['React', 'Node.js'],
  },
];

// Update skills
export const SKILLS = [
  { category: 'Frontend', items: ['React', 'TypeScript', 'CSS3', 'Vite'] },
  { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB'] },
];

// Update social links
export const SOCIAL_LINKS = [
  { name: 'GitHub', url: 'https://github.com/yourprofile' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile' },
];
```

### Replace Your Resume

Replace `backend/public/resume.pdf` with your actual resume file.

### Customize Colors

Edit `frontend/src/styles/globals.css`:

```css
:root {
  --primary-color: #6366f1;
  --accent-color: #06b6d4;
  --background-color: #0f172a;
  /* ... customize other colors */
}
```

## 📝 Testing the Contact Form

1. Navigate to the Contact section
2. Fill in the form with test data
3. Click "Send Message"
4. Check the backend terminal for the submission log

## 🛠️ Available Commands

### Backend
```bash
npm start       # Production mode
npm run dev     # Development mode with auto-reload
```

### Frontend
```bash
npm run dev      # Development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 🚢 Deployment

See `DEPLOYMENT.md` for detailed deployment instructions.

## 💡 Tips

- **Hot Reload**: Both frontend and backend support auto-reload during development
- **CORS**: Already configured for local development
- **API URL**: Frontend API URL can be changed in `frontend/.env`
- **Resume**: Place your resume in `backend/public/resume.pdf`

## 🆘 Troubleshooting

### Port Already in Use
If port 5000 or 5173 is already in use:

**Backend**: Edit `backend/config/server.js` and change the PORT
**Frontend**: Edit `frontend/vite.config.js` and change the port

### CORS Errors
Make sure both servers are running and the API URL in `frontend/.env` matches your backend URL.

### Blank Page
Check browser console (F12) for errors and backend terminal for API issues.

## 📧 Support

For issues or questions, refer to the main README.md or create an issue in your repository.

---

Happy coding! 🎉