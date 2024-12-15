import React from 'react';

const Login = ({ onLogin }) => {
    return (
        <div className="form">
            <h2>Login</h2>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button onClick={onLogin}>Login</button>
        </div>
    );
};

export default Login;
