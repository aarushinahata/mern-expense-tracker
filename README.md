# 💸 MERN Expense Tracker

A modern, full-stack expense tracker web app to seamlessly manage your income and expenses, visualize your financial health, and download your data. Built with the powerful MERN stack and a beautiful, responsive UI.

---

## 🚀 Features

- 👤 Personal profile with avatar upload
- 📊 Interactive graphs & charts (Bar, Pie, Line)
- 💸 Track income & expenses by category
- 📥 Download income/expense data as Excel files
- 🏷️ Add icons & emojis to categories
- 🔒 Secure authentication (JWT)
- ☁️ Image uploads via Cloudinary
- 📱 Fully responsive design
- 🌐 Deployed on Vercel (backend & frontend)

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Recharts, Axios
- **Backend:** Node.js, Express, MongoDB (Mongoose), JWT, Multer, Cloudinary
- **Deployment:** Vercel

---

## ⚡ Quick Start

### 1. Clone the repo
```bash
git clone https://github.com/your-username/mern-expense-tracker.git
cd MERN-Expense-Tracker-master
```

### 2. Setup Environment Variables
Create `.env` files in both `backend/` and `frontend/expense-tracker/`:

#### backend/.env
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
CLIENT_URL=http://localhost:5173
PORT=5000
```

#### frontend/expense-tracker/.env
```
VITE_REACT_APP_BACKEND_BASEURL=http://localhost:5000
```

### 3. Install Dependencies
```bash
# Backend
yarn install # or npm install (in backend/)

# Frontend
cd frontend/expense-tracker
yarn install # or npm install
```

### 4. Run Locally
```bash
# Start backend (in backend/)
npm start

# Start frontend (in frontend/expense-tracker/)
npm run dev
```

---

## 🔗 API Overview

All endpoints are prefixed with `/api/v1/`

### Auth
- `POST   /auth/register` — Register new user
- `POST   /auth/login` — Login
- `GET    /auth/getUser` — Get user info (auth required)
- `POST   /auth/upload-image` — Upload profile image

### Income
- `POST   /income/add` — Add income (auth required)
- `GET    /income/get` — Get all income (auth required)
- `DELETE /income/:id` — Delete income (auth required)
- `GET    /income/download` — Download income as Excel

### Expense
- `POST   /expense/add` — Add expense (auth required)
- `GET    /expense/get` — Get all expenses (auth required)
- `DELETE /expense/:id` — Delete expense (auth required)
- `GET    /expense/download` — Download expenses as Excel

### Dashboard
- `GET    /dashboard` — Get dashboard data (auth required)

---

## 📦 Deployment
- **Vercel:** Both backend and frontend are ready for Vercel deployment. See `vercel.json` in each folder.
- **Cloudinary:** Used for image uploads. Set your Cloudinary credentials in backend `.env`.

---

## 🙏 Inspiration
Huge thanks to [this YouTube tutorial](https://www.youtube.com/watch?v=PQnbtnsYUho&t) for inspiration.

---

## 📝 License
MIT

