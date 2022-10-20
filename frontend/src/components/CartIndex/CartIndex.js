import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import CartIndexItem from './CartIndexItem';
import { Link } from "react-router-dom";

const CartIndex = () => {
    const sessionUser = useSelector(state => state.session.user);
    const carts = useSelector(state=> state.carts);
    const cartItems = Object.keys(carts).length;
    let total = 0;
    let totalItems = 0;
    let cartList = [];
    if (sessionUser) {
        if (cartItems) {
            cartList = Object.values(carts).map(cart=> {
                console.log(cart);
                total += (cart.price * cart.quantity);
                totalItems += cart.quantity;
                return <CartIndexItem key={cart.id} cart={cart} />
            })
        }
    }

    if (!sessionUser) return <Redirect to="/login" />
    if (cartItems) {
        return (
            <div className="cart-index-container">
                <div className="cart-list-container">
                    <div className="cart-list-container-inner">
                        <div className="cart-list-header">
                            <h1 id="shopping-cart" >Shopping Cart</h1>
                            <div id="shopping-cart-price" >
                                <span>Price</span>
                            </div>
                        </div>
                        {cartList}
                        {/* <Link to="/products" > Continue Shopping </Link> */}
                        <div className="total-price-container">
                            <span>Subtotal ({totalItems} items): 
                                <span className="total-price" > ${total.toFixed(2)} </span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="cart-checkout-container" >
                    <div className="total-price-container">
                        <span>Subtotal ({totalItems} items): 
                            <span className="total-price" > ${total.toFixed(2)} </span>
                        </span>
                    </div>
                    <div className="cart-checkout-body">
                        <button className="cart-checkout-button">
                            <Link to="/products" className="checkout-button-link">
                                Continue Shopping
                            </Link>
                        </button>
                    </div>
                </div>

            </div>
        )
    } else {
        return (
            <div className="cart-index-container" >
                <div className="cart-no-list-container" >
                    <h1 className="cart-title" >Your PayMaZone Cart is empty</h1>
                    <Link className="continue-shopping" to="/products">Find something in your intrerest</Link>
                </div>
            </div>
        )
    }
}

export default CartIndex;