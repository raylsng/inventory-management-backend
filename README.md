# Inventory Management Backend API Documentation

## Prerequisites
- Node.js
- Database PostgreSQL
- Prisma ORM
- Express.js
- Apidog
---
## Installation

1. Melakukan clone repository:
   ```bash
   git clone https://github.com/raylsng/inventory-management-backend.git
   
2. Instal dependensi :
   ```bash
   npm install
   
3. Periksa URL pada file .env :
   ```bash
   DATABASE_URL="postgresql://postgres:password@localhost:5432/inventory-management"
   
4. Melakukan migrasi Prisma :
   ```bash
   npx prisma migrate dev

5. Mulai aplikasi :
   ```bash
   npm start
   
---
# Endpoints API

## CRUD API Documentation
## Overview
Beberapa API di bawah ini memiliki fungsi CRUD terhadap Manajemen Users, Items, dan Transactions. Endpoint yang tersedia memungkinkan kita untuk Create, Read (Retrieve), Update, dan Delete terhadap Records dari Users, Items, dan Transactions.

## User Endpoints

- **POST /users/**  
  Add a new user.

  **Request Body**:  
  ```json
  {
    "username": "Username1",
    "email": "user1@example.com",
    "password": "user1"
  }
  ```

- **GET /users/**  
  Retrieve all users.

- **GET /users/:id**  
  Retrieve a user by their ID.

  **Params**:  
  - `id`: The ID of the user.

- **PATCH /users/:id**  
  Update a user by their ID.

  **Request Body**:  
  ```json
  {
    "username": "Updatedusername1",
    "email": "updatedemailuser1@example.com",
    "password": "kata_sandi",
    "role": "ADMIN"
  }
  ```

- **DELETE /users/:id**  
  Delete a user by their ID.

---

## Item Endpoints

- **POST /items/**  
  Add a new item.

  **Request Body**:  
  ```json
  {
    "name": "Item Name",
    "description": "Item Description",
    "quantity": 10
  }
  ```

- **GET /items/**  
  Retrieve all items.

- **GET /items/:id**  
  Retrieve an item by its ID.

  **Params**:  
  - `id`: The ID of the item.

- **PUT /items/:id**  
  Update an item by its ID.

  **Request Body**:  
  ```json
  {
    "name": "Updated Item Name",
    "description": "Updated Item Description",
    "quantity": 10
  }
  ```

- **DELETE /items/:id**  
  Delete an item by its ID.

---


## Transaction Endpoints

- **POST /transactions/borrow**  
  Borrow an item (create a new transaction).

  **Request Body**:  
  ```json
  {
    "userId": 1,
    "itemId": 3,
    "quantityBorrowed": 10
  }
  ```

- **GET /transactions/**  
  Retrieve all transactions.

- **GET /transactions/user**  
  Retrieve transactions by user ID.

  **Request Body**:  
  ```json
  {
    "userId": 1
  }
  ```

- **GET /transactions/:id**  
  Retrieve a transaction by its ID.

  **Params**:  
  - `id`: The ID of the transaction.

- **PATCH /transactions/verify/:transactionId**  
  Update transaction status.

  **Request Body**:  
  ```json
  {
    "status": "verified"
  }
  ```

- **POST /transactions/return/:transactionId**  
  Return an item by transaction ID.

  **Request Body**:  
  ```json
  {
    "userId": 1
  }
  ```

You can now adapt and save this as your `README.md` file for the project!

