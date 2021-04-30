import api from './Api'


var getAllEmployees = () => {
  return api().get('/api/employee')
}

var createEmployee = (employee) => {
  return api().post('/api/employee', employee)
}

var updateEmployee = (id, employee) => {

  return api().put(`/api/employee/${id}`, employee)
}

var deleteEmployee = (id) => {
  return api().delete(`/api/employee/${id}`)
}

const employeeService = {
  getAllEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee
}

export default employeeService;
