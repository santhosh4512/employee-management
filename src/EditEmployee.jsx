import React, { useState, useEffect } from 'react'
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"

function EditEmployee() {

  const { id } = useParams()
  const navigate = useNavigate()

  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: ""
  })

  
  useEffect(() => {
    axios.get(`http://localhost:8081/api/v1/employees/${id}`)
      .then(res => {
        setForm(res.data)
      })
      .catch(err => console.log(err))
  }, [id])

  // 🔹 handle change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  // 🔹 UPDATE submit
  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      await axios.put(`http://localhost:8081/api/v1/employees/${id}`, form)
      alert("Updated Successfully ✏️")
      navigate("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="container mt-5">

      <h2>Edit Employee</h2>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            name="firstname"
            value={form.firstname}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            name="lastname"
            value={form.lastname}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-success">
          Update
        </button>

      </form>
    </div>
  )
}

export default EditEmployee