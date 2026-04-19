package com.example.instructorapi.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.instructorapi.model.InstructorModel;

public interface InstructorRepository extends MongoRepository<InstructorModel, String>{

    List<InstructorModel> findByName(String name);

    List<InstructorModel> findByNameContainingIgnoreCase(String keyword);

    List<InstructorModel> findBySpecializationContainingIgnoreCase(String specialization);
}
