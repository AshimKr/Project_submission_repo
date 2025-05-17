# Combined Data API - Node.js Project

This project demonstrates how to create an API using **Node.js** that connects to **two separate MySQL databases**, fetches data from each, and returns a combined response. The setup is designed to showcase cross-database querying within a single API.

---

## 📁 Project Structure

project-root/
│
├── app.js # Main application file (Express server)
├── package.json # NPM configuration file
└── README.md # Project documentation (this file)

## ⚙️ Technologies Used

- **Node.js**
- **Express.js**
- **MySQL2 (Promise-based)**


## 🧱 Databases Setup

The project uses two MySQL databases:

### 1. `employees_db`
Stores employee details.

```sql
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE employees (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    role VARCHAR(50)
);

CREATE DATABASE products_db;

USE products_db;

CREATE TABLE products (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    price DECIMAL(10,2)
);

Setup Instructions
1. Clone the Repository

git clone <repository-url>
cd project-root

npm install

const employeesDbConfig = {
    host: 'localhost',
    user: 'your_user',
    password: 'your_password',
    database: 'employees_db'
};

const productsDbConfig = {
    host: 'localhost',
    user: 'your_user',
    password: 'your_password',
    database: 'products_db'
};

node app.js

GET http://localhost:3000/combined-data
