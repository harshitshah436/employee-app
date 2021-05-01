import React, { useState } from 'react'
import DatePicker from "react-datepicker";


const AddEmployeeForm = (props) => {

  const initialFormState = { firstname: '', lastname: '', hiredate: null, role: '' }
  const [employee, setEmployee] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target

    if(name === "role" && value === "CEO") {
      let foundEmployee = props.employees.find(emp => emp.role === value)
      if(foundEmployee) {
        event.target.setCustomValidity("Error: Only one employee can be a CEO. A CEO is already appointed.");
        event.target.reportValidity()
      } else {
        event.target.setCustomValidity(""); 
      }
    } else {
      event.target.setCustomValidity(""); 
    }

    setEmployee({ ...employee, [name]: value })
  }

  return (

    <form
      onSubmit={event => {
        
        event.preventDefault()
        if (!employee.firstname || !employee.lastname || !employee.hiredate || !employee.hiredate) {
          console.error("Error: Employee properties missing: (employee) - " + JSON.stringify(employee))
          return
        }

        props.addEmployee(employee)
        setEmployee(initialFormState)
      }}
    >
      <table>
        <tbody>
          <tr>
            <td><label>First Name</label></td>
            <td>
              <input type="text" required="required"
                name="firstname"
                value={employee.firstname}
                onChange={handleInputChange} />
            </td>
            <td><label>Last Name</label></td>
            <td>
              <input type="text" required="required"
                name="lastname"
                value={employee.lastname}
                onChange={handleInputChange} />
            </td>
            <td><label>Hire Date</label></td>
            <td>
              <DatePicker
                selected={employee.hiredate}
                onChange={date => { setEmployee({ ...employee, hiredate: date }) }}
                dateFormat="yyyy-MM-dd"
                minDate={new Date(60, 1)}
                maxDate={new Date()}
                showMonthDropdown
                showYearDropdown
                scrollableYearDropdown
                showDisabledMonthNavigation
                required={true}
                name="hiredate"
                value={employee.hiredate}
              />
            </td>
            <td><label>Role</label></td>
            <td>
              <select required="required" name="role" value={employee.role} onChange={handleInputChange}>
                <option></option>
                <option value="CEO">CEO</option>
                <option value="VP">VP</option>
                <option value="MANAGER">MANAGER</option>
                <option value="LACKEY">LACKEY</option>
              </select>
              {/* <input type="text" name="role" value={employee.role} onChange={handleInputChange} /> */}
            </td>
            <td><button style={{ marginBottom: ".5rem" }}>Add Employee</button></td>
          </tr>
        </tbody>
      </table>
    </form>
  )
}

export default AddEmployeeForm