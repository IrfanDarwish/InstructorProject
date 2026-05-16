import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllInstructors } from '../services/instructorAPI';

function InstructorListPage() {
    const [instructor, setInstructor] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const role = localStorage.getItem('role');


    useEffect(() => {
        async function loadInstructor() {
            try {
                const data = await getAllInstructors();
                setInstructor(data.content || []);
            } catch (err) {
                setError("Failed to load instructors. Please try again later.");
            } finally {
                setLoading(false);
            }
        }
        loadInstructor();
    }, []);

    if (loading) {
        return (
            <div className="page">
                <div className="loading-card">Loading instructors...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="page">
                <div className="error-card">
                    <h2>Something went wrong</h2>
                    <p>{error}</p>
                    <Link to="/dashboard" className="btn">Back to Dashboard</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="page">
            {/* HEADER */}
            <div className="page-header">
                <div>
                    <h1>Instructor Directory</h1>
                    <p>Manage and view all instructors from your system</p>
                </div>

                <div className="header-badge">
                    Total: {instructor.length}
                </div>
            </div>

            {/* EMPTY STATE */}
            {instructor.length === 0 ? (
                <div className="empty-state">
                    <h2>No instructors found</h2>
                    <p>Start by adding a new instructor to your system.</p>
                    <Link to="/dashboard" className="btn">Go to Dashboard</Link>
                </div>
            ) : (
                <div className="card-grid">
                    {instructor.map((inst) => (
                        <div className="card" key={inst.id}>
                            <div className="card-top">
                                <div className="avatar">
                                    {inst.name?.charAt(0).toUpperCase()}
                                </div>

                                <div>
                                    <h2>{inst.name}</h2>
                                    <span className={`status ${inst.status?.toLowerCase()}`}>
                                        {inst.status}
                                    </span>
                                </div>
                            </div>

                            <div className="card-body">
                                <p><strong>Specialization:</strong> {inst.specialization}</p>
                                <p><strong>Experience:</strong> {inst.yearsOfExperience} years</p>
                            </div>

                            <div className="card-actions">
                                <Link to={`/instructors/${inst.id}`} className="btn">
                                    View Details
                                </Link>
                                {role === 'ADMIN' && (
                                    <Link to={`/instructors/${inst.id}/edit`} className="btn">
                                        Edit
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default InstructorListPage;