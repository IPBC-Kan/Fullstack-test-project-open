# Simple Products List - Full Stack Application

A lightweight full stack application for managing a simple products list, built with React (frontend) and Node.js/Express (backend).

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18.x-61DAFB)
![Node](https://img.shields.io/badge/Node-18.x-339933)
![Express](https://img.shields.io/badge/Express-4.x-000000)

## 📋 Overview

This project is a simple product management system that allows users to:

-   View a list of products
-   Add new products with name and category

The application demonstrates basic full stack development patterns including:

-   React hooks for state management
-   RESTful API development with Express
-   Client-server communication
-   Basic error handling

## 🚀 Getting Started

### Prerequisites

-   Node.js (v14.x or higher)
-   npm (v6.x or higher)

### Installation

1. fork the repository:

    ```bash
    https://github.com/<youraccount>/Fullstack-test-project-open.git
    cd Fullstack-test-project-open
    ```

2. Install dependencies for both server and client:

    ```bash
    # Install server dependencies
    cd server
    npm install

    # Install client dependencies
    cd ../client
    npm install
    ```

### Running the Application

1. Start the server:

    ```bash
    # From the server directory
    npm run dev
    ```

    The server will run on port 5000 by default (http://localhost:5000).

2. In a separate terminal, start the client:
    ```bash
    # From the client directory
    npm run dev
    ```
    The React app will run on port 3000 by default (http://localhost:3000).

## 🏗️ Project Structure

```
simple-products-list/
├── client/                 # Frontend React application
│   ├── public/             # Static files
│   ├── src/                # React source code
│   │   ├── App.js          # Main application component
│   │   ├── App.css         # Application styles
│   │   └── index.js        # Application entry point
│   └── package.json        # Frontend dependencies
│
├── server/                 # Backend Express application
│   ├── index.js            # Server entry point
│   ├── package.json        # Backend dependencies
│   └── package-lock.json   # Dependency lock file
│
└── README.md               # Project documentation
```

## 🔌 API Endpoints

The server provides the following RESTful endpoints:

### `GET /api/products`

Returns a list of all products.

**Response:**

```json
[
    {
        "id": "1",
        "name": "Laptop",
        "category": "Electronics",
        "createdAt": "2023-05-01T12:00:00Z"
    },
    {
        "id": "2",
        "name": "Writing Desk",
        "category": "Furniture",
        "createdAt": "2023-05-02T14:30:00Z"
    }
]
```

### `POST /api/products`

Creates a new product.

**Request Body:**

```json
{
    "name": "Office Chair",
    "category": "Furniture"
}
```

**Response:**

```json
{
    "id": "3",
    "name": "Office Chair",
    "category": "Furniture",
    "createdAt": "2023-05-03T10:15:00Z"
}
```

## 🧩 Component Design

### App Component

The main React component handles:

-   Fetching products from the API
-   Managing product state with useState
-   Adding new products via form submission
-   Displaying the product list

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
