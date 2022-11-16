import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom"
import { createCart, updateCart } from "../../store/cart";
import { fetchProduct, getProduct } from '../../store/products';
import { getCarts } from "../../store/cart";
import ReviewIndex from "../Reviews";

const ProductShow = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const {productId} = useParams();
    const product = useSelector(getProduct(productId));
    const sessionUser = useSelector(state => state.session.user);
    const [quantity, setQuantity] = useState(1);
    const carts = useSelector(getCarts);
    const [maxQuantity, setMaxQuantity] = useState(false);
    let tens = '';
    let decimal = '';
    let details = [];
    if (product) {
        [tens, decimal] = product.price.toFixed(2).toString().split(".");
        details = product.description.split(". ");
        details = details.map(detail => <li key={detail} id="product-detail">{detail}</li>);
    } else {
        tens = 'Undefined Price';
    }
    useEffect(()=>{
        dispatch(fetchProduct(productId));
    }, [dispatch, productId])
    
    const addToCart = (e) => {
        e.preventDefault();
        if (sessionUser) {
            if (carts.every((cart)=> {
                if (cart.productId === product.id) {
                    if (cart.quantity + parseInt(quantity) > 10) {
                        // setMaxQuantity(true);
                        alert("Provider limited purchasing amount no greater than 10 of the kind")
                        return false;
                    }
                    setMaxQuantity(false);
                    dispatch(updateCart({
                        id: cart.id,
                        userId: sessionUser.id, 
                        productId: product.id, 
                        quantity: cart.quantity + parseInt(quantity)})
                    )
                    return false;
                } else {
                    return true
                }
            })) {
                dispatch(createCart({
                    userId: sessionUser.id, 
                    productId: product.id, 
                    quantity: quantity})
                );
            }
        } else {
            history.push("/login");
        }
    }
    if (product) {
        return (
            <div>
                {/* {maxQuantity && 
                <div className="error-container" >
                    <div className="error-container-inner">
                        <span> DON"T DO IT</span>
                        <p>OH NO</p>

                    </div>
                </div>} */}

                <div className="product-show-container" >
                    <div className="show-container" >
                        <div className="product-show-img-container" >
                            { product.photourls && <img className="show-img" src={product.photourls[0]} alt=""/>}
                            { !product.photourls && <img className="show-img" src="#" alt=""/>}
                        </div>
                        <div className="product-show-description-container" >
                            <h2 id="product-name"> { product.name }</h2>
                            <hr className="product-hr" />
                            <div className="price-container" >
                                <span className="decimal" >$</span>
                                <span id="tens" >{tens}</span>
                                <span className="decimal" >{decimal}</span>
                            </div>
                            <div id="show-detail" >
                                <span id="show-description" >Description: </span>
                                <ul id="show-detail-ul" >
                                    {details}
                                </ul>
                            </div>
                        </div>
                        <div className="product-order-container" >
                            <div className="product-order" >
                                <div className="price-container" >
                                    <span className="decimal" >$</span>
                                    <span id="tens" >{tens}</span>
                                    <span className="decimal" >{decimal}</span>
                                </div>

                                <div className="product-aftersale" >
                                    <span className="order-free-stuff" >FREE Returns</span>
                                    <span className="order-free-stuff" >FREE delivery</span>
                                </div>
                                
                                <div className="quantity-select">
                                    <span>Quantity: </span>
                                    <select className="product-quantity" id="product-show-quantity" onChange={e => setQuantity(e.target.value)} >
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                        <option value={6}>6</option>
                                        <option value={7}>7</option>
                                        <option value={8}>8</option>
                                        <option value={9}>9</option>
                                    </select>
                                </div>

                                <div className="place-product" >
                                    <button id="add-to-cart" className="product-action" onClick={addToCart}>Add to Cart</button>
                                    {/* <button id="buy-now" className="product-action" >Buy Now</button> */}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <ReviewIndex reviews={product.reviews} />
            </div>
        )
    } else {
        return (
            <></>
        )
    }

}

export default ProductShow