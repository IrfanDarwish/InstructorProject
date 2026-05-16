import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const token = localStorage.getItem('authToken');
    const role = localStorage.getItem('role');
    
    const isAdmin = role === 'ADMIN';

    function handleLogout(){
        localStorage.removeItem('authToken');
        localStorage.removeItem('role');
        navigate('/login');
        
    };
    

    return (
        <nav className="navbar">
            <div className="nav-brand">Instructor App</div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/instructors">Instructors</Link>
                {token ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </div>
        </nav>
    );
}

export default Navbar;