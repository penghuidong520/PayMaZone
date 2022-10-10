import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import { Redirect, Link } from 'react-router-dom';
import logo from '../../images/logo_black_cropped.png';



const LoginForm = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    
    if (sessionUser) return <Redirect to='/'/>


    const handleDemoLogin = (e) => {
        e.preventDefault();
        dispatch(sessionActions.login({credential: 'payton@aa.io', password: 'password1'}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
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
            if (data?.errors) setErrors(data.errors);
            else if (data) setErrors([data]);
            else setErrors([res.statusText]);
        });
    }

    

    return (
        <div className="session-container" >
            <Link className="session-logo" to="/" >
                <img id='logo-img' src={logo} alt="logo" />
            </Link>
            <div className="session-form" >
                <h2>Sign in</h2>
                <form onSubmit={(handleSubmit)}>
                    <ul>
                        {errors.map(error=> <li key={error}> {error} </li>)}
                    </ul>
                    <label htmlFor="email">Email:</label>
                    <input name="email" type="text" value={credential} onChange={(e=>{setCredential(e.target.value)})} />
                    <label htmlFor="pwd" >Password:</label>
                    <input name="pwd" type="password" value={password} onChange={(e=>{setPassword(e.target.value)})} />
                    <input className="session-login-button" type="submit" value="Sign In" />
                    <button className="session-login-button" onClick={(handleDemoLogin)} >Demo Login</button>

                </form>
            </div>
            <div className="session-breaker" >
                <h5>New to PayMaZone?</h5>
            </div>
            <button className="session-create-button" >Create Account</button>
        </div>
    )

}

export default LoginForm;