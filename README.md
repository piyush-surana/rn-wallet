# Wallet - Expense Wallet Tracker App

A simple and elegant expense tracking mobile application built using **React Native**.  
Wallet helps users manage their daily expenses by tracking their income and spending, all in one convenient place.

---

## ✨ Features

- 🔐 **Authentication**
  - Sign Up
  - Sign In
  - Email Verification (via [Clerk])

- 📊 **Dashboard (Home Screen)**
  - Displays:
    - Total Balance
    - Total Income
    - Total Expense
  - List of all recent transactions

- ➕ **Add Transaction Page**
  - Add new income or expense with:
    - Title
    - Amount
    - Category

---

## 📱 Screens / Navigation

- **Auth Stack**
  - `SignupScreen.jsx`
  - `SigninScreen.jsx`

- **Root Stack**
  - `Index.jsx` — Overview of wallet with summary + transaction list
  - `Create.jsx` — Form to add new transactions

---

## 🛠️ Tech Stack

- **Frontend:** React Native (Expo)
- **Navigation:** React Navigation
- **Backend/Auth:** [Render ]
- **Database:** [PostgreSQL hosted on Neon]

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone [your-repo-url]
cd wallet

---

### 2. Clone the repository
```bash
npm install
# or
yarn install

### 3. Add Environment Variables
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
RENDER_API_URL=your_backend_api_url

### 4. Start the App
npx expo start

🧪 Roadmap / Future Enhancements

Category-wise filters

Expense charts and analytics

Offline mode support

Push notifications for limits

🙋‍♂️ Author

Name: Piyush Surana

GitHub: https://github.com/piyush-surana

LinkedIn: www.linkedin.com/in/piyush-surana12
