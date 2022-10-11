import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import logo from '../../images/logo_black_cropped.png';


const SignupForm = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [errors, setErrors] = useState([])
    
    if (sessionUser) return <Redirect to="/" />;
    
    const handleDemoLogin = (e) => {
        e.preventDefault();
        dispatch(sessionActions.login({credential: 'payton@aa.io', password: 'password1'}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === rePassword) {
            return dispatch(sessionActions.signup({ email, username, password }))
            .catch(async (res) => {
                let data;
                try {
                    // .clone() essentially allows you to read the response body twice
                    data = await res.clone().json();
                } catch {
                    data = await res.text(); // Will hit this case if, e.g., server is down
                }
                if (data?.errors) setErrors(data.errors);
                else if (data) setErrors([data]);
                else setErrors([res.statusText]);
            });
        }
        return setErrors(['Password and Re-Enter Password must be the same']);        
    }
    
    return (
        <div className="session-container" >
            <Link to="/" >
                <img id='logo-img' src={logo} alt="logo" />
            </Link>
            <div className="session-form">
                <h2>Sign Up</h2>
                <form onSubmit={(handleSubmit)} >
                    <ul>
                        {errors.map(error => <li key={error}>{error}</li>)}
                    </ul>
                    <label>Username:</label>
                        <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} />
                    <label>Email:</label>
                        <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} />
                    <label>Password: </label>
                        <input id="pwd-min" type="password" value={password} onChange={(e=>{setPassword(e.target.value)})} />
                    <label>Re-Enter Password:</label>
                        <input type="password" value={rePassword} onChange={(e)=> setRePassword(e.target.value)} />
                    <input className="session-login-button" type="submit" value="Create Account" />
                    <button className="session-login-button" onClick={(handleDemoLogin)} >Demo Login</button>
                </form>
                <div className="session-breaker" >
                    <h5>Already have an account? ›</h5>
                    <Link className="sign-in-link" to="/login">Sign in</Link>
                </div>
            </div>
        </div>
        )
        
    }
    
    export default SignupForm