package net.javaguides.springboot_backend.repsitory;

import net.javaguides.springboot_backend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {
}
