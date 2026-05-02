package com.example.instructorapi.service;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.stereotype.Service;

import static org.springframework.data.mongodb.core.aggregation.Aggregation.*;

import com.example.instructorapi.dto.InstructorStatusSummary;

@Service
public class InstructorReportService {
    private final MongoTemplate mongoTemplate;
    
    public InstructorReportService(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    public List<InstructorStatusSummary> countInstructorsByStatus() {
        Aggregation aggregation = newAggregation(
            group("status").count().as("totalInstructors"),
            project("totalInstructors").and("_id").as("status"),
            sort(Sort.Direction.ASC, "status")
        );
        
        return mongoTemplate
        .aggregate(aggregation, "instructors", InstructorStatusSummary.class)
        .getMappedResults();
    }
}
