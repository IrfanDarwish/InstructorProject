package com.example.instructorapi.service;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.instructorapi.model.InstructorModel;
import com.example.instructorapi.repository.InstructorRepository;

@Service
public class InstructorService {

    public final InstructorRepository instructorRepository;
    private static final Logger logger = LoggerFactory.getLogger(InstructorService.class);

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

    public Page<InstructorModel> getPagedInstructors(String keyword, String specialization,Pageable pageable) {
        
        logger.info("===Query Log===");
        logger.info("Keyword: {}", keyword);
        logger.info("Specialization: {}", specialization);
        logger.info("Page Number: {}", pageable.getPageNumber());
        logger.info("Page Size: {}", pageable.getPageSize());
        logger.info("Sort: {}", pageable.getSort());
        logger.info("===============");
        
        
        if (keyword != null && specialization != null) {
            return instructorRepository.findByNameContainingIgnoreCaseAndSpecializationContainingIgnoreCase(keyword, specialization, pageable);
        }
        if (keyword != null){
            return instructorRepository.findByNameContainingIgnoreCase(keyword, pageable);
        }
        if (specialization != null && !specialization.isEmpty()) {
            return instructorRepository.findBySpecializationContainingIgnoreCase(specialization, pageable);
        }
        return instructorRepository.findAll(pageable);
    }

    
}
