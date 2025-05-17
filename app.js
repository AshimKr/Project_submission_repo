require('dotenv').config(); // Load .env variables

const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Load env variables
const PORT = process.env.PORT || 3000;
const employeesDbURI = process.env.EMPLOYEES_DB_URI;
const productsDbURI = process.env.PRODUCTS_DB_URI;

// Connect to MongoDB
const employeeConn = mongoose.createConnection(employeesDbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const productConn = mongoose.createConnection(productsDbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define schemas and models
const Employee = employeeConn.model('Employee', new mongoose.Schema({
  name: String,
  role: String
}));

const Product = productConn.model('Product', new mongoose.Schema({
  name: String,
  price: Number
}));

// API route
app.get('/combined-data', async (req, res) => {
  try {
    const employees = await Employee.find({});
    const products = await Product.find({});
    res.json({ employees, products });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
