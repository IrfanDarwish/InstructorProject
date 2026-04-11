package com.example.instructorapi.service;

import java.util.ArrayList;
import java.util.List;

import com.example.instructorapi.model.InstructorModel;

public class InstructorService {

    public final List<InstructorModel> instructors = new ArrayList<>();

    public List<InstructorModel> getAllInstructors() {
        return instructors;
    }
    
}
