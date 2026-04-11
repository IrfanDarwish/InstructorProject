package com.example.instructorapi.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {


/*************  ✨ Windsurf Command ⭐  *************/
    /**
     * Returns a map indicating that the API is healthy. The map contains two
     * entries: "status" with value "ok", and "message" with value "API is
     * healthy".
     * 
     * @return a map indicating the health of the API
     */
/*******  08700221-080e-4dcc-930a-61f8401eb873  *******/
    @GetMapping("/api/health")
    public Map<String, String> health() {
        return Map.of(
            "status", "ok",
            "message", "API is healthy");
    }
}
