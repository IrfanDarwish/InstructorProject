function InstructorCard({ instructor, onSelect }) {
    return (
        <div className="card" onClick={() => onSelect(instructor)}>
            <h2>{instructor.name}</h2>

            <p>
                <strong>Specialization:</strong> {instructor.specialization}
            </p>

            <p>
                <strong>Status:</strong> {instructor.status}
            </p>

            <p>
                <strong>Experience:</strong> {instructor.yearsOfExperience} years
            </p>
        </div>
    );
}

export default InstructorCard;