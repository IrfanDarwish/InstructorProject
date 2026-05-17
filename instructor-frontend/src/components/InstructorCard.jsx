import { Link } from "react-router-dom";

function InstructorCard({ instructor, isAdmin, onDelete }) {
    return (
        <div className="card">
            <div className="card-top">
                <div className="avatar">
                    {instructor.name?.charAt(0).toUpperCase()   }
                </div>

                <div>
                    <h2>{instructor.name}</h2>
                    <span className={`status ${instructor.status?.toLowerCase()}`}>
                        {instructor.status}
                    </span>
                </div>
            </div>

            <div className="card-body">
                <p><strong>Specialization:</strong> {instructor.specialization}</p>
                <p><strong>Experience:</strong> {instructor.yearsOfExperience} years</p>
            </div>

            <div className="card-actions">
                <Link to={`/instructors/${instructor.id}`} className="btn">
                    View Details
                </Link>
                {isAdmin && (
                    <>
                        <Link to={`/instructors/${instructor.id}/edit`} className="btn">
                            Edit
                        </Link>
                        <button className='btn'
                            onClick={() => onDelete(instructor.id)}>
                            Delete
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}

export default InstructorCard;