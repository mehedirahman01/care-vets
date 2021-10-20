import React from 'react';
import useAuth from '../../hooks/useAuth';

const LoginPage = () => {
    const { handleLogin, handleEmailChange, handlePasswordChange, error } = useAuth()

    return (
        <div className="container py-5">
            <div className="login-form border border-dark py-5">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="row d-flex justify-content-center">
                        <div className="col-6">
                            <div className="form-group">
                                <input onBlur={handleEmailChange} type="text" name="txtEmail" className="form-control mt-2" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input onBlur={handlePasswordChange} type="password" name="txtPhone" className="form-control mt-2" placeholder="Password" />
                            </div>
                            <span>{error}</span>
                            <div className="form-group">
                                <button className="btn btn-success mt-2">Sign In</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;