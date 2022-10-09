import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as sessionActions from '../../store/session';
import './SignupForm.css'


const SignupForm = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user)
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [errors, setErrors] = useState([])
    
    if (sessionUser) return <Redirect to="/" />;
    
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
        <div className="signup-form" >
            <form onSubmit={(handleSubmit)} >
                <ul>
                    {errors.map(error => <li key={error}>{error}</li>)}
                </ul>
                <label>Username:
                    <input type="text" value={username} onChange={(e)=> setUsername(e.target.value)} />
                </label>
                <br/>
                <label>Email:
                    <input type="text" value={email} onChange={(e)=> setEmail(e.target.value)} />
                </label>
                <br/>
                <label>Password: 
                    <input type="password" value={password} onChange={(e=>{setPassword(e.target.value)})} />
                </label>
                <br/>
                <label>Re-Enter Password:
                    <input type="password" value={rePassword} onChange={(e)=> setRePassword(e.target.value)} />
                </label>
                <br/>
                <input type="submit" value="Create Account" />
            
            </form>
        </div>
        )
        
    }
    
    export default SignupForm