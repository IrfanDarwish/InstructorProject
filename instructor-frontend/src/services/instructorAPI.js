const INSTRUCTOR_API_BASE_URL = 'http://localhost:8080/api/v1/instructors';

export async function getAllInstructors() {
    const response = await fetch(INSTRUCTOR_API_BASE_URL);
    if (!response.ok) {
        throw new Error(`Failed to fetch instructors: ${response.statusText}`);
    }
    return await response.json();
}

export async function getInstructorById(instructorId) {
    const response = await fetch(`${INSTRUCTOR_API_BASE_URL}/${instructorId}`);
    if (!response.ok) {
        throw new Error(`Failed to fetch instructor: ${response.statusText}`);
    }
    return await response.json();
}

export async function createInstructor(instructor) {
    const response = await fetch(INSTRUCTOR_API_BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(instructor)
    });
    if (!response.ok) {
        throw new Error(`Failed to create instructor: ${response.statusText}`);
    }
    return await response.json();
}

export async function updateInstructor(id, instructor) {
    const response = await fetch(`${INSTRUCTOR_API_BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(instructor)
    });
    if (!response.ok) {
        throw new Error(`Failed to update instructor: ${response.statusText}`);
    }
    return await response.json();
}

export async function deleteInstructor(id) {
    const response = await fetch(`${INSTRUCTOR_API_BASE_URL}/${id}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error(`Failed to delete instructor: ${response.statusText}`);
    }
    return await response.json();
}
