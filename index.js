// Load environment variables from `.env` file (optional)
require('dotenv').config();

// Initialize an Express application
const express = require('express');
const app = express();

app.set("port", process.env.PORT || 3001);

// Handles all node middlewares
app.use(require('./helper/middleware'));

// Generate Swagger API docs
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const db = require('./service/dbService');
(async () => {
  // Initiate db (node-persist storage)
  await db.init();

  /*==================START APP Code==================*/
  var employeeRouter = require('./routes/employeeRoute');

  app.use('/api/employee', employeeRouter);

  // Express only serves static assets in production
  if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }

  app.listen(app.get("port"), () => {
    console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
  });
  /*==================END==================*/
})();

module.exports = {
  app
};