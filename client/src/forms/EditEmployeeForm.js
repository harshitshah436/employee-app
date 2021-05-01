import React, { useState, useEffect } from 'react'
import DatePicker from "react-datepicker";

const EditEmployeeForm = (props) => {
  const [employee, setEmployee] = useState(props.currentEmployee)
  
  useEffect(() => {
    setEmployee(props.currentEmployee)
  }, [props])

  const handleInputChange = (event) => {
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
      onSubmit={(event) => {
        event.preventDefault()

        props.updateEmployee(employee._id, employee)
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
                selected={new Date(employee.hiredate)}
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
                value={new Date(employee.hiredate)}
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
            </td>
            <td><button style={{ marginBottom: ".5rem" }}>Update Employee</button></td>
            <td>
              <button style={{ marginBottom: ".5rem" }} onClick={() => props.setUpdate(false)} className="button muted-button">
                Cancel
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      {/* <label>First Name</label>
      <input type="text" name="firstname" value={employee.firstname} onChange={handleInputChange} />
      <label>Last Name</label>
      <input type="text" name="lastname" value={employee.lastname} onChange={handleInputChange} />
      <label>Hire Date</label>
      <input type="text" name="hiredate" value={employee.hiredate} onChange={handleInputChange} />
      <button>Update Employee</button>
      <button onClick={() => props.setUpdate(false)} className="button muted-button">
        Cancel
      </button> */}
    </form>
  )
}

export default EditEmployeeForm