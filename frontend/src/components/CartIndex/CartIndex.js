import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { fetchCarts } from "../../store/cart";
import CartIndexItem from './CartIndexItem';
import { Link } from "react-router-dom";



const CartIndex = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const carts = useSelector(state=> state.carts);
    let cartList = [];
    if (sessionUser) {
        if (carts) {
            cartList = Object.values(carts)
            .map(cart=> <CartIndexItem key={cart.id} cart={cart} />)
        }
    }
    
    useEffect(()=>{
        dispatch(fetchCarts());
    }, [dispatch, sessionUser])
    
    if (!sessionUser) return <Redirect to="/login" />
    if (sessionUser.carts) {
        return (
            <div>
                {cartList}
                <Link to="/products" > Continue Shopping </Link>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Currently no Items In Your Cart</h1>
                <Link to="/products">Find something in your intrerest</Link>
            </div>
        )
    }
}

export default CartIndex;