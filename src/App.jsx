import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employee from './Employee'
import Header from './Header'
import AddEmploee from './AddEmploee'
import EditEmployee from "./EditEmployee";

function App() {
  return (
    <BrowserRouter>

      <Header /> 

    <Routes>
  <Route path="/" element={<Employee />} />
  <Route path="/add" element={<AddEmploee />} />
  <Route path="/edit/:id" element={<EditEmployee />} />
</Routes>

    </BrowserRouter>
  )
}

export default App