# README

## Overview

This project contains:
- Gherkin scenarios describing the required documentation checks
- One implemented Playwright test in TypeScript

## Running Tests

### Locally
```bash
# Install dependencies
npm ci

# Install Playwright browsers
npx playwright install --with-deps

# Run tests headless
npm test

# Run tests headed for debugging
npm run test:headed

# Run a single test in debug mode
npm run test:debug
```

### In GitHub Actions
The workflow .github/workflows/playwright.yml runs the full test suite on every push or pull request to main.