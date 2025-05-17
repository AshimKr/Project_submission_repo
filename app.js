const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Connection strings
const employeesDbURI = 'mongodb+srv://anonymousone679:9k9RedYiCFZc90Ct@cluster0.enbf6et.mongodb.net/employees_db?retryWrites=true&w=majority&appName=Cluster0';
const productsDbURI = 'mongodb+srv://anonymousone679:9k9RedYiCFZc90Ct@cluster0.enbf6et.mongodb.net/products_db?retryWrites=true&w=majority&appName=Cluster0';

// Create connections
const employeeConn = mongoose.createConnection(employeesDbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const productConn = mongoose.createConnection(productsDbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define schemas and models
const Employee = employeeConn.model('Employee', new mongoose.Schema({ name: String, role: String }));
const Product = productConn.model('Product', new mongoose.Schema({ name: String, price: Number }));

// API Route
app.get('/combined-data', async (req, res) => {
  try {
    const employees = await Employee.find({});
    const products = await Product.find({});
    res.json({ employees, products });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
