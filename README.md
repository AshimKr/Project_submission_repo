# Dual Database API with MongoDB Atlas and Node.js For Crio.do test

This project creates a simple REST API using **Node.js**, **Express**, and **Mongoose** that connects to two separate MongoDB Atlas databases:

- `employees_db`: Stores employee details
- `products_db`: Stores product details

The API fetches data from both databases and returns a combined response.

---

## 🚀 Features

- Connects to two MongoDB databases using Mongoose
- Reads secure credentials from `.env`
- Provides a single endpoint to retrieve combined data

---

## 📦 Technologies Used

- Node.js
- Express.js
- Mongoose
- MongoDB Atlas (Cloud Database)
- dotenv

---

## 🔧 Project Setup

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd dual-db-api
