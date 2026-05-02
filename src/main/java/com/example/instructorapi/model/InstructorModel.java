package com.example.instructorapi.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "instructors")
public class InstructorModel {

    @Id
    private String id;

    @Indexed
    private String name;
    private String email;
    @Indexed
    private String specialization;
    private int yearsOfExperience;
    private String status;

    public InstructorModel() {}

    public InstructorModel(String id,String name, String email, String specialization, int yearsOfExperience, String status) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.specialization = specialization;
        this.yearsOfExperience = yearsOfExperience;
        this.status = status;
    }


    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
    
    public String getName() {
        return name;
    }

    public String getEmail() {
        return email;
    }

    public String getSpecialization() {
        return specialization;
    }

    public int getYearsOfExperience() {
        return yearsOfExperience;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }

    public void setYearsOfExperience(int yearsOfExperience) {
        this.yearsOfExperience = yearsOfExperience;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
