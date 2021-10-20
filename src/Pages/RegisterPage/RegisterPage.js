import React from 'react';
import useAuth from '../../hooks/useAuth';

const RegisterPage = () => {
    const { handleRegistration, handleNameChange, handleEmailChange, handlePasswordChange, error } = useAuth()

    return (
        <div className="container py-5">
            <div className="login-form border border-dark py-5">
                <h2>Register</h2>
                <form onSubmit={handleRegistration}>
                    <div className="row d-flex justify-content-center">
                        <div className="col-6">
                            <div className="form-group">
                                <input onBlur={handleNameChange} type="text" name="txtName" className="form-control" placeholder="Name" />
                            </div>
                            <div className="form-group">
                                <input onBlur={handleEmailChange} type="text" name="txtEmail" className="form-control mt-2" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input onBlur={handlePasswordChange} type="password" name="txtPhone" className="form-control mt-2" placeholder="Password" />
                            </div>
                            {error}
                            <div className="form-group">
                                <button className="btn btn-success mt-2">Register</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;