package com.example.instructorapi.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.instructorapi.model.InstructorModel;
import com.example.instructorapi.repository.InstructorRepository;

@Service
public class InstructorService {

    public final InstructorRepository instructorRepository;

    public InstructorService(InstructorRepository instructorRepository) {
        this.instructorRepository = instructorRepository;
    }

    public List<InstructorModel> getAllInstructors() {
        return instructorRepository.findAll();
    }

    public InstructorModel getInstructorsById(String id) {
        return instructorRepository.findById(id).orElseThrow(() -> new RuntimeException("Instructor not found"));
    }

    public InstructorModel createInstructor(InstructorModel instructor) {
        return instructorRepository.save(instructor);
    }

    public InstructorModel updateInstructor(String id,InstructorModel updated) {
        InstructorModel existing = getInstructorsById(id);
        existing.setName(updated.getName());
        existing.setEmail(updated.getEmail());
        existing.setSpecialization(updated.getSpecialization());
        existing.setYearsOfExperience(updated.getYearsOfExperience());
        return instructorRepository.save(existing);
    }

    public void deleteInstructor(String id) {
        instructorRepository.deleteById(id);
    }

    public List<InstructorModel> searchInstructorByName(String keyword){
        return instructorRepository.findByNameContainingIgnoreCase(keyword);
    }

    public List<InstructorModel> searchBySpecialization(String specialization){
        return instructorRepository.findBySpecializationContainingIgnoreCase(specialization);
    }
    
}
