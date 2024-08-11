import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './LoginDes.scss'
import axios from '../../api/axios'

const LoginDes = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleUserLogin = (e) => {
        e.preventDefault();
        setLoading(true);

        axios.post('/auth/login', { username, password })
            .then(response => {
                if(response.status === 200) {
                    localStorage.setItem('token', response.data.token);
                    navigate('/home');
                }
            })
        .catch(error => {
            if (error.response) {
                console.error('Error response:', error.response);
                if (error.response.status === 401) {
                    alert('Invalid credentials. Please try again.');
                } else {
                    alert('An error occurred. Please try again.');
                }
            } else {
                alert("An error occurred. Please try again.");
            }
            console.error(error);
        })
        .finally(() => {
            setLoading(false);
        });
    }

  return (
    <div className='log-bg'>
            <div className='auth-container'>
                <div className='Auth-container'>
                    <div className='Auth-wrapper wrappper-bg'>
                        <h2>Login</h2>
                        <form onSubmit={handleUserLogin}>
                            <input
                                type="text"
                                placeholder="Enter your Useranme"
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <input
                                type="password"
                                placeholder="Enter your Password"
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button type="submit" disabled={loading}>
                                {loading ? 'Login...' : 'Login'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default LoginDes