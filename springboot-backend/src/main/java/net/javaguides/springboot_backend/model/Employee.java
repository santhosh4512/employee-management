package net.javaguides.springboot_backend.model;

import jakarta.persistence.*;

@Entity
public class Employee {
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @Column (name="Firstname")
    private String firstname;
    @Column(name = "Lastname")
    private String lastname;
    @Column(name = "email_id")
    private String email;

}
