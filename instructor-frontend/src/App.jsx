import { useState } from 'react'
import './App.css'
import InstructorList from './components/InstructorList';

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [instructors, setInstructors] = useState([
    {
      id: "1",
      name: "Alice Johnson",
      specialization: "Java",
      status: "ACTIVE",
      yearsOfExperience: 5
    },
    {
      id: "2",
      name: "Kumar K.",
      specialization: "MongoDB",
      status: "ACTIVE",
      yearsOfExperience: 8
      },
      {
      id: "3",
      name: "Michael Chew",
      specialization: "React",
      status: "INACTIVE",
      yearsOfExperience: 4
      }
  ]); 
  
  const handleSelectInstructor = (instructor) => {
    alert(`Selected Instructor: ${instructor.name}`);
  };

  const filteredInstructors = instructors.filter(instructor =>
    instructor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='page'>
      <h1>Instructor FrontEnd</h1>
      <div className="search-section">
        <input
          type="text"
          placeholder="Search instructors..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={() => setSearchTerm("")}>Clear</button>
      </div>
      <InstructorList instructors={filteredInstructors} onSelectInstructor={handleSelectInstructor} />
      <h3>Showing {filteredInstructors.length} of {instructors.length} instructors</h3>

    </div>
  )
}

export default App
