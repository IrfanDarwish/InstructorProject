import { Link } from 'react-router-dom';
import { useEffect, useState, useMemo } from 'react';

import { getAllInstructors, deleteInstructor } from '../services/instructorAPI';

import InstructorCard from '../components/InstructorCard';
import Pagination from '../components/Pagination';
import SearchBox from '../components/SearchBox';

function InstructorListPage() {
    const [instructors, setInstructor] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);

    const role = localStorage.getItem('role');
    const isAdmin = role === 'ADMIN';

    const filteredInstructors = useMemo(() => {
        const keyword = searchTerm.toLowerCase();

        if(!keyword){
            return instructors;
        }

        return instructors.filter((instructor) => {
            return (
                instructor.name.toLowerCase().includes(keyword) ||
                instructor.specialization.toLowerCase().includes(keyword) ||
                instructor.status.toLowerCase().includes(keyword)
            );
        });
    }, [instructors, searchTerm]);

    const totalPages = Math.ceil(filteredInstructors.length / pageSize) || 1;

    const paginatedInstructors = useMemo(() => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return filteredInstructors.slice(startIndex, endIndex);
    }, [filteredInstructors, currentPage, pageSize]);


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

    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm, pageSize]);

    useEffect(() => {
        if(currentPage > totalPages) {
            setCurrentPage(totalPages);
        };
    }, [currentPage, totalPages]);

    async function handleDeleteInstructor(instructorId) {
        const instructorToDelete = instructors.find((instructor) => instructor.id === instructorId);
        
        const confirmDelete = window.confirm(`Are you sure you want to delete "${instructorToDelete?.name}" as instructor?`);
        if (!confirmDelete) {
            return;
        }

        setError('');
        setSuccessMessage('');
        try {
            await deleteInstructor(instructorId);
            setInstructor(instructors.filter((instructor) => instructor.id !== instructorId));
        } catch (err) {
            console.log("❌ Delete failed:", err.response?.data || err.message);
            setError("Failed to delete instructor. Please try again later.");
        }
    }

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
            
            <div className="page-header">
                <div>
                    <h1>Instructor Directory</h1>
                    <p>Manage and view all instructors from your system</p>
                </div>

                <div className="header-actions">
                        {isAdmin && (
                            <Link to="/instructors/create" className="btn">
                            Create Instructor
                        </Link>)}
                </div>

                {successMessage && (
                    <div className="success-message">
                        {successMessage}
                    </div>
                )}

                {error && (
                    <div className="error-message">
                        {error}
                    </div>
                )}

                <SearchBox
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                    resultCount={filteredInstructors.length}
                    totalCount={instructors.length}
                />
            </div>
            
            {instructors.length === 0 ? (
                <div className="empty-state">
                    <h2>No instructors found</h2>
                    <p>Start by adding a new instructor to your system.</p>
                    <Link to="/dashboard" className="btn">Go to Dashboard</Link>
                </div>
            ) : (
                <>
                    <div className="card-grid">
                        {paginatedInstructors.map((instructor) => (
                            <InstructorCard 
                                key={instructor.id}
                                instructor={instructor}
                                isAdmin={isAdmin}
                                onDelete={handleDeleteInstructor}
                            />
                        ))}
                    </div>

                    <Pagination 
                        currentPage={currentPage}
                        totalPages={totalPages}
                        pageSize={pageSize}
                        onPageChange={setCurrentPage}
                        onPageSizeChange={setPageSize}
                    />
                </>
            )}
        </div>
    );
}

export default InstructorListPage;