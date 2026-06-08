## Exercise 2: Backend Refactoring

Original issue: Refactoring Code 

AI prompt used:
Refactor this Spring Boot method.

Rules:
1. Keep the same behaviour.
2. Do not add new features.
3. Do not change the database model.
4. Do not introduce new dependencies.
5. Improve readability and error handling.
6. Explain each change before showing the final code.

Code:
public InstructorModel updateInstructor(String id,InstructorModel updated) {
        InstructorModel existing = getInstructorsById(id);
        existing.setName(updated.getName());
        existing.setEmail(updated.getEmail());
        existing.setSpecialization(updated.getSpecialization());
        existing.setYearsOfExperience(updated.getYearsOfExperience());
        return instructorRepository.save(existing);
    }

Original code summary:
public InstructorModel updateInstructor(String id,InstructorModel updated) {
        InstructorModel existing = getInstructorsById(id);
        existing.setName(updated.getName());
        existing.setEmail(updated.getEmail());
        existing.setSpecialization(updated.getSpecialization());
        existing.setYearsOfExperience(updated.getYearsOfExperience());
        return instructorRepository.save(existing);
    }

Refactored code summary:
public InstructorModel updateInstructor(String id, InstructorModel updated) {
    return instructorRepository.findById(id)
            .map(existing -> {
                existing.setName(updated.getName());
                existing.setEmail(updated.getEmail());
                existing.setSpecialization(updated.getSpecialization());
                existing.setYearsOfExperience(updated.getYearsOfExperience());
                return instructorRepository.save(existing);
            })
            .orElseThrow(() -> new ResourceNotFoundException("Instructor not found with id: " + id));
}

What changed:
1. Retrieve recoed using findById
2. Handle null using Optional
3. Use orElseThrow() exception handling
4. Direct reposiotry access

Why it is better:
The refactored code clearly shows what happens when the instructor does not exist. Readers can immediately understand the failure path.

How I tested:
Using Postman

Did the behaviour change?
No

Evidence:
Still can update the Instructor