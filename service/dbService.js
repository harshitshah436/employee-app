const storage = require('node-persist');
const dbService = {};
const collection = 'employees';

/**
 * Initialize db instance
 */
dbService.init = async () => {
  await storage.init({
    dir: process.env.NODE_PERSIST_DATA_DIR
  });
}

/**
 * Find all employees
 * 
 * @returns a list of employees
 */
dbService.findAll = async () => {
  let employees = await storage.getItem(collection);
  if (typeof employees === 'undefined') {
    return [];
  }
  return employees;
};

/**
 * Creates an employee by automatically adding a favorite quote and a favorite 
 * joke from external APIs.
 * 
 * @param {String} _id 
 * @param {Object} employee 
 * @returns a list of employees
 */
dbService.create = async (_id, employee) => {
  let employees = await dbService.findAll();
  employees.push({
    _id: _id,
    ...employee
  });
  await storage.setItem(collection, employees);
  return employees;
};

/**
 * Updates an employee by the given payload.
 * 
 * @param {String} _id 
 * @param {Object} updatedEmployee 
 * @returns a list of employees
 */
dbService.update = async (_id, updatedEmployee) => {
  let employees = await dbService.findAll();
  employees = employees.map(employee => employee._id === _id ? updatedEmployee : employee)
  await storage.setItem(collection, employees);
  return employees;
};

/**
 * Find an employee by a given unique id.
 * 
 * @param {String} _id 
 * @returns an employee
 */
dbService.findOne = async (_id) => {
  let employees = await dbService.findAll();
  let employee = employees.filter(employee => employee._id === _id)[0];
  return employee;
};

/**
 * Delete an employee by a given unique id.
 * 
 * @param {*} _id 
 * @returns a list of employees
 */
dbService.delete = async (_id) => {
  let employees = await dbService.findAll();
  employees = employees.filter(employee => employee._id !== _id);
  await storage.setItem(collection, employees);
  return employees;
};

module.exports = dbService;
