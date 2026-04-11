package com.example.instructorapi.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.instructorapi.dto.CreateInstructorRequest;
import com.example.instructorapi.model.InstructorModel;
import com.example.instructorapi.service.InstructorService;


//mock controller for testing purposes
@RestController
@RequestMapping("/api/instructor")
public class InstructorController {

    private final InstructorService instructorService;

    public InstructorController(InstructorService instructorService) {
        this.instructorService = instructorService;
    }

    @GetMapping
    public List<InstructorModel> getAllInstructors() {
        return instructorService.getAllInstructors();
    }
    

    @PostMapping
    public InstructorModel createInstructor(@RequestBody CreateInstructorRequest request) {
        return instructorService.createInstructor(request);
    }
    

}