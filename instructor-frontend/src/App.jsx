import './App.css'
import { Routes, Route } from 'react-router-dom';

import InstructorListPage from './pages/InstructorListPage';
import InstructorDetailPage from './pages/InstructorDetailPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import ProtectedRoute from './routes/ProtectedRoute';

function App() {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [sortOption, setSortOption] = useState("name-asc");
  // const [instructors, setInstructors] = useState([
  //   {
  //     id: "1",
  //     name: "Alice Johnson",
  //     specialization: "Java",
  //     status: "ACTIVE",
  //     yearsOfExperience: 5
  //   },
  //   {
  //     id: "2",
  //     name: "Kumar K.",
  //     specialization: "MongoDB",
  //     status: "ACTIVE",
  //     yearsOfExperience: 8
  //     },
  //     {
  //     id: "3",
  //     name: "Michael Chew",
  //     specialization: "React",
  //     status: "INACTIVE",
  //     yearsOfExperience: 4
  //     }
  // ]); 
  
  // const handleSelectInstructor = (instructor) => {
  //   alert(`Selected Instructor: ${instructor.name}`);
  // };

  // const filteredInstructors = instructors.filter(instructor =>
  //   instructor.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  // const sortedInstructors = [...filteredInstructors].sort((a, b) => {
  //   if (sortOption === "name-asc") {
  //     return a.name.localeCompare(b.name);
  //   } else if (sortOption === "name-desc") {
  //     return b.name.localeCompare(a.name);
  //   } else if (sortOption === "experience-asc") {
  //     return a.yearsOfExperience - b.yearsOfExperience;
  //   } else if (sortOption === "experience-desc") {
  //     return b.yearsOfExperience - a.yearsOfExperience;
  //   }
  //   return 0;
  // });

  // return (
  //   <div className='page'>
  //     <h1>Instructor FrontEnd</h1>
  //       <div className="search-section">
  //         <input
  //           type="text"
  //           placeholder="Search instructors..."
  //           value={searchTerm}
  //           onChange={(e) => setSearchTerm(e.target.value)}
  //         />
  //         <button onClick={() => setSearchTerm("")}>Clear</button>
  //       </div>

  //       <div className="toolbar">
  //         <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
  //           <option value="name-asc">Name (A-Z)</option>
  //           <option value="name-desc">Name (Z-A)</option>
  //           <option value="experience-asc">Experience (Low to High)</option>
  //           <option value="experience-desc">Experience (High to Low)</option>
  //         </select>
  //       <InstructorList instructors={sortedInstructors} onSelectInstructor={handleSelectInstructor} />
  //       <p className="summary">Showing {sortedInstructors.length} of {instructors.length} instructors</p>
  //   </div>
  // </div>
  // )

  return (
    <Routes>
      <Route path="/" element={<MainLayout />} >
        <Route path="/" element={<HomePage />} />  
        <Route path="/instructors" element={<InstructorListPage />} />
        <Route path="/instructors/:id" element={<InstructorDetailPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="dashboard" element={
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        } />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App
