#!/bin/bash

echo "🚀 Setting up Vitest Experiment Project..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js (version 18.x or 20.x) first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18 or higher is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Run tests to verify setup
echo "🧪 Running tests to verify setup..."
npm run test:run

if [ $? -eq 0 ]; then
    echo "✅ All tests passed!"
else
    echo "❌ Some tests failed"
    exit 1
fi

# Generate coverage report
echo "📊 Generating coverage report..."
npm run test:coverage

echo ""
echo "🎉 Setup complete! Your Vitest project is ready to use."
echo ""
echo "Available commands:"
echo "  npm test          - Run tests in watch mode"
echo "  npm run test:run  - Run tests once"
echo "  npm run test:coverage - Run tests with coverage"
echo "  npm run dev       - Run the main application"
echo ""
echo "📚 Check README.md for more information about the project structure and GitHub Actions setup."