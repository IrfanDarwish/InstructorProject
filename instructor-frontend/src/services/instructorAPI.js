const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api/v1';
const INSTRUCTOR_API_BASE_URL = `${API_BASE_URL}/api/v1/instructors`;

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
    const token = localStorage.getItem('authToken');
    if (!token) {
        throw new Error('No token found');
    }
    const response = await fetch(INSTRUCTOR_API_BASE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(instructor)
    });
    if (!response.ok) {
        throw new Error(`Failed to create instructor: ${response.statusText}`);
    }
    return await response.json();
}

export async function updateInstructor(id, instructor) {
    const token = localStorage.getItem('authToken');
    const response = await fetch(`${INSTRUCTOR_API_BASE_URL}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(instructor)
    });
    if (!response.ok) {
        throw new Error(`Failed to update instructor: ${response.statusText}`);
    }
    return await response.json();
}

export async function deleteInstructor(id) {
    const token = localStorage.getItem('authToken');
    const response = await fetch(`${INSTRUCTOR_API_BASE_URL}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }

    });
    if (!response.ok) {
        throw new Error(`Failed to delete instructor: ${response.statusText}`);
    }
    return;
}
