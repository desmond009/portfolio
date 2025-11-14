#!/bin/bash

# Portfolio Project Verification Script
# Checks if all necessary files and dependencies are in place

echo "🔍 Verifying Portfolio Project Structure..."
echo ""

ERRORS=0
WARNINGS=0

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to check file existence
check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✓${NC} $1"
    else
        echo -e "${RED}✗${NC} $1"
        ((ERRORS++))
    fi
}

# Function to check directory existence
check_dir() {
    if [ -d "$1" ]; then
        echo -e "${GREEN}✓${NC} $1/"
    else
        echo -e "${RED}✗${NC} $1/"
        ((ERRORS++))
    fi
}

echo "📂 Checking Directory Structure..."
check_dir "backend"
check_dir "frontend"
check_dir "backend/config"
check_dir "backend/routes"
check_dir "backend/controllers"
check_dir "backend/middleware"
check_dir "backend/utils"
check_dir "backend/public"
check_dir "frontend/src"
check_dir "frontend/src/components"
check_dir "frontend/src/api"
check_dir "frontend/src/constants"
check_dir "frontend/src/utils"
check_dir "frontend/src/styles"

echo ""
echo "📄 Checking Backend Files..."
check_file "backend/server.js"
check_file "backend/package.json"
check_file "backend/config/server.js"
check_file "backend/routes/contactRoutes.js"
check_file "backend/controllers/contactController.js"
check_file "backend/middleware/errorHandler.js"
check_file "backend/utils/logger.js"

echo ""
echo "📄 Checking Frontend Files..."
check_file "frontend/package.json"
check_file "frontend/vite.config.js"
check_file "frontend/src/App.jsx"
check_file "frontend/src/App.css"
check_file "frontend/src/components/Hero.jsx"
check_file "frontend/src/components/About.jsx"
check_file "frontend/src/components/Projects.jsx"
check_file "frontend/src/components/Skills.jsx"
check_file "frontend/src/components/Contact.jsx"
check_file "frontend/src/components/Footer.jsx"
check_file "frontend/src/api/apiClient.js"
check_file "frontend/src/constants/index.js"
check_file "frontend/src/utils/helpers.js"
check_file "frontend/src/styles/globals.css"

echo ""
echo "📚 Checking Documentation..."
check_file "README.md"
check_file "QUICKSTART.md"
check_file "DEPLOYMENT.md"

echo ""
echo "📦 Checking Node Modules..."
if [ -d "backend/node_modules" ]; then
    echo -e "${GREEN}✓${NC} backend/node_modules/"
else
    echo -e "${YELLOW}⚠${NC} backend/node_modules/ (not installed - run 'cd backend && npm install')"
    ((WARNINGS++))
fi

if [ -d "frontend/node_modules" ]; then
    echo -e "${GREEN}✓${NC} frontend/node_modules/"
else
    echo -e "${YELLOW}⚠${NC} frontend/node_modules/ (not installed - run 'cd frontend && npm install')"
    ((WARNINGS++))
fi

echo ""
echo "🔗 Checking Dependencies..."

# Check if Node.js is installed
if command -v node &> /dev/null; then
    echo -e "${GREEN}✓${NC} Node.js: $(node -v)"
else
    echo -e "${RED}✗${NC} Node.js not found"
    ((ERRORS++))
fi

# Check if npm is installed
if command -v npm &> /dev/null; then
    echo -e "${GREEN}✓${NC} npm: $(npm -v)"
else
    echo -e "${RED}✗${NC} npm not found"
    ((ERRORS++))
fi

echo ""
echo "📋 Summary:"
echo -e "Errors: ${RED}$ERRORS${NC}"
echo -e "Warnings: ${YELLOW}$WARNINGS${NC}"

if [ $ERRORS -eq 0 ]; then
    echo ""
    echo -e "${GREEN}✅ Project structure looks good!${NC}"
    echo ""
    echo "Next steps:"
    echo "1. Install dependencies: bash setup.sh"
    echo "2. Start development: bash start.sh"
    exit 0
else
    echo ""
    echo -e "${RED}❌ Some files are missing. Please check the structure.${NC}"
    exit 1
fi