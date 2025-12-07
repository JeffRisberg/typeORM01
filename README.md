# NestJS + TypeORM Expense Tracker

A simple REST API for managing expense records using NestJS and TypeORM with SQLite.

## Features

- Full CRUD operations for expense records
- Each expense has: name, date, and amount
- Input validation using class-validator
- SQLite database with TypeORM
- RESTful API endpoints

## Installation

```bash
npm install
```

## Running the Application

```bash
npm run start:dev
```

The server will start on `http://localhost:3000`

## API Endpoints

### Create Expense
```
POST /expenses
Content-Type: application/json

{
  "name": "Office Supplies",
  "date": "2025-12-05",
  "amount": 45.99
}
```

### Get All Expenses
```
GET /expenses
```

### Get Single Expense
```
GET /expenses/:id
```

### Update Expense
```
PUT /expenses/:id
Content-Type: application/json

{
  "name": "Updated Name",
  "amount": 55.99
}
```

### Delete Expense
```
DELETE /expenses/:id
```

## Example Using cURL

```bash
# Create an expense
curl -X POST http://localhost:3000/expenses \
  -H "Content-Type: application/json" \
  -d '{"name":"Lunch","date":"2025-12-05","amount":25.50}'

# Get all expenses
curl http://localhost:3000/expenses

# Get expense by ID
curl http://localhost:3000/expenses/1

# Update expense
curl -X PUT http://localhost:3000/expenses/1 \
  -H "Content-Type: application/json" \
  -d '{"amount":30.00}'

# Delete expense
curl -X DELETE http://localhost:3000/expenses/1
```

## Project Structure

```
src/
├── expense/
│   ├── dto/
│   │   ├── create-expense.dto.ts
│   │   └── update-expense.dto.ts
│   ├── expense.controller.ts
│   ├── expense.entity.ts
│   ├── expense.module.ts
│   └── expense.service.ts
├── app.module.ts
└── main.ts
```
