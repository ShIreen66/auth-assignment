# Secure Login & Password Reset System (JWT + Node.js)

This project is part of the **Full Stack Web Developer Assignment** for **Pribex Tech Pvt Ltd**.  
It replicates the **Brixel Properties login flow** (email → password → forgot → reset) using **JWT authentication** and **MongoDB**.

---

## Tech Stack
- **Frontend:** HTML, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB Atlas  
- **Auth:** JWT + bcrypt  
- **Testing:** Postman  
- **Deployment:** Render  

---

## Environment Variables
Create a `.env` file inside the backend folder:

PORT=4000
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES=1d
RESET_TOKEN_EXPIRY_MINUTES=10


---

## API Endpoints

| Action | Method | Endpoint | 
|---------|---------|----------|
| Register | POST | `/api/register` 
| Login | POST | `/api/login` 
| Forgot Password | POST | `/api/forgot-password` 
| Reset Password | POST | `/api/reset-password/:token` 
| Profile | GET | `/api/profile` | JWT Token |

---

## Run Locally

```bash
git clone https://github.com/yourusername/auth-system.git
cd auth-system/backend
npm install
npm run dev
Server: http://localhost:4000

## Frontend

Basic responsive pages using Tailwind CSS:
index.html → Login
forgot.html → Forgot Password
reset.html → Reset Password

Update in each page: 
const BASE_URL = "http://localhost:4000/api";

Deployment

Backend deployed on **Render**.  
Live URL:  
https://auth-assignment-xng1.onrender.com/api


