import { useState } from 'react'
import './App.css'

function App() {
  const instructors = [
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
    ];

  return (
    <div className='page'>
      <h1>Instructor FrontEnd</h1>

      <div className='instructor-list'>
        {instructors.map(instructor => (
          <div key={instructor.id} className='card'>
            <h2>{instructor.name}</h2>
            <p><strong>Specialization:</strong> {instructor.specialization}</p>
            <p><strong>Status:</strong> {instructor.status}</p>
            <p><strong>Experience:</strong> {instructor.yearsOfExperience} years</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
