package com.example.instructorapi.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.instructorapi.dto.InstructorSpecializationSummary;
import com.example.instructorapi.dto.InstructorStatusSummary;
import com.example.instructorapi.service.InstructorReportService;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;



@RestController
@RequestMapping("/api/v1/reports/instructors")
public class InstructorReportController {
    private final InstructorReportService instructorReportService;

    public InstructorReportController(InstructorReportService instructorReportService) {
        this.instructorReportService = instructorReportService;
    }

    @GetMapping("/by-status")
    public List<InstructorStatusSummary> countInstructorsByStatus() {
        return instructorReportService.countInstructorsByStatus();
    }

    @GetMapping("/by-specialization")
    public List<InstructorSpecializationSummary> countInstructorsBySpecialization() {
        return instructorReportService.countInstructorsBySpecialization();
    }
    
    

}
