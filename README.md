# Vitest Experiment

A sample project demonstrating Vitest testing setup with GitHub Actions integration.

## Features

- ✅ Vitest testing framework setup
- ✅ Comprehensive test coverage
- ✅ GitHub Actions CI/CD pipeline
- ✅ Automatic testing on dev branch pushes
- ✅ Coverage reporting
- ✅ Multi-Node.js version testing

## Project Structure

```
vitest-experiment/
├── src/
│   ├── index.js          # Main application file
│   └── utils.js          # Utility functions
├── test/
│   └── utils.test.js     # Test files
├── .github/
│   └── workflows/
│       └── test.yml      # GitHub Actions workflow
├── vitest.config.js      # Vitest configuration
├── package.json          # Project dependencies and scripts
└── README.md            # This file
```

## Getting Started

### Prerequisites

- Node.js (version 18.x or 20.x)
- npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

```bash
npm run dev
```

### Running Tests

```bash
# Run tests in watch mode
npm test

# Run tests once
npm run test:run

# Run tests with coverage
npm run test:coverage
```

## Available Scripts

- `npm test` - Run tests in watch mode
- `npm run test:run` - Run tests once and exit
- `npm run test:coverage` - Run tests with coverage report
- `npm run dev` - Run the main application

## Testing

This project uses [Vitest](https://vitest.dev/) as the testing framework. Tests are located in the `test/` directory and follow the naming convention `*.test.js`.

### Test Coverage

The project includes comprehensive tests for all utility functions:

- Mathematical operations (add, subtract, multiply, divide)
- Number utilities (isEven, factorial)
- Error handling and edge cases

## GitHub Actions

The project includes a GitHub Actions workflow that:

- Triggers on pushes to the `dev` branch
- Triggers on pull requests to the `dev` branch
- Tests against Node.js versions 18.x and 20.x
- Runs the full test suite
- Generates coverage reports
- Uploads coverage to Codecov (optional)

## Utility Functions

### Math Operations
- `add(a, b)` - Adds two numbers
- `subtract(a, b)` - Subtracts second number from first
- `multiply(a, b)` - Multiplies two numbers
- `divide(a, b)` - Divides first number by second (throws error on division by zero)

### Number Utilities
- `isEven(num)` - Checks if a number is even
- `factorial(n)` - Calculates factorial of a number (throws error for negative numbers)

## Contributing

1. Create a feature branch from `dev`
2. Make your changes
3. Ensure all tests pass
4. Create a pull request to `dev` branch

The GitHub Actions workflow will automatically run tests on your pull request.

## License

MIT