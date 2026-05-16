const INSTRUCTOR_API_BASE_URL = 'http://localhost:8080/api/v1/instructors';

export async function getAllInstructors() {
    const response = await fetch(INSTRUCTOR_API_BASE_URL);
    if (!response.ok) {
        throw new Error(`Failed to fetch instructors: ${response.statusText}`);
    }
    return await response.json();
}
