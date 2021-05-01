import React from 'react'

const EmployeeTable = (props) => (
  <table>
    <thead>
      <tr>
        <th style={{ width: "9%" }}>First Name</th>
        <th style={{ width: "9%" }}>Last Name</th>
        <th style={{ width: "9%" }}>Hire Date</th>
        <th>Role</th>
        <th>Favourite Quote</th>
        <th>Favourite Joke</th>
        <th style={{ width: "17%" }}></th>
      </tr>
    </thead>
    <tbody>
      {props.employees.length > 0 ? (
        props.employees.map((employee) => (
          <tr key={employee._id}>
            <td>{employee.firstname}</td>
            <td>{employee.lastname}</td>
            <td>{employee.hiredate.split('T')[0]}</td>
            <td>{employee.role}</td>
            <td>{employee.quote}</td>
            <td>{employee.joke}</td>
            <td>
              <button onClick={() => props.editEmployee(employee)} className="button muted-button">Edit</button>
              <button onClick={() => props.deleteEmployee(employee._id)} className="button muted-button">Delete</button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={7}>No Employees</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default EmployeeTable