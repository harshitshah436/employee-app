import React, { useState, useEffect, Fragment } from 'react'
import EmployeeTable from './tables/EmployeeTable'
import EmployeeForm from './forms/EmployeeForm'
import EmployeeService from './services/EmployeeService'

const App = () => {

  const initialFormState = { firstname: '', lastname: '', hiredate: null, role: '' }
  const [employees, setEmployees] = useState(initialFormState)
  const [update, setUpdate] = useState(false)
  const [currentEmployee, setCurrentEmployee] = useState(initialFormState)

  /**
   * useEffect hook to get a list of employees
   */
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
    setCurrentEmployee(initialFormState);
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
    setCurrentEmployee(initialFormState);
    try {
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
      hiredate: employee.hiredate,
      role: employee.role,
      quote: employee.quote,
      joke: employee.joke
    })
  }

  return (
    <div className="container">
      <h1>Employee App</h1>
      <div className="flex-row">
        <div className="flex-large">
          <Fragment>
            {
              update ? <h3>Edit Employee</h3> : <h3>Add Employee</h3>
            }
            <EmployeeForm
              addEmployee={addEmployee}
              setUpdate={setUpdate}
              updateEmployee={updateEmployee}
              setCurrentEmployee={setCurrentEmployee}
              employees={employees}
              update={update}
              currentEmployee={currentEmployee}
            />
          </Fragment>
        </div>
      </div>
      <div className="flex-row">
        <div className="flex-large">
          <h3>View Employees</h3>
          <EmployeeTable employees={employees} editEmployee={editEmployee} deleteEmployee={deleteEmployee} />
        </div>
      </div>
    </div>
  )
}

export default App;