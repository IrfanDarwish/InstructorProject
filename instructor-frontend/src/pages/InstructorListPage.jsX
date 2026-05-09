import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllInstructors } from '../services/instructorAPI';


function InstructorListPage() {
    const [instructor, setInstructor] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadInstructor() {
            try {
                const data = await getAllInstructors();
                setInstructor(data.content);
                console.log("FULL RESPONSE:", data);
                console.log("CONTENT:", data.content);
            } catch (err) {
                setError("Failed to load instructors. Please try again later.");
            } finally {
                setLoading(false);
            }
        }
        loadInstructor();
    }, []);

    if (loading) {
        return <p>Loading instructors...</p>;
    }

    if (error) {
        return (
            <section>
                <h1>Instructor Not Found</h1>
                <p className="error">{error}</p>
                <Link to="/dashboard" className="btn">Back to Dashboard</Link>
            </section>
        );
    }

    return (
        <section>
            <div className="page-header">
                <div>
                    <h1>Instructor List</h1>
                    <p>These instructors are loaded from Spring Boot and MongoDB</p>
                </div>
            </div>

            {instructor.length === 0 ? (
                <p>No instructors available.</p>
            ) : (
                <div className="card-grid">
                    {instructor.map((inst) => (
                        <div className="card" key={inst.id}>
                            <h2>{inst.name}</h2>
                            <p><strong>Specialization:</strong> {inst.specialization}</p>
                            <p><strong>Status:</strong> {inst.status}</p>
                            <p><strong>Experience:</strong> {inst.yearsOfExperience} years</p>
                            <div className="card-actions">
                                <Link to={`/instructors/${inst.id}`} className="btn">View Details</Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}

        </section>
    );
}

export default InstructorListPage;