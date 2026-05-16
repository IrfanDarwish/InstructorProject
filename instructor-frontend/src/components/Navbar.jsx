import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();
    const token = localStorage.getItem('authToken');

    
    function handleLogout(){
        localStorage.removeItem('authToken');
        navigate('/login');
    };
    

    return (
        <nav className="navbar">
            <div className="nav-brand">Instructor App</div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/dashboard">Dashboard</Link>
                {token ? (
                    <button onClick={handleLogout}>Logout</button>
                ) : (
                    <Link to="/login">Login</Link>
                )}
                <Link to="/instructors">Instructors</Link>
            </div>
        </nav>
    );
}

export default Navbar;