package com.example.instructorapi.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;

public class CreateInstructorRequest {
    
    @NotBlank(message = "Name is required")
    public String name;
    @NotBlank(message = "Email is required")
    public String email;
    @NotBlank(message = "Specialization is required")
    public String specialization;

    @Min(value = 0, message = "Years of experience must be a positive number    ")
    public int yearsOfExperience;

    public CreateInstructorRequest() {

    }
    
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSpecialization() {
        return specialization;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }

    public int getYearsOfExperience() {
        return yearsOfExperience;
    }

    public void setYearsOfExperience(int yearsOfExperience) {
        this.yearsOfExperience = yearsOfExperience;
    }
}
