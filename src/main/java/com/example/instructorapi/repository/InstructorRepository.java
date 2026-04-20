package com.example.instructorapi.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.instructorapi.model.InstructorModel;

public interface InstructorRepository extends MongoRepository<InstructorModel, String>{

    List<InstructorModel> findByName(String name);

    Page<InstructorModel> findByNameContainingIgnoreCase(String keyword, Pageable pageable);

    Page<InstructorModel> findBySpecializationContainingIgnoreCase(String specialization, Pageable pageable);

    Page<InstructorModel> findByNameContainingIgnoreCaseAndSpecializationContainingIgnoreCase(String keyword, String specialization, Pageable pageable);
}
