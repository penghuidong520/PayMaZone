import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as sessionActions from "../../store/session";
import logo from "../../images/logo_white_cropped.png"
import { getCarts } from "../../store/cart";
import SearchModal from "./SearchModal";
import Modal from '@mui/material/Modal';



const Navigation = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const carts = useSelector(getCarts);
    const userName = (sessionUser) ? sessionUser.username : 'Guest';
    const logoutClick = e => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    }
    const [open, setOpen] = useState(false);

    let productsCount = 0;
    carts.forEach((cart) => {
        productsCount += cart.quantity;
    })

    const handleInput = e => {
        setOpen(true);
    }

    const handleClose = e => {
        setOpen(false);
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
                    <form className="search-bar-form">
                        <div id="search-dropdown" >
                            <span id="search-dropdown-span" >
                                All
                            </span>
                        </div>
                        <input id="search-input" className="search-bar-component" type="text" name="search" onClick={handleInput}/>
                        {open && <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            className="search-modal"
                        >
                            <input id="search-input" className="search-bar-component" type="text" name="search" onClick={handleInput}/>
                        </Modal>}
                        <button id="search-submit" type="submit" value=""> 
                        <i className="fa-solid fa-magnifying-glass fa-xl"></i>
                        </button>
                    </form>

                    {/* {open && 
                            <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                            className="search-modal"
                            >
                        <form className="search-bar-form">
                            <div id="search-dropdown" >
                                <span id="search-dropdown-span" >
                                    All
                                </span>
                            </div>
                            <input id="search-input" className="search-bar-component" type="text" name="search" onClick={handleInput} autoFocus/>
                            <button id="search-submit" type="submit" value=""> 
                                <i className="fa-solid fa-magnifying-glass fa-xl"></i>
                            </button>

                        </form>
                  </Modal>
                  } */}

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