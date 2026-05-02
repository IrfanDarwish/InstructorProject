package com.example.instructorapi.dto;

public class InstructorSpecializationSummary {
    private String specialization;
    private String totalInstructors;

    public InstructorSpecializationSummary() {

    }

    public InstructorSpecializationSummary(String specialization, String totalInstructors) {
        this.specialization = specialization;
        this.totalInstructors = totalInstructors;
    }

    public String getSpecialization() {
        return specialization;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }
    public String getTotalInstructors() {
        return totalInstructors;
    }
    public void setTotalInstructors(String totalInstructors) {
        this.totalInstructors = totalInstructors;
    }
}
