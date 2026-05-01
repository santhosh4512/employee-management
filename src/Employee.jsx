import React, { useState, useEffect } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'

function Employee() {

  const [stat, setStat] = useState([])

  const data = async () => {
    try {
      const res = await axios.get("http://localhost:8081/api/v1/employees/list")
      setStat(res.data)
    } catch (error) {
      console.log(error)
    }
  }
   const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/api/v1/employees/${id}`)
      
      data() 
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    data()
  }, [])

  return (
    <div className="container-fluid bg-light vh-100 d-flex justify-content-center align-items-start pt-4">

  <div className="w-75">

    <div className="d-flex justify-content-start mb-2">
      <Link to="/add" className="btn btn-primary mb-2"> Add</Link>
    </div>

   
    <table className="table table-bordered table-hover text-center">
      <thead className="table-dark">
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {stat.map((emp,index) => (
          <tr key={emp.id}>
            <td>{index+1}</td>
            <td>{emp.firstname}</td>
            <td>{emp.lastname}</td>
            <td>{emp.email}</td>
            <td>
              <Link to={`/edit/${emp.id}`} className="btn btn-warning btn-sm me-2">Update</Link>
              <button className="btn btn-danger btn-sm "  onClick={() => handleDelete(emp.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>

  </div>

</div>
    
  )
}

export default Employee