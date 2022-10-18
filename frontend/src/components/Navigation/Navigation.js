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
            <div className="logo nav-container" >
                <Link id="logo-link" to='/' >
                    <img id='logo-img-home' src={logo} alt="logo" />
                </Link>
            </div>

            <div className="search-bar" >
                <form className="search-bar-form">
                    <div id="search-dropdown" >
                        <span id="search-dropdown-span" >
                            All
                        </span>
                        {/* <div id="search-dropdown-content" >
                            <ul>
                                <li>PlaceHolding</li>
                                <li>PlaceHolding</li>
                                <li>PlaceHolding</li>
                            </ul>
                        </div> */}
                    </div>
                    <input id="search-input" className="search-bar-component" type="text" name="search" />
                    <button id="search-submit" type="submit" value=""> 
                    <i className="fa-solid fa-magnifying-glass fa-xl"></i>
                    </button>

                </form>
            </div>

            <div className="user-nav" >
                <div className="user-session nav-container" >
                    <div className="user-nav-container" >
                        <span id="welcome" >Hello {userName}</span>
                        <div className="logins" >
                            { !sessionUser && <NavLink className="create-session" to="/signup" >SignUp</NavLink>}
                            { !sessionUser && <NavLink className="create-session" to="/login">LogIn</NavLink> }
                            {sessionUser && <button className="nav-logout" type="url" onClick={(logoutClick)}>Log Out</button>}
                        </div>
                    </div>
                </div>

                <Link className="nav-user-orders nav-container" to="#">
                    <div className="user-nav-container" >
                        <span id="nav-returns" >Returns</span>
                        <span id="nav-orders" > {'&'} Orders </span>
                    </div>
                </Link>

                <Link className="nav-user-cart nav-container" to="#">
                    <i className="fa-solid fa-cart-shopping fa-xl"></i>
                    <span id="cart-items">0</span>
                </Link>
            </div>
        </div>
    )
}

export default Navigation;