import React from 'react'

const EmployeeTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Hire Date</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.employees.length > 0 ? (
        props.employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.firstname}</td>
            <td>{employee.lastname}</td>
            <td>{employee.hiredate}</td>
            <td>
              <button onClick={() => { props.editRow(employee) }} className="button muted-button">Edit</button>
              <button onClick={() => props.deleteEmployee(employee.id)} className="button muted-button">Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={4}>No Employees</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default EmployeeTable