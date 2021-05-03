# Employee App

This project provides backend and frontend applications to manage employees.

## Overview

### Application functions

- The home page lists all available employees from the datastore. Also, it provided a form to add a new employee.
-  While creating a new Employee, only firstname, lastname, hiredate and role should be provided and the request is sent to the backend Employee API.
- Employee API adds a quote and a joke for the create employee request using external quotes and jokes APIs.
- Also, field validations are implemented such as hiredate (current or past - no future dates), required fields, and only one CEO possible.
- Employee 'Edit' and 'Delete' functionalities are also avaiable.
- All records are stored in a local datastore. Storage is persistent using node-persist npm package.

### Technologies used

- NodeJS - backend/server app provides a REST API using thee xpress router and node-persist storage
- ReactJS - frontend/client app lists existing employees and provides UI to perform CRUD operations using React Hooks

## Getting Started

### Installation

#### Prerequisites
- `node` & `npm`
    - With the installation of the node, npm is by default installed.
    - Verify using the commands: `node -v` & `npm -v`
    - (Application tested on)
        ```
        $ npm -v
            6.13.4
        $ node -v
            v12.16.1
        ```

#### Start application (Steps to Run)

In the project **root** directory, run:
```
cd client
npm ci
cd ..
npm ci
npm start
```

##### Explanation

- `npm ci` installs npm packages and create `node_modules` directory for both server and client apps. If `npm ci` gives any dependency error, use `npm install` command instead of it.
- `npm start` command works as below for this application:
    - Concurrently starts NodeJS (server) and ReactJS (client) applications.
    - NodeJS server application first runs unit tests before starting the server on the port `3001`.
    - ReactJS client application runs on the port `3000`.
- Once all steps are completed successfully, our Employee App is launched at http://localhost:3000
- API Documentation (Swagger UI) is available at http://localhost:3001/api-docs

### Installation using Docker (Cloud-native)

#### Prerequisites

- `docker` & `docker-compose`
    - Verify using the commands: `docker -v` & `docker-compose -v`
        ```
        $ docker -v
            Docker version 20.10.5, build 55c4c88
        $ docker-compose -v
            docker-compose version 1.29.0, build 07737305
        ```

#### Start application (Steps to Run)

In the project **root** directory, run:
```
docker-compose up
```

#### Stop application

```
docker-compose down
```

#### Restart containers with the new code

```
docker-compose up --build
```

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

## External Rest APIs used

- [Ron Swanson quotes API](https://github.com/jamesseanwright/ron-swanson-quotes)
- [Chuck Norris jokes API](https://api.chucknorris.io/)

## Resources

* [React Hooks](https://reactjs.org/docs/hooks-intro.html)
* [Node Persist - local server storage](https://www.npmjs.com/package/node-persist)
* [React Date Picker](https://www.npmjs.com/package/react-datepicker)
* [Primitive CSS/SASS](https://taniarascia.github.io/primitive/)
* [OpenAPI - Swagger Specification](https://swagger.io/docs/specification/about/)