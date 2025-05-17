const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const PORT = 3000;

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

app.get('/combined-data', async (req, res) => {
    let employeesConnection, productsConnection;

    try {
        // Connect to both databases
        employeesConnection = await mysql.createConnection(employeesDbConfig);
        productsConnection = await mysql.createConnection(productsDbConfig);

        // Query employee and product data
        const [employees] = await employeesConnection.execute('SELECT * FROM employees');
        const [products] = await productsConnection.execute('SELECT * FROM products');

        res.json({
            employees,
            products
        });

    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).json({ error: 'Internal server error' });
    } finally {
        if (employeesConnection) await employeesConnection.end();
        if (productsConnection) await productsConnection.end();
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
