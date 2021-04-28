import React, { useState, useEffect } from 'react'

const EditEmployeeForm = (props) => {
  const [employee, setEmployee] = useState(props.currentEmployee)

  useEffect(() => {
    setEmployee(props.currentEmployee)
  }, [props])

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setEmployee({ ...employee, [name]: value })
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()

        props.updateEmployee(employee.id, employee)
      }}
    >
      <label>First Name</label>
      <input type="text" name="firstname" value={employee.firstname} onChange={handleInputChange} />
      <label>Last Name</label>
      <input type="text" name="lastname" value={employee.lastname} onChange={handleInputChange} />
      <label>Hire Date</label>
      <input type="text" name="hiredate" value={employee.hiredate} onChange={handleInputChange} />
      <button>Update Employee</button>
      <button onClick={() => props.setUpdate(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditEmployeeForm