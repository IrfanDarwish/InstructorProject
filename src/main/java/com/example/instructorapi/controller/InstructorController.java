package com.example.instructorapi.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

//mock controller for testing purposes
@RestController
public class InstructorController {

    @GetMapping("/api/instructor")
    public Map<String, String> instructMap() {
        return Map.of(
            "name", "John Doe",
            "email", "aFw8P@example.com",
            "specialization", "Java",
            "yearsOfExperience", "5");
    }
}