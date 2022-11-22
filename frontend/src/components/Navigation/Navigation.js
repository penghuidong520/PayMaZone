import { useEffect, useState } from "react";
import { NavLink, Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import logo from "../../images/logo_white_cropped.png"
import { getCarts } from "../../store/cart";
import SearchModal from "./SearchModal";
import Modal from '@mui/material/Modal';
import { fetchSearches, getSearches } from "../../store/search";



const Navigation = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user);
    const carts = useSelector(getCarts);
    const userName = (sessionUser) ? sessionUser.username : 'Guest';
    
    const searches = useSelector(getSearches);
    const searchList = searches.map(item => 
            <div className="search-item-container" key={item.id} >
                <div className="search-item-name" >
                    <Link id="search-item-link" to={`/products/${item.id}`} >
                        {item.name}
                    </Link>
                </div>
            </div>        
    )
    // debugger

    const [searchInput, setSearchInput] = useState(false);
    // debugger

    const logoutClick = e => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    }

    let productsCount = 0;
    carts.forEach((cart) => {
        productsCount += cart.quantity;
    })

    // search
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearchSubmit = e => {
        e.preventDefault();
        // dispatch(fetchSearches(searchTerm));
        history.push(`/search/${searchTerm}`);
    }

    const handleChangeInput = e => {
        setSearchTerm(e.target.value)
        if (e.target.value !== '') {
            dispatch(fetchSearches(e.target.value));
        }
    }

    const handleInputBlur = e => {
        e.preventDefault();
        setTimeout(() => {
            setSearchInput(false);
        },100)
    }

    //

    return (
        <div className="nav">
            <div className="logo nav-container" >
                <Link id="logo-link" to='/' >
                    <img id='logo-img-home' src={logo} alt="logo" />
                </Link>
            </div>

            <div className="search-bar" >                    
                    <form className="search-bar-form" onSubmit={handleSearchSubmit} >
                        <div id="search-dropdown" >
                            <span id="search-dropdown-span" >
                                All
                            </span>
                        </div>
                        <div className="search-input-container search-bar-component">
                            <input id="search-input" className="search-bar-component" type="text" name="search" 
                            value={searchTerm}
                            onChange={handleChangeInput}
                            onFocus={e => setSearchInput(true)}
                            onBlur={handleInputBlur} 
                            autoComplete="off" />
                            {searchInput && 
                            <div className="searches-container" >
                                {searchList}
                            </div>}
                            
                        </div>
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

                {/* <Link className="nav-user-orders nav-container" to="#">
                    <div className="user-nav-container" >
                        <span id="nav-returns" >Returns</span>
                        <span id="nav-orders" > {'&'} Orders </span>
                    </div>
                </Link> */}

                <Link className="nav-user-cart nav-container" to="/carts">
                    <i className="fa-solid fa-cart-shopping fa-xl"></i>
                    <span id="cart-items">{productsCount}</span>
                </Link>
            </div>
        </div>
    )
}

export default Navigation;