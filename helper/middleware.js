const express = require('express');
var router = express.Router();

// Enable All CORS Requests
const cors = require('cors')
router.use(cors())

// Use new bodyParser middleware from express
router.use(express.json());
router.use(express.urlencoded({
  extended: true
}));

module.exports = router;