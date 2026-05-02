package com.example.instructorapi.dto;

public class InstructorStatusSummary {
    private String status;
    private String totalInstructors;

    public InstructorStatusSummary() {

    }

    public InstructorStatusSummary(String status, String totalInstructors) {
        this.status = status;
        this.totalInstructors = totalInstructors;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getTotalInstructors() {
        return totalInstructors;
    }

    public void setTotalInstructors(String totalInstructors) {
        this.totalInstructors = totalInstructors;
    }
}
