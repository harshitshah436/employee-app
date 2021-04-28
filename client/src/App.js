import React, { useState, Fragment } from 'react'
import EmployeeTable from './tables/EmployeeTable'
import AddEmployeeForm from './forms/AddEmployeeForm'
import EditEmployeeForm from './forms/EditEmployeeForm'

const App = () => {

  const employeeData = [
    { id: 1, firstname: 'John', lastname: 'Smith', hiredate: '2000-01-01' },
    { id: 2, firstname: 'Joe', lastname: 'Biden', hiredate: '1989-01-01' },
    { id: 3, firstname: 'Justin', lastname: 'Trudeau', hiredate: '1995-01-01' },
  ]

  const initialFormState = { id: null, firstname: '', lastname: '', hiredate: '' }

  const [employees, setEmployees] = useState(employeeData)
  const [update, setUpdate] = useState(false)
  const [currentEmployee, setCurrentEmployee] = useState(initialFormState)

  const addEmployee = (employee) => {
    employee.id = employees.length + 1
    setEmployees([...employees, employee])
  }

  const deleteEmployee = (id) => {
    setUpdate(false)
    setEmployees(employees.filter((employee) => employee.id != id))
  }

  const editRow = (employee) => {
    setUpdate(true)
    setCurrentEmployee({
      id: employee.id,
      firstname: employee.firstname,
      lastname: employee.lastname,
      hiredate: employee.hiredate
    })
  }

  const updateEmployee = (id, updatedEmployee) => {
    setUpdate(false)
    setEmployees(employees.map(employee => (employee.id === id ? updatedEmployee : employee)))
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
          <EmployeeTable employees={employees} editRow={editRow} deleteEmployee={deleteEmployee} />
        </div>
      </div>
    </div>
  )
}

export default App;