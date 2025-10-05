# Library Management API (Express + TypeScript + MongoDB)

A **RESTful API** built with **Express**, **TypeScript**, and **MongoDB (Mongoose)** for managing books and borrowing operations in a library system.

This project is part of the **Apollo Level 2 - Web Development (Assignment 3: B5A3)** course.

---

## Live Links

- **Live API:** \[https://library-management-omega-five.vercel.app\]
- **GitHub Repository:** \[https://github.com/abujakariacse/L2B5A3\]
- **Video Explanation:** \[Public Video Link Here\]

---

## Objective

Develop a **Library Management System** using **Express**, **TypeScript**, and **MongoDB** with schema validation, business logic enforcement, and aggregation.

---

## Features

### Book Management

- Create, Read, Update, and Delete (CRUD) books.
- Field validation with proper error messages.
- Filter and sort books by genre or creation date.
- Automatically update `available` status when copies reach zero.

### Borrow Management

- Borrow books with quantity and due date.
- Validates available copies before borrowing.
- Automatically updates copies and availability.
- Implements **Mongoose static method** for availability logic.

### Borrow Summary (Aggregation)

- Uses MongoDB aggregation to summarize total borrowed quantity per book.
- Returns book title, ISBN, and total borrowed quantity.

### Additional Features

- Centralized error handling.
- Schema-level and business-level validation.
- Mongoose middleware (`pre`, `post`) support.
- Modular structure for scalability.

---

## Tech Stack

| Layer      | Technology                 |
| ---------- | -------------------------- |
| Framework  | Express.js                 |
| Language   | TypeScript                 |
| Database   | MongoDB with Mongoose      |
| Validation | Mongoose Schema Validation |

---

---

## Setup Instructions (Run Locally)

### Clone the Repository

```bash
git clone https://github.com/abujakariacse/L2B5A3.git
cd L2B5A3
npm install
`add .env
PORT=5000
DATABASE_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/libraryDB

`
npm run build
npm start:dev
The server will run at: http://localhost:5000

```
