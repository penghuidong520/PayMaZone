import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";

const Navigation = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const userName = (sessionUser) ? sessionUser.username : 'Guest';
    const logoutClick = e => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    }

    return (
        <div className="nav">
            <div className="logo" >

            </div>

            <div className="search" >

            </div>

            <div className="user-session" >
                <span id="welcome" >Hello {userName}</span>
                <div className="logins" >
                    { !sessionUser && <NavLink className="create-session" to="/signup" >Sign Up</NavLink>}
                    { !sessionUser && <NavLink className="create-session" to="/login">Log In</NavLink> }
                    {sessionUser && <input className="create-session" type="url" onClick={(logoutClick)} >Log Out</input>}

                </div>
            </div>
        </div>
    )
}

export default Navigation;