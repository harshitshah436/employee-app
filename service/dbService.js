const storage = require('node-persist');
const dbService = {};

dbService.init = async () => {
  await storage.init({
    dir: './db'
  });
}

dbService.create = async (_id, employee) => {
  await storage.setItem(_id, employee);
};

dbService.findAll = async () => {
  let employees = await storage.values();
  return employees;
};

dbService.findOne = async (_id) => {
  let employee = await storage.getItem(_id);
  return employee;
};

module.exports = dbService;
