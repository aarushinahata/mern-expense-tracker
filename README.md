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
- 🌐 Ready for Vercel deployment

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite, Tailwind CSS, Recharts, Axios
- **Backend:** Node.js, Express, MongoDB (Mongoose), JWT, Multer, Cloudinary
- **Deployment:** Vercel (Backend & Frontend)

---

## ⚡ Quick Start

### 1. Clone the repo
```bash
git clone https://github.com/aarushinahata/mern-expense-tracker.git
cd MERN-Expense-Tracker-master
```

### 2. Setup Environment Variables
Create `.env` files in both `backend/` and `frontend/expense-tracker/`:

#### backend/.env
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
CLIENT_URL=http://localhost:5173
PORT=5000
```

#### frontend/expense-tracker/.env
```env
VITE_REACT_APP_BACKEND_BASEURL=http://localhost:5000
```

### 3. Install Dependencies
```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend/expense-tracker
npm install
```

### 4. Run Locally
```bash
# Start backend (in backend/)
npm start

# Start frontend (in frontend/expense-tracker/)
npm run dev
```

---

## 🚀 Deploy to Vercel

### Step 1: Deploy Backend
1. Go to [vercel.com](https://vercel.com) → **New Project**
2. Import your GitHub repository
3. **Configure:**
   - **Root Directory:** `backend`
   - **Framework Preset:** Node.js
   - **Build Command:** (leave empty)
   - **Output Directory:** (leave empty)

4. **Environment Variables:**
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   CLIENT_URL=https://your-frontend-url.vercel.app
   ```

5. **Deploy** → Copy the backend URL

### Step 2: Deploy Frontend
1. **New Project** → Same repository
2. **Configure:**
   - **Root Directory:** `frontend/expense-tracker`
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

3. **Environment Variable:**
   ```env
   VITE_REACT_APP_BACKEND_BASEURL=https://your-backend-url.vercel.app
   ```

4. **Deploy** → Copy the frontend URL

### Step 3: Update URLs
- Update `CLIENT_URL` in backend to your frontend URL
- Redeploy both projects

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

### Health Check
- `GET    /health` — API health check
- `GET    /test` — Test endpoint

---

## 📦 Project Structure

```
MERN-Expense-Tracker-master/
├── backend/                    # Backend API (Node.js/Express)
│   ├── api/                   # Vercel serverless functions
│   ├── config/                # Database configuration
│   ├── controllers/           # Route controllers
│   ├── middleware/            # Custom middleware
│   ├── models/                # MongoDB models
│   ├── routes/                # API routes
│   ├── utils/                 # Utility functions
│   ├── server.js              # Main server file
│   ├── package.json           # Backend dependencies
│   └── vercel.json            # Vercel configuration
│
└── frontend/
    └── expense-tracker/        # Frontend App (React/Vite)
        ├── src/               # React components
        ├── public/            # Static assets
        ├── package.json       # Frontend dependencies
        └── vercel.json        # Vercel configuration
```

---

## 🔧 Environment Variables

### Backend (.env)
| Variable | Description | Required |
|----------|-------------|----------|
| `MONGO_URI` | MongoDB connection string | ✅ |
| `JWT_SECRET` | JWT signing secret | ✅ |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name | ✅ |
| `CLOUDINARY_API_KEY` | Cloudinary API key | ✅ |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret | ✅ |
| `CLIENT_URL` | Frontend URL (for CORS) | ✅ |
| `PORT` | Server port (default: 5000) | ❌ |

### Frontend (.env)
| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_REACT_APP_BACKEND_BASEURL` | Backend API URL | ✅ |

---

## 🐛 Troubleshooting

### Common Issues
1. **CORS Errors:** Ensure `CLIENT_URL` matches your frontend URL exactly
2. **Build Failures:** Check Node.js version (>=18.0.0)
3. **Environment Variables:** Redeploy after adding new variables
4. **MongoDB Connection:** Verify connection string and network access

### Health Check
Test your backend deployment:
```bash
curl https://your-backend-url.vercel.app/api/health
```

---

## 🙏 Inspiration
Huge thanks to [this YouTube tutorial](https://www.youtube.com/watch?v=PQnbtnsYUho&t) for inspiration.

---

## 📝 License
MIT

