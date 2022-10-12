import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import logo from '../../images/logo_black_cropped.png';


const SignupForm = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const [username, setUsername] = useState('');
    const [usernameError, setUserNameError] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [rePassword, setRePassword] = useState('');
    const [rePasswordError, setRePasswordError] = useState(false)
    const [errors, setErrors] = useState([])
    const inputClass = 'session-input';
    const invalidInput = 'session-input session-errors';
    const [rePasswordMessage, setRePasswordMessage] = useState('Type your password again');
    const [showError, setShowError] = useState(false);
    
    // Links for notice
    const noteLinkGit = <Link className="footer-links" to="#" >Github</Link>
    const noteLinkLinkedIn = <Link className="footer-links" to="#">Personal LinkedIn</Link>



    if (sessionUser) return <Redirect to="/" />;
    
    const handleDemoLogin = (e) => {
        e.preventDefault();
        dispatch(sessionActions.login({credential: 'demo@aa.io', password: 'password'}))
    }

    const handleInput = (e) => {
        if (e.target.name === 'username') {
            setUsername(e.target.value);
            setUserNameError(false);
        }
        if (e.target.name === 'email') {
            setEmail(e.target.value);
            setEmailError(false);
        }
        if (e.target.name === 'password') {
            setPassword(e.target.value);
            setPasswordError(false);
        }
        if (e.target.name === 'rePassword') {
            setRePassword(e.target.value);
            setRePasswordError(false);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowError(false)
        if (username.length < 1) setUserNameError(true);
        if (email.length < 1) setEmailError(true);
        if (password.length < 6) setPasswordError(true);
        if (rePassword.length < 1) setRePasswordError(true);
        if (rePassword !== password) {
            setPasswordError(true);
            setRePasswordError(true);
            setRePasswordMessage('Passwords must match');
        } else {
            setRePasswordMessage('Type your password again')
        }

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
                if (!usernameError && !passwordError && !emailError && !rePasswordError && errors.length > 0) {
                    setShowError(true);
                }      
            });
        }
        // return setErrors(['Password and Re-Enter Password must be the same']);  
    }
    
    return (
        <div className="session-container" >
            <Link to="/" >
                <img id='logo-img' src={logo} alt="logo" />
            </Link>

            {showError && <div className="session-form-error" >
                <ul>
                    <h4 className="session-alert" >There was a problem</h4>
                    {errors.map(error=> <li className="session-alert-error" key={error}> {error} </li>)}
                </ul>
            </div>}

            <div className="session-form">
                <h2>Sign Up</h2>
                <form onSubmit={(handleSubmit)} >
                    <label>Username:</label>
                        {!usernameError && <input name="username" className={inputClass} type="text" value={username} onChange={handleInput} autoFocus />}
                        {usernameError && <input name="username" className={invalidInput} type="text" value={username} onChange={handleInput} autoFocus />}
                        {usernameError && <span className="session-input-error">Enter your username</span>}
                    <label>Email:</label>
                        {!emailError && <input name="email" className={inputClass} type="text" value={email} onChange={handleInput} />}
                        {emailError && <input name="email" className={invalidInput} type="text" value={email} onChange={handleInput} autoFocus />}
                        {emailError && <span className="session-input-error">Enter your email</span>}
                    <label>Password: </label>
                        {!passwordError && <input name="password" id="pwd-min" className={inputClass} type="password" value={password} onChange={handleInput} placeholder="At least 6 characters" />}
                        {passwordError && <input name="password" id="pwd-min" className={invalidInput} type="password" value={password} onChange={handleInput} autoFocus />}
                        {passwordError && <span className="session-input-error">Enter your password</span>}
                    <label>Re-Enter Password:</label>
                        {!rePasswordError && <input name="rePassword" className={inputClass} type="password" value={rePassword} onChange={handleInput} />}
                        {rePasswordError && <input name="rePassword" className={invalidInput} type="password" value={rePassword} onChange={handleInput} autoFocus />}
                        {rePasswordError && <span className="session-input-error">{rePasswordMessage}</span>}

                    <input className="session-login-button" type="submit" value="Create Account" />
                    <button className="session-login-button" onClick={(handleDemoLogin)} >Demo Login</button>

                    <p className='session-form-note' >
                        By continuing, you should agree to Paymazone's {noteLinkGit} and {noteLinkLinkedIn}
                    </p>

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