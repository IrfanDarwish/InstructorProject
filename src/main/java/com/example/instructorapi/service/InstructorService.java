package com.example.instructorapi.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.instructorapi.dto.CreateInstructorRequest;
import com.example.instructorapi.model.InstructorModel;

@Service
public class InstructorService {

    public final List<InstructorModel> instructors = new ArrayList<>();

    public List<InstructorModel> getAllInstructors() {
        return instructors;
    }

    public InstructorModel createInstructor(CreateInstructorRequest request) {
        InstructorModel instructor = new InstructorModel(
            request.getName(),
            request.getEmail(),
            request.getSpecialization(),
            request.getYearsOfExperience());
        instructors.add(instructor);
        return instructor;
    }
    
}
