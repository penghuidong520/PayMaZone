import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import CartIndexItem from './CartIndexItem';
import { Link } from "react-router-dom";



const CartIndex = () => {
    const sessionUser = useSelector(state => state.session.user);
    const carts = useSelector(state=> state.carts);
    const cartItems = Object.keys(carts).length;

    let cartList = [];
    if (sessionUser) {
        if (cartItems) {
            cartList = Object.values(carts).map(cart=> <CartIndexItem key={cart} cart={cart} />)
        }
    }

    if (!sessionUser) return <Redirect to="/login" />
    if (cartItems) {
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