const express = require('express');
const bodyParser = require('body-parser');
var router = express.Router();

// Enable All CORS Requests
const cors = require('cors')
router.use(cors())

// Use bodyParser middleware
router.use(bodyParser.json());
router.use(bodyParser.urlencoded());

module.exports = router;