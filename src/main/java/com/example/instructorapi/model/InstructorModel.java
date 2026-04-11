package com.example.instructorapi.model;

public class InstructorModel {

    private String name;
    private String email;
    private String specialization;
    private int yearsOfExperience;

    public InstructorModel(String name, String email, String specialization, int yearsOfExperience) {
        this.name = name;
        this.email = email;
        this.specialization = specialization;
        this.yearsOfExperience = yearsOfExperience;
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

}
