# Playwright Automation Practice

This repository contains automated test scripts built with [Playwright](https://playwright.dev/).  
It is designed as a practice project to demonstrate end-to-end testing skills, test organization, and CI/CD integration.

---

## 🚀 Features
- End-to-end browser automation using Playwright
- Cross-browser testing (Chromium, Firefox, WebKit)
- Organized test suites under `tests/`
- HTML and blob reports for test results
- GitHub Actions workflow for automated test runs

---

## 📂 Project Structure
├── tests/                # Playwright test files
├── playwright.config.ts  # Playwright configuration
├── package.json          # Dependencies and scripts
├── .gitignore            # Ignored files/folders
├── README.md             # Project documentation
└── reports/              # Test reports (ignored in Git)
---

## ⚙️ Setup & Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/whotfisgaby/playwright-automation-practice.git
cd playwright-automation-practice
npm install
---
🧪 Running Tests
Run all tests:

bash
npx playwright test
Run tests with UI mode:

bash
npx playwright test --ui
Generate an HTML report:

bash
npx playwright show-report

📊 CI/CD Integration
This project includes a GitHub Actions workflow (.github/workflows/playwright.yml)
that runs tests automatically on every push or pull request.

✨ Future Improvements
Add more test scenarios (login, checkout, API validation)
Integrate with reporting tools (Allure, Playwright HTML reports)
Expand CI/CD pipeline with parallel test execution
👤 Author
Developed by Gabriel Villanueva  
Practice project for QA automation with Playwright.


