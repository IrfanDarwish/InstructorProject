const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';
const AUTH_API_URL = `${API_BASE_URL}/auth`;

export const loginUser = async (email, password) => {
    const response = await fetch(`${AUTH_API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            email: email, 
            password: password })
    });
    if (!response.ok) {
        throw new Error(`Failed to login user: ${response.statusText}`);
    }
    return await response.json();
}