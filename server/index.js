const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Temporary data store
let products = [
    {
        id: '1',
        name: 'Laptop',
        category: 'Electronics',
        createdAt: new Date(),
    },
    {
        id: '2',
        name: 'Writing Desk',
        category: 'Furniture',
        createdAt: new Date(),
    },
];

// GET /api/products - retrieve all products
app.get('/api/products', (req, res) => {
    // IMPLEMENT FETCH PRODUCTS LOGIC
    res.json(products);
});

// POST /api/products - add a new product
app.post('/api/products', (req, res) => {
    // IMPLEMENT ADD PRODUCT LOGIC
    const { name, category } = req.body;
    const newProduct = {
        id: (products.length + 1).toString(),
        name,
        category,
        createdAt: new Date(),
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
