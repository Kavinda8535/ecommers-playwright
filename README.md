# Saucedemo Playwright Regression Suite

This project is a **Playwright regression test suite** for [SauceDemo](https://www.saucedemo.com/) built with **TypeScript**, following **best practices**.

## 📂 Project Structure

```
saucedemo-playwright/
 ├── package.json
 ├── playwright.config.ts
 ├── .env
 ├── .gitignore
 ├── pages/               # Page Object Models (POM)
 ├── fixtures/            # Fixtures (login state, etc.)
 ├── tests/               # Regression tests
 └── .github/workflows/   # GitHub Actions CI/CD
```

## ✅ Features
- **Page Object Model (POM)** for maintainability
- **Fixtures** for logged-in state
- **Regression coverage**: Login, Inventory, Cart, Checkout
- **CI/CD ready** with GitHub Actions
- **Secrets managed via .env or GitHub secrets**

## 🚀 Setup & Run Locally

1. Clone repository:
   ```bash
   git clone <your-repo-url>
   cd saucedemo-playwright
   ```

2. Install dependencies:
   ```bash
   npm install
   npx playwright install
   ```

3. Create a `.env` file (already included in this project):
   ```env
   USERNAME=standard_user
   PASSWORD=secret_sauce
   BASE_URL=https://www.saucedemo.com/
   ```

4. Run tests:
   ```bash
   npm test
   ```

5. Run tests with UI:
   ```bash
   npm run test:ui
   ```

6. Run tests in headed mode:
   ```bash
   npm run test:headed
   ```

## ⚙️ GitHub Actions CI/CD

This project includes a GitHub Actions workflow:

- Located at `.github/workflows/playwright.yml`
- Runs tests automatically on every **push** and **pull request** to `main`

### Setup Secrets on GitHub
Go to:
```
Repo → Settings → Secrets and variables → Actions → New repository secret
```
Add:
- `USERNAME = standard_user`
- `PASSWORD = secret_sauce`

## 📊 Test Reports

- HTML reports are generated in `playwright-report/`
- To view locally after running tests:
  ```bash
  npx playwright show-report
  ```

## 🛠 Useful Commands
- Codegen to record tests:
  ```bash
  npm run codegen
  ```

- Update browsers:
  ```bash
  npx playwright install
  ```

---

🎯 With this setup, you can confidently run **automated regression tests** both locally and in **GitHub Actions CI/CD**.
