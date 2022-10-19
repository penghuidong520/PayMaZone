import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../store/products";
import { getProduct } from "../../store/products";

const CartIndexItem = ({cart}) => {
    const dispatch = useDispatch();
    const product = useSelector(getProduct(cart.productId));
    console.log(product);

    useEffect(()=>{
        dispatch(fetchProduct(product.id))
    }, [cart])

    if (product) {
        return (
            <div className="cart-list-container">
                <h1>{product.name}</h1>
                {/* <img src={product.photourls[0]} /> */}
                <h1>{product.description}</h1>
            </div>
        )
    } else {
        return (
            <></>
        )
    }
}

export default CartIndexItem;