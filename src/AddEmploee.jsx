import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"

function AddEmployee() {

  const navigate = useNavigate()

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: ""
  })

  // 🔹 handle change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  // 🔹 submit
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await axios.post("http://localhost:8081/api/v1/employees", form)
      alert("Employee Added ✅")
      navigate("/") // back to list
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container mt-5">

      <h2>Add Employee</h2>

      <form onSubmit={handleSubmit}>

        {/* First Name */}
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            name="firstname"
            value={form.firstname}
            onChange={handleChange}
            required
          />
        </div>

        {/* Last Name */}
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            name="lastname"
            value={form.lastname}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-success">
          Submit
        </button>

      </form>
    </div>
  )
}

export default AddEmployee