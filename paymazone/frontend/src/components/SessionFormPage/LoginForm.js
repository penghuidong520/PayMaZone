import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as sessionActions from '../../store/session';
import { Redirect } from 'react-router-dom';

const LoginForm = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    
    if (sessionUser) return <Redirect to='/'/>

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
            <div className="session-form" >
                <h1>Log In</h1>
                <form onSubmit={(handleSubmit)}>
                    <ul>
                        {errors.map(error=> <li key={error}> {error} </li>)}
                    </ul>
                    <label>Email:</label>
                    <input type="text" value={credential} onChange={(e=>{setCredential(e.target.value)})} />
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e=>{setPassword(e.target.value)})} />
                    <input className="session-login-button" type="submit" value="Sign In" />
                </form>
            </div>
        </div>
    )

}

export default LoginForm;