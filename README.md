
# E-Commerce Product Management System with NestJS

This is a basic e-commerce product management system built using NestJS, Node.js, and MongoDB. It allows users to perform various actions related to product management.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
 - [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Testing](#testing)

## Features

- Create, view, update, and delete products.
- User registration and login with JWT authentication.
- MongoDB database for product data storage.
- Error handling and validation for API endpoints.
- Proper project structure following NestJS best practices.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js: Install Node.js from [https://nodejs.org/](https://nodejs.org/).
- MongoDB: Install MongoDB and have it running.

## Getting Started

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/e-commerce-product-management-nestjs.git


## Installation

```bash
$ pnpm install
```

## Configuration 
Before running the application, you need to set up the environment variables. Create a .env file in the project root and configure the following variables:

```bash
MONGODB_URI=mongodb://localhost:27017/e-commerce
JWT_SECRET=your-secret-key
PORT=3000

```

## API Endpoints
- POST /products - Create a new product.
- GET /products - View a list of products.
- GET /products/:id - View a single product by ID.
- PUT /products/:id - Update a product's details.
- DELETE /products/:id - Delete a product.


## Authentication

- Register a user: POST /auth/register
- Login and obtain a JWT token: POST /auth/login


## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Testing

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

