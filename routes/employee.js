const express = require('express');
const util = require('../helper/util');

const router = express.Router();

// GET /api/employee - get a list of employees
router.get("/", async (req, res) => {
  let response = {
    "employees": [{ id: 1, firstname: 'John', lastname: 'Smith', hiredate: '2000-01-01' },
    { id: 2, firstname: 'Joe', lastname: 'Biden', hiredate: '1989-01-01' },
    { id: 3, firstname: 'Justin', lastname: 'Trudeau', hiredate: '1995-01-01' }]
  }
  res.set('Content-Type', 'application/json');
  res.send(response);
});

module.exports = router;