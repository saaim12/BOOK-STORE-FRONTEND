import React, { useState } from 'react';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';
import './Auth.css';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="container">
            <div className="form-container">
                <div className="form-toggle">
                    <button className={isLogin ? 'active' : ''} onClick={toggleForm}>Login</button>
                    <button className={!isLogin ? 'active' : ''} onClick={toggleForm}>Sign Up</button>
                </div>
                {isLogin ? <Login onLogin={() => alert('Logged in!')} /> : <Signup onSignup={() => alert('Signed up!')} />}
            </div>
        </div>
    );
};

export default Auth;
