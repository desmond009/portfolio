#!/bin/bash

# Portfolio Project Setup Script
# Installs all dependencies for both frontend and backend

echo "📦 Setting Up Developer Portfolio..."
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 16 or higher from https://nodejs.org"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"
echo "✅ npm version: $(npm -v)"
echo ""

# Setup Backend
echo "📂 Setting up Backend..."
cd backend

if [ -d "node_modules" ]; then
    echo "Backend dependencies already installed"
else
    echo "Installing backend dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install backend dependencies"
        exit 1
    fi
fi

cd ..
echo "✅ Backend setup complete"
echo ""

# Setup Frontend
echo "📂 Setting up Frontend..."
cd frontend

if [ -d "node_modules" ]; then
    echo "Frontend dependencies already installed"
else
    echo "Installing frontend dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install frontend dependencies"
        exit 1
    fi
fi

cd ..
echo "✅ Frontend setup complete"
echo ""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Setup Complete!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Next steps:"
echo ""
echo "1. Option A: Start both servers automatically"
echo "   bash start.sh"
echo ""
echo "2. Option B: Start servers manually"
echo "   Terminal 1:"
echo "     cd backend && npm run dev"
echo ""
echo "   Terminal 2:"
echo "     cd frontend && npm run dev"
echo ""
echo "Frontend will be available at: http://localhost:5173"
echo "Backend will be available at: http://localhost:5000"
echo ""
echo "Happy coding! 🎉"
