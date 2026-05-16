import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
function InstructorForm({ initialData, onSubmit, buttonText }) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        specialization: '',
        yearsOfExperience: 0,
        status: ''
    });

    const [errors, setErrors] = useState({});


    useEffect(() => {
        if (initialData) {
            setFormData({
                name: initialData.name || '',
                email: initialData.email || '',
                specialization: initialData.specialization || '',
                yearsOfExperience: Number(initialData.yearsOfExperience) || 0,
                status: initialData.status || ''
            });
        }
    }, [initialData]);

    function handleChange(event) {
        const { name, value, type, checked } = event.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    }

    function validateForm() {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = 'Invalid email format';
        }

        if (!formData.specialization.trim()) {
            newErrors.specialization = 'Specialization is required';
        }

        if (Number(formData.yearsOfExperience) <= 0) {
            newErrors.yearsOfExperience = 'Years of experience must be at least 1';
        }

        if (!formData.status.trim()) {
            newErrors.status = 'Status is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (validateForm()) {
            onSubmit(formData);
        }
    }
    
    return (
        <div className="form-container">
            <form
                className="instructor-form"
                onSubmit={handleSubmit}
                noValidate
            >

                <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter instructor name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    {errors.name && (
                        <span className="error">{errors.name}</span>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="example@email.com"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && (
                        <span className="error">{errors.email}</span>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="specialization">Specialization</label>
                    <input
                        type="text"
                        id="specialization"
                        name="specialization"
                        placeholder="React, Java, Spring Boot..."
                        value={formData.specialization}
                        onChange={handleChange}
                    />
                    {errors.specialization && (
                        <span className="error">
                            {errors.specialization}
                        </span>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="yearsOfExperience">
                        Years of Experience
                    </label>

                    <input
                        type="number"
                        id="yearsOfExperience"
                        name="yearsOfExperience"
                        placeholder="0"
                        min="0"
                        value={formData.yearsOfExperience || ""}
                        onChange={handleChange}
                    />

                    {errors.yearsOfExperience && (
                        <span className="error">
                            {errors.yearsOfExperience}
                        </span>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="status">Status</label>

                    <select
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                    >
                        <option value="">Select status</option>
                        <option value="ACTIVE">ACTIVE</option>
                        <option value="INACTIVE">INACTIVE</option>
                    </select>

                    {errors.status && (
                        <span className="error">{errors.status}</span>
                    )}
                </div>

                <button type="submit" className="submit-btn">
                    {buttonText}
                </button>
            </form>
        </div>
    );
}

export default InstructorForm;