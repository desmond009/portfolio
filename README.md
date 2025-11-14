# Developer Portfolio Website

A modern, full-stack developer portfolio website built with **React (Vite)** for the frontend and **Node.js (Express)** for the backend. The site features a sleek dark theme, responsive design, and smooth animations.

## 🚀 Features

- **Hero Section**: Eye-catching introduction with name, title, and call-to-action
- **About Section**: Bio, profile placeholder, and resume download
- **Projects Section**: Showcase of 6 featured projects with links and tags
- **Skills Section**: Organized tech stack across multiple categories
- **Contact Form**: Fully functional form integrated with the backend API
- **Responsive Design**: Mobile-friendly and optimized for all screen sizes
- **Smooth Animations**: Modern transitions and effects throughout
- **Dark Theme UI**: Professional, sleek design with gradients and custom styling
- **Fixed Navigation**: Smooth scrolling navbar with scroll detection

## 📁 Project Structure

```
portfolio/
├── frontend/                    # React Vite application
│   ├── src/
│   │   ├── components/         # Reusable components
│   │   ├── api/                # API client
│   │   ├── constants/          # Data constants
│   │   ├── styles/             # Global styles
│   │   ├── utils/              # Helper functions
│   │   └── App.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── .env
│
├── backend/                     # Express server
│   ├── config/                 # Configuration
│   ├── routes/                 # API routes
│   ├── controllers/            # Business logic
│   ├── middleware/             # Error handling
│   ├── utils/                  # Logging
│   ├── public/                 # Static files
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── README.md
├── QUICKSTART.md
└── DEPLOYMENT.md
```

## 🛠️ Tech Stack

### Frontend
- React 18 + Vite
- CSS3 with gradients and animations
- Responsive design

### Backend
- Node.js + Express
- CORS & Body Parser
- Modular architecture

## 📦 Quick Start

### Backend
```bash
cd backend
npm install
npm run dev    # Development with auto-reload
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

Visit `http://localhost:5173` in your browser.

## 📡 API Endpoints

- **POST** `/api/contact` - Submit contact form
- **GET** `/resume` - Download resume
- **GET** `/health` - Health check

## 🎨 Customization

Edit `frontend/src/constants/index.js` to update:
- Projects list
- Skills categories
- Social links

## 📱 Responsive

Optimized for desktop, tablet, and mobile devices.

## 📄 License

ISC License

## 👨‍💻 Author

**Vijender Yadav** - Full Stack & Blockchain Developer