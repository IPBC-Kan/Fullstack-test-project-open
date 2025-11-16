import React, { useState, useEffect, use } from 'react';
import './App.css';
import axios from "axios"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


function App() {
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({ name: '', category: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // API base URL
    const API_URL = 'http://localhost:5000/api';

    // IMPLEMENT FETCH PRODUCTS FUNCTIONALITY
    useEffect(() => {
        const getAllProducts = async () => {
            try {
            const res = await axios.get(`${API_URL}/products`);
            setProducts(res.data);
            } catch (err) {
            setError(err.message);
            }
        };

  getAllProducts();
}, []);


    // Handle form input changes
    const handleInputChange = (e) => {
        // IMPLEMENT INPUT CHANGE HANDLER
        const {name, value} = e.target;
        setNewProduct({...newProduct, [name]: value});
    };

    // Add a new product
    const handleAddProduct = async (e) => {
        // IMPLEMENT ADD PRODUCT FUNCTIONALITY
        try {
            const res = await axios.post(`${API_URL}/products`, newProduct);
            setProducts([...products, res.data]);
            setNewProduct({ name: '', category: '' }); // for next time
        }
        catch (err) {
            setError(err.message);
        }

    };

    // Date formatting function
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('he-IL');
    };

    return (
        <div className="app-container">
            <h1>Product List</h1>

            {/* Display errors */}
            {error && <div className="error">{error}</div>}

            {/* Form to add a product */}
            <form className="product-form" onSubmit={handleAddProduct}>
                <h2>Add New Product</h2>
                <div className="form-group">
                    <label htmlFor="name">Product Name:</label>
                    <input type="text" id="name" name="name" value={newProduct.name} onChange={handleInputChange}placeholder="Enter product name" />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category:</label>
                    <input type="text" id="category" name="category" value={newProduct.category} onChange={handleInputChange} placeholder="Enter category" />
                </div>
                <button type="submit" className="btn-add">
                    Add Product
                </button>
            </form>

            {/* Products List Display */}
            <div className="products-container">
                <h2>Existing Products</h2>
                {/**IMPLEMENT LIST */}
                <DataTable value={products} responsiveLayout="scroll">
                <Column field="id" header="ID"/>
                <Column field="name" header="Name"/>
                <Column field="category" header="Category" />
                <Column field="createdAt" header="Created At" />
            </DataTable>
            </div>
        </div>
    );
}

export default App;
