import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createInstructor } from "../services/instructorAPI";
import InstructorForm from "../components/InstructorForm";

function CourseCreatePage() {
    const navigate = useNavigate();

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    async function handleCreateInstructor(instructorData) {
        setMessage("");
        setError("");

        try {
            await createInstructor(instructorData);
            setMessage("Instructor created successfully!");
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
            <div classname="page-header">
                <div>
                    <h1>Create Instructor</h1>
                    <p>Add a new instructor to the database</p>
                </div>
            </div>

            {message && <p classname="success">{message}</p>}
            {error && <p classname="error">{error}</p>}

            <InstructorForm 
                initialData={null}
                onSubmit={handleCreateInstructor}
                buttonText="Create Instructor"
                />
        </section>
    )
}

export default InstructorCreatePage;