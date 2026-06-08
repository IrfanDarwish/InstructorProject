## Exercise 3: Backend Test Improvement

AI-generated test case:

@Test
void updateInstructor_shouldUpdateInstructorSuccessfully() {

    String id = "1";

    InstructorModel existing = new InstructorModel(
            id,
            "John Doe",
            "john@example.com",
            "Java",
            5,
            "ACTIVE"
    );

    InstructorModel updated = new InstructorModel(
            id,
            "Jane Smith",
            "jane@example.com",
            "Spring Boot",
            8,
            "INACTIVE"
    );

    InstructorService spyService = spy(instructorService);

    doReturn(existing)
            .when(spyService)
            .getInstructorsById(id);

    when(instructorRepository.save(existing))
            .thenReturn(existing);

    InstructorModel result =
            spyService.updateInstructor(id, updated);

    assertEquals("Jane Smith", result.getName());
    assertEquals("jane@example.com", result.getEmail());
    assertEquals("Spring Boot", result.getSpecialization());
    assertEquals(8, result.getYearsOfExperience());

    verify(instructorRepository).save(existing);
}

Problem with AI-generated test:
The status field exists in InstructorModel but is not checked.

My improvement:
@Test
void updateInstructor_shouldUpdateSpecifiedFieldsOnly() {

    String id = "1";

    InstructorModel existing = new InstructorModel(
            id,
            "John Doe",
            "john@example.com",
            "Java",
            5,
            "ACTIVE"
    );

    InstructorModel updated = new InstructorModel(
            id,
            "Jane Smith",
            "jane@example.com",
            "Spring Boot",
            8,
            "INACTIVE"
    );

    InstructorService spyService = spy(instructorService);

    doReturn(existing)
            .when(spyService)
            .getInstructorsById(id);

    when(instructorRepository.save(existing))
            .thenReturn(existing);

    InstructorModel result =
            spyService.updateInstructor(id, updated);

    assertAll(
            () -> assertEquals("Jane Smith", result.getName()),
            () -> assertEquals("jane@example.com", result.getEmail()),
            () -> assertEquals("Spring Boot", result.getSpecialization()),
            () -> assertEquals(8, result.getYearsOfExperience()),

            // status should remain unchanged because updateInstructor()
            // does not update this field
            () -> assertEquals("ACTIVE", result.getStatus())
    );

    verify(instructorRepository, times(1)).save(existing);
}


Why my version is better:
Tests actual business behavior more thoroughly


Test result:
Pass