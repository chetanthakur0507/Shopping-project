# 👜 Premium Shopping Bag project

This is a backend project for a **shopping bag e-commerce platform**. It includes an **admin panel**, handles routing, and connects to a **MongoDB database** for storing products, users, orders, and more.

## 📂 Project Structure


/backend
│
├── routes/ # All Express routes
├── controllers/ # Business logic for each route
├── models/ # Mongoose models (Product, User, Order, etc.)
├── middleware/ # Auth & error handling middleware
├── config/ # Database connection and environment config
├── uploads/ # Uploaded images or files
├── .env # Environment variables
├── server.js # Main entry point
└── package.json



---

## ⚙️ Features

- ✅ Admin Panel for managing products, users, and orders
- ✅ MongoDB database integration with Mongoose
- ✅ RESTful API routes for frontend communication
- ✅ JWT-based authentication for secure login
- ✅ Product image upload support
- ✅ Error handling middleware
- ✅ Secure environment configuration with `.env` file

---

## 🔧 Tech Stack

- **Node.js**  
- **Express.js**  
- **MongoDB**  
- **Mongoose**  
- **JWT (JSON Web Token)**  
- **Multer (for file uploads)**  
- **Dotenv**  

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/shopping-bag-backend.git
cd shopping-bag-backend
