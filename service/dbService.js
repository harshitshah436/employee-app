const storage = require('node-persist');
const dbService = {};
const collection = 'employees';

dbService.init = async () => {
  await storage.init({
    dir: './db'
  });
}

dbService.findAll = async () => {
  let employees = await storage.getItem(collection);
  if (typeof employees === 'undefined') {
    return [];
  }
  return employees;
};

dbService.create = async (_id, employee) => {
  let employees = await dbService.findAll();
  employees.push({
    _id: _id,
    ...employee
  });
  await storage.setItem(collection, employees);
  return employees;
};

dbService.update = async (_id, updatedEmployee) => {
  let employees = await dbService.findAll();
  employees = employees.map(employee => employee._id === _id ? updatedEmployee : employee)
  await storage.setItem(collection, employees);
  return employees;
};

dbService.findOne = async (_id) => {
  let employees = await dbService.findAll();
  let employee = employees.filter(employee => employee._id === _id)[0];
  return employee;
};

dbService.delete = async (_id) => {
  let employees = await dbService.findAll();
  employees = employees.filter(employee => employee._id !== _id);
  await storage.setItem(collection, employees);
  return employees;
};

module.exports = dbService;
