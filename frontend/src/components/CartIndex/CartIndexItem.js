import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../store/products";
import { getProduct } from "../../store/products";
import { deleteCart } from "../../store/cart";

const CartIndexItem = ({cart}) => {
    const dispatch = useDispatch();
    const productId = cart.productId;
    const product = useSelector(getProduct(productId));
    useEffect(()=>{
        dispatch(fetchProduct(productId))
    }, [dispatch, cart, productId])


    const handleRemove = (e) => {
        e.preventDefault();
        dispatch(deleteCart(cart.id));
    }

    if (product) {
        return (
            <div className="cart-product-container">
                <h1>{product.name}</h1>
                {/* <img src={product.photourls[0]} /> */}
                <h1>{product.description}</h1>
                <h1>{cart.quantity}</h1>
                <button id="cart-remove" onClick={handleRemove} >Remove</button>
            </div>
        )
    } else {
        return (
            <></>
        )
    }
}

export default CartIndexItem;