package com.example.instructorapi.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.instructorapi.model.InstructorModel;
import com.example.instructorapi.service.InstructorService;

import jakarta.validation.Valid;


//mock controller for testing purposes
@RestController
@RequestMapping("/api/v1/instructors")
public class InstructorController {

    private final InstructorService instructorService;

    public InstructorController(InstructorService instructorService) {
        this.instructorService = instructorService;
    }

    @GetMapping
    public Page<InstructorModel> getAllInstructors(
        @RequestParam(required = false) String keyword,
        @RequestParam(required = false) String specialization, 
        Pageable pageable) 
        {
            return instructorService.getPagedInstructors(keyword, specialization, pageable);
        }
    
    @GetMapping("/{id}")
    public InstructorModel getInstructorById(@PathVariable String id) {
        return instructorService.getInstructorsById(id);
    }

    @PostMapping
    public InstructorModel createInstructor(@Valid @RequestBody InstructorModel instructor) {
        return instructorService.createInstructor(instructor);
    }
    
    @PutMapping("/{id}")
    public InstructorModel updateInstructor(@PathVariable String id, @Valid @RequestBody InstructorModel instructor) {
        return instructorService.updateInstructor(id, instructor);
    }

    @DeleteMapping("/{id}")
    public void deleteInstructor(@PathVariable String id) {
        instructorService.deleteInstructor(id);
    }
}