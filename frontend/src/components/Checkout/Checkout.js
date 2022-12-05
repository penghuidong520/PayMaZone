import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteCart, getCarts } from "../../store/cart";


const Checkout = () => {
    const dispatch = useDispatch();

    const cartItems = useSelector(getCarts);
    // debugger
    if (cartItems) {
        cartItems.forEach(cartItem => {
            dispatch(deleteCart(cartItem.id))
        })
    }
    // cartItems.forEach()

    return (
        <div className="checkout-container">
            <div className="checkout-inner-container" >
                <h1 className="checkout-header">Thank you for shopping at PayMaZone</h1>
                <span className="checkout-span checkout-span-note" >Your cart has been cleared</span>
                {/* <br /> */}
                <span className="checkout-span checkout-span-note" >PayMaZone will provide best quality of services</span>
                {/* <br/> */}
                <span className="checkout-span checkout-portfolio" >If you would like to know more about me</span>
                {/* <br/> */}
                <span className="checkout-span checkout-portfolio" >Checkout &nbsp;
                    <a href="https://penghuidong520.github.io/PortfolioPage/" target="_blank" id="checkout-portfolio-link" >My Portfolio</a> 
                </span>
            </div>
            <Link className="checkout-continue-shopping" to="/products">Continue browsing</Link>

        </div>
    )
}

export default Checkout;