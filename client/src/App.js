import React, { useState, useEffect, Fragment } from 'react'
import EmployeeTable from './tables/EmployeeTable'
import AddEmployeeForm from './forms/AddEmployeeForm'
import EditEmployeeForm from './forms/EditEmployeeForm'
import EmployeeService from './services/EmployeeService'

const App = () => {

  const initialFormState = { firstname: '', lastname: '', hiredate: '' }
  const [employees, setEmployees] = useState(initialFormState)
  const [update, setUpdate] = useState(false)
  const [currentEmployee, setCurrentEmployee] = useState(initialFormState)

  useEffect(() => {
    getEmployees()
  }, [])

  const getEmployees = async () => {
    let employees;
    try {
      let response = await EmployeeService.getAllEmployees();
      employees = response.data;
      setEmployees(employees);
    } catch (error) {
      console.error(error);
    }
  }

  const addEmployee = async (employee) => {
    try {
      let response = await EmployeeService.createEmployee(employee);
      let employees = response.data;
      setEmployees(employees);
    } catch (error) {
      console.error(error);
    }
  }

  const deleteEmployee = async (id) => {
    setUpdate(false);
    try {
      let response = await EmployeeService.deleteEmployee(id);
      let employees = response.data;
      setEmployees(employees);
    } catch (error) {
      console.error(error);
    }
  }

  const updateEmployee = async (id, updatedEmployee) => {
    setUpdate(false)
    try {
      console.log("DEBUG1: " + id);
      console.log("DEBUG2: " + JSON.stringify(updatedEmployee));
      let response = await EmployeeService.updateEmployee(id, updatedEmployee);
      let employees = response.data;
      setEmployees(employees);
    } catch (error) {
      console.error(error);
    }
  }

  const editEmployee = (employee) => {
    setUpdate(true)
    setCurrentEmployee({
      _id: employee._id,
      firstname: employee.firstname,
      lastname: employee.lastname,
      hiredate: employee.hiredate
    })
  }

  return (
    <div className="container">
      <h1>Employee App</h1>
      <div className="flex-row">
        <div className="flex-large">
          {update ? (
            <Fragment>
              <h2>Edit Employee</h2>
              <EditEmployeeForm
                setUpdate={setUpdate}
                currentEmployee={currentEmployee}
                updateEmployee={updateEmployee}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h2>Add Employee</h2>
              <AddEmployeeForm addEmployee={addEmployee} />
            </Fragment>
          )}
        </div>
        <div className="flex-large">
          <h2>View Employees</h2>
          <EmployeeTable employees={employees} editEmployee={editEmployee} deleteEmployee={deleteEmployee} />
        </div>
      </div>
    </div>
  )
}

export default App;