

function InstructorForm({ initialData, onSubmit, buttonText }) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: initialData?.firstName || '',
        email: initialData?.email || '',
        specialization: initialData?.specialization || '',
        yearsOfExperience: initialData?.yearsOfExperience || 0,
        status: initialData?.status || ''
    });

    const [errors, setErrors] = useState({});

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
    
    return (
        <form className="instructor-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="specialization">Specialization:</label>
                <input type="text" id="specialization" name="specialization" value={formData.specialization} onChange={handleChange} />
                {errors.specialization && <span className="error">{errors.specialization}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="yearsOfExperience">Years of Experience:</label>
                <input type="number" id="yearsOfExperience" name="yearsOfExperience" value={formData.yearsOfExperience} onChange={handleChange} />
                {errors.yearsOfExperience && <span className="error">{errors.yearsOfExperience}</span>}
            </div>
            <div className="form-group">
                <label htmlFor="status">Status:</label>
                <input type="text" id="status" name="status" value={formData.status} onChange={handleChange} />
                {errors.status && <span className="error">{errors.status}</span>}
            </div>
            <button type="submit">{buttonText}</button>
        </form>
    );
}

export default InstructorForm;