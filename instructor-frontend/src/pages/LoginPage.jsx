import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../services/authAPI';


function LoginPage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function handleLogin() {
            event.preventDefault();
            setLoading(true);
            setError("");
            try {
                const data = await loginUser(email, password);
                localStorage.setItem('authToken', data.token);
                navigate('/dashboard');
            } catch (err) {
                setError(err.message);
            }finally {
                setLoading(false);
            }
        }

    return (
        <section>
            <div className="page-header">
                <div>
                    <h1>Login Page</h1>
                    <p>Welcome to the Instructor API! Please log in to access your dashboard and manage your courses.</p>
                    
                    {error && <p className="error">{error}</p>}
                    {loading && <p>Loading...</p>}

                    <form onSubmit={handleLogin}>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button type="submit" disabled={loading}>Login</button>
                    </form>
                
                </div>
            </div>
        </section>
    );
}

export default LoginPage;