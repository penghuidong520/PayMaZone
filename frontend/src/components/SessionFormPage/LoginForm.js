import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import { Redirect, Link } from 'react-router-dom';
import logo from '../../images/logo_black_cropped.png';
import { noteLinkGit, noteLinkLinkedIn } from './SessionFooter';

const LoginForm = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [credHasError, setCredHasError] = useState(false);
    const [pwdHasError, setPwdHasError] = useState(false);
    const [showError, setShowError] = useState(false);
    const inputClass = 'session-input';
    const invalidInput = 'session-input session-errors';
    if (sessionUser) return <Redirect to='/'/>

    const handleDemoLogin = (e) => {
        e.preventDefault();
        return dispatch(sessionActions.login({credential: 'demo@aa.io', password: 'password'}));
    }
    
    const handleInput = (e) => {
        if (e.target.name === 'email') {
            setCredential(e.target.value);
            setCredHasError(false);
        }
        if (e.target.name === 'pwd') {
            setPassword(e.target.value);
            setPwdHasError(false);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowError(false);
        if (credential.length < 1) setCredHasError(true);
        if (password.length < 1) setPwdHasError(true);
        
        setErrors([]);
        return dispatch(sessionActions.login({credential, password}))
        .catch(async (res) => {
            let data;
            try {
                // .clone() essentially allows you to read the response body twice
                data = await res.clone().json();
            } catch {
                data = await res.text(); // Will hit this case if, e.g., server is down
            }
            // console.log(data);
            if (data?.errors) setErrors(data.errors);
            else if (data) setErrors([data]);
            else setErrors([res.statusText]);
            if (!credHasError && !pwdHasError && errors.length > 0) {
                setShowError(true);
            }
        });
    }

    return (
        <div className="session-container" >
            <Link className="session-logo" to="/" >
                <img id='logo-img' src={logo} alt="logo" />
            </Link>
            {showError && <div className="session-form-error" >
                <ul>
                    <h4 className="session-alert" >There was a problem</h4>
                    {errors.map(error=> <li className="session-alert-error" key={error}> {error} </li>)}
                </ul>
            </div>}
            <div className="session-form" >
                <h2>Sign in</h2>
                <form onSubmit={(handleSubmit)}>
                    <label htmlFor="email">Email:</label>
                    {!credHasError && <input name="email" className={inputClass} type="text" value={credential} onChange={handleInput} autoFocus />}
                    {credHasError && <input name="email" className={invalidInput} type="text" value={credential} onChange={handleInput} autoFocus />}
                    {credHasError && <span className="session-input-error" >Enter your email or username</span>}

                    <label htmlFor="pwd" >Password:</label>
                    {!pwdHasError && <input name="pwd" className={inputClass} type="password" value={password} onChange={handleInput} />}
                    {pwdHasError && <input name="pwd" className={invalidInput} type="password" value={password} onChange={handleInput} autoFocus />}
                    {pwdHasError && <span className="session-input-error" >Enter your password</span>}

                    <input className="session-login-button" type="submit" value="Sign In" />
                    <button className="session-login-button" onClick={(handleDemoLogin)} >Demo Login</button>

                    <p className='session-form-note' >
                        By continuing, you should agree to PayMaZone's {noteLinkGit} and {noteLinkLinkedIn}
                    </p>
                </form>
            </div>
            <div className="session-new-account" >
                <h5>New to PayMaZone?</h5>
            </div>
            <button className="session-create-button" ><Link className="session-create-link" to="/signup" >Create Account</Link></button>
        </div>
    )

}

export default LoginForm;