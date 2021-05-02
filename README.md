# Employee App

This project provides backend and frontend applications to perform CRUD operations on an employee resource.

## Overview

### Application functions

- Basic CRUD

### Technologies used

- NodeJS - backend/server app provides a REST API for employee resource
- ReactJS - frontend/client app lists existing employees and provides UI to perform CRUD operations

## Unit tests

Using `mocha`, `chai` and `supertest` npm packages, created unit tests for the Employee API.

In the project root directory, run: `npm test`

Output:
```
   Employee API
     ✓ should create a new employee to the db. POST /api/employee (778ms)
     ✓ should return all employees. GET /api/employee
     ✓ should find an employee by a unique id. GET /api/employee/:id
     ✓ should update an employee by a unique id. PUT /api/employee/:id
     ✓ should delete an employee by a unique id. DELETE /api/employee/:id
     Create a new employee
       ✓ should have called an external quotes api
       ✓ should have called an external jokes api
 
 
   7 passing (799ms)
```

## API Documentation (Swagger UI)
Once the application starts, Swagger UI will be available at http://localhost:3001/api-docs.

<!-- DELETE BELOW -->
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
