package com.example.instructorapi.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.instructorapi.dto.InstructorResponseV2;
import com.example.instructorapi.model.InstructorModel;
import com.example.instructorapi.service.InstructorService;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequestMapping("/api/v2/instructors")
public class InstructorControllerV2 {
    private final InstructorService instructorService;

    public InstructorControllerV2(InstructorService instructorService) {
        this.instructorService = instructorService;
    }

    @GetMapping
    public List<InstructorResponseV2> getAllInstructorsV2() {
        return instructorService.getAllInstructors().stream()
            .map(this::mapToResponseV2)
            .toList();
    }

    private InstructorResponseV2 mapToResponseV2(InstructorModel instructor) {
        String profileSummary = instructor.getName()
        + " specializes in "
        + instructor.getSpecialization()
        + " and has "
        + instructor.getYearsOfExperience()
        + " years of teaching experience.";

        String experienceLevel;
        if (instructor.getYearsOfExperience() < 3) {
            experienceLevel = "Junior";
        } else if (instructor.getYearsOfExperience() < 6) {
            experienceLevel = "Intermediate";
        } else {
            experienceLevel = "Senior";
        }

        String availabilityStatus = instructor.getStatus().equalsIgnoreCase("ACTIVE") ? "Available for teaching" : "Currently unavailable for teaching";

        return new InstructorResponseV2(
            instructor.getId(),
            instructor.getName(),
            instructor.getSpecialization(),
            availabilityStatus,
            experienceLevel,
            profileSummary
        );
    }
        
    
    
    
}
