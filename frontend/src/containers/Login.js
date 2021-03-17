import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/auth';
const Login = ({ login, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const onChange = e => setFormData({
        ...formData, [e.target.name]: e.target.value
    });

    const onSubmit = e => {
        e.preventDefault();
        login(email, password);
    };
    if (isAuthenticated) {
        return <Redirect to='/' />
    }

    return (
        <div className='auth'>
            <Helmet>
                <title>Login page</title>
                <meta
                    name='description'
                    content='login page'
                />
            </Helmet>
            <h1 className='auth__title'>Sign In</h1>
            <p className='auth__lead'>Sign into Your Account</p>
            <form onSubmit={e => onSubmit(e)} className='auth__form'>
                <div className='auth__form__group'>
                    <input type='email' className='auth__form__input' name='email' placeholder='Enter Your Email' value={email} onChange={e => onChange(e)} required />
                </div>
                <div className='auth__form__group'>
                    <input type='password' className='auth__form__input' name='password' placeholder='Enter Your Password' value={password} onChange={e => onChange(e)} minLength='8' required />
                </div>
                <button className='auth__form__button' type='submit'>Login</button>
            </form>
            <p className='auth__authtext'>
                Don't have an account?<Link className='auth__authtext__link' to='/signup'>Sign Up</Link>
            </p>
        </div>
    );

};

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { login })(Login);