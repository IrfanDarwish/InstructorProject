import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getInstructorById, updateInstructor } from "../services/instructorAPI";
import InstructorForm from "../components/InstructorForm";

function InstructorEditPage() {
    const navigate = useNavigate();

    const {id} = useParams();

    const [initialData, setInitialData] = useState(null);

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        async function loadInstructor() {
            try {
                const data = await getInstructorById(id);
                setInitialData(data);
            } catch (err) {
                setError("Failed to load instructor. Please try again later.");
            }
        }
        loadInstructor();
    }, [id]);

    async function handleUpdateInstructor(instructorData) {
        setMessage("");
        setError("");

        try {
            await updateInstructor(id, instructorData);
            setMessage("Instructor updated successfully!");
            setTimeout(() => {
                navigate("/instructors");
            }, 700)
        } catch (err) {
            console.error(err);
            setError("Could not create instructor. Please try again.");
        }
    }

    return(
        <section>
            <div className="page-header">
                <div>
                    <h1>Edit Instructor</h1>
                    <p>Edit instructor</p>
                </div>
            </div>

            {message && <p className="success">{message}</p>}
            {error && <p className="error">{error}</p>}

            <InstructorForm 
                initialData={initialData}
                onSubmit={handleUpdateInstructor}
                buttonText="Update Instructor"
                />
        </section>
    )
}

export default InstructorEditPage;