import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import logo from "../../images/logo_white_cropped.png"

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
                <Link id="logo-link" to='/' >
                    <img id='logo-img' src={logo} alt="logo" />
                </Link>
            </div>

            <div className="search" >
                <form>
                    <input type="text" placeholder="Search.." name="search" />
                    <button type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>

            <div className="user-session" >
                <span id="welcome" >Hello {userName}</span>
                <div className="logins" >
                    { !sessionUser && <NavLink className="create-session" to="/signup" >Sign Up</NavLink>}
                    { !sessionUser && <NavLink className="create-session" to="/login">Log In</NavLink> }
                    {sessionUser && <button className="nav-logout" type="url" onClick={(logoutClick)}>Log Out</button>}

                </div>
            </div>
        </div>
    )
}

export default Navigation;