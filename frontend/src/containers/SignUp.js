import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { signup } from '../actions/auth';
import { setAlert } from '../actions/alert';
import PropTypes from 'prop-types';

const SignUp = ({ setAlert, isAuthenticated, signup }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = formData;

    const onChange = e => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
    const onSubmit = e => {
        e.preventDefault();
        if (password === password2) {
            signup({ name, email, password, password2 });
        } else {
            setAlert('Password do not match', 'error');
        }
    };
    if (isAuthenticated) {
        return <Redirect to='/' />
    };
    return (
        <div className='auth'>
            <Helmet>
                <title>Sign Up page</title>
                <meta
                    name='description'
                    content='signup page'
                />
            </Helmet>
            <h1 className='auth__title'>Sign Up</h1>
            <p className='auth__lead'>Create Your Account</p>
            <form onSubmit={e => onSubmit(e)} className='auth__form'>
                <div className='auth__form__group'>
                    <input type='text' className='auth__form__input' name='name' placeholder='Enter Your Name' value={name} onChange={e => onChange(e)} required />
                </div>
                <div className='auth__form__group'>
                    <input type='email' className='auth__form__input' name='email' placeholder='Enter Your Email' value={email} onChange={e => onChange(e)} required />
                </div>
                <div className='auth__form__group'>
                    <input type='password' className='auth__form__input' name='password' placeholder='Enter Password' value={password} onChange={e => onChange(e)} minLength='8' required />
                </div>
                <div className='auth__form__group'>
                    <input type='password' className='auth__form__input' name='password2' placeholder='Confirm Password' value={password2} onChange={e => onChange(e)} minLength='8' required />
                </div>
                <button className='auth__form__button' type='submit'>Sign Up</button>
            </form>
            <p className='auth__authtext'>
                Already have an account?<Link className='auth__authtext__link' to='/login'>Login</Link>
            </p>
        </div>
    );
};

SignUp.propTypes = {
    signup: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, signup })(SignUp);