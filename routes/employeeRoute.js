const express = require('express');
const dbService = require('../service/dbService');
const util = require('../helper/util');

const router = express.Router();

// GET /api/employee - get a list of employees
router.get("/", async (req, res) => {
  let response = await dbService.findAll();
  res.send(response);
});

// POST /api/employee - create an employee
router.post("/", async (req, res) => {
  let _id = util.getUniqueNanoId();
  let response = await dbService.create(_id, req.body);
  res.send(response);
});

// PUT /api/employee/:id - put/update an employee record matching with the given :id
router.put("/:id", async (req, res) => {
  let _id = req.params.id;
  let response = await dbService.update(_id, req.body);
  res.send(response);
});

// GET /api/employee/:id - get an employee record matching with the given :id
router.get("/:id", async (req, res) => {
  let _id = req.params.id;
  let response = await dbService.findOne(_id);
  res.send(response);
});

// DELETE /api/employee/:id - delete an employee record matching with the given :id
router.delete("/:id", async (req, res) => {
  let _id = req.params.id;
  let response = await dbService.delete(_id);
  res.send(response);
});

module.exports = router;