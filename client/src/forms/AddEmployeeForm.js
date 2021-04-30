import React, { useState } from 'react'

const AddEmployeeForm = (props) => {

  const initialFormState = { firstname: '', lastname: '', hiredate: '' }
  const [employee, setEmployee] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target

    setEmployee({ ...employee, [name]: value })
  }
  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!employee.firstname || !employee.lastname || !employee.hiredate) return

        props.addEmployee(employee)
        setEmployee(initialFormState)
      }}
    >
      <label>First Name</label>
      <input type="text" name="firstname" value={employee.firstname} onChange={handleInputChange} />
      <label>Last Name</label>
      <input type="text" name="lastname" value={employee.lastname} onChange={handleInputChange} />
      <label>Hire Date</label>
      <input type="text" name="hiredate" value={employee.hiredate} onChange={handleInputChange} />
      <button>Add new employee</button>
    </form>
  )
}

export default AddEmployeeForm