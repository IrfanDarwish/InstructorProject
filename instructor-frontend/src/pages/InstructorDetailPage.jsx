import { useParams } from 'react-router-dom';

function InstructorDetailPage() {
    const { id } = useParams();

    return (
        <section>
            <h1>Instructor Detail</h1>
            <p>Instructor ID: {id}</p>
            <p>This is the page for viewing instructor details.</p>
        </section>
    );
}

export default InstructorDetailPage;