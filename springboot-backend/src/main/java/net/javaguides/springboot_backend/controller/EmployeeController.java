package net.javaguides.springboot_backend.controller;

import net.javaguides.springboot_backend.model.Employee;
import net.javaguides.springboot_backend.repsitory.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/employees")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    // 🔹 GET ALL
    @GetMapping("/list")
    public List<Employee> getAllEmployee() {
        return employeeRepository.findAll();
    }

    // 🔹 POST (ADD)
    @PostMapping
    public Employee createEmployee(@RequestBody Employee emp) {
        return employeeRepository.save(emp);
    }

    // 🔹 DELETE
    @DeleteMapping("/{id}")
    public String deleteEmployee(@PathVariable Long id) {


        employeeRepository.deleteById(id);
        return "Deleted Successfully";
    }
    @PutMapping("/{id}")
    public String updateEmployee(@PathVariable Long id, @RequestBody Employee emp) {

        Employee existing = employeeRepository.findById(id).orElse(null);

        existing.setFirstname(emp.getFirstname());
        existing.setLastname(emp.getLastname());
        existing.setEmail(emp.getEmail());

        employeeRepository.save(existing);

        return "Updated Successfully";
    }
}