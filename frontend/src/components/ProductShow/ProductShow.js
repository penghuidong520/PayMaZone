import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom"
import { createCart } from "../../store/cart";
import { fetchProduct, getProduct } from '../../store/products';

const ProductShow = () => {
    const dispatch = useDispatch();
    const {productId} = useParams();
    const product = useSelector(getProduct(productId));
    const sessionUser = useSelector(state => state.session.user);
    const [quantity, setQuantity] = useState(1);
    useEffect(()=>{
        dispatch(fetchProduct(productId));
    }, [dispatch, productId])

    let tens = '';
    let decimal = '';
    let details = [];
    if (product) {
        [tens, decimal] = product.price.toString().split(".");
        details = product.description.split(". ");
        details = details.map(detail => <li key={detail} id="product-detail">{detail}</li>);
    } else {
        tens = 'Undefined Price';
    }

    const addToCart = (e) => {
        e.preventDefault();
        if (sessionUser) {
            dispatch(createCart({userId: sessionUser.id, productId: product.id, quantity: quantity}));
        } else {
            return <Redirect to="/login" />
        }
    }


    if (product) {
        return (
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
                                <select onChange={e => setQuantity(e.target.value)} >
                                    <option value="0">1</option>
                                    <option value="1">2</option>
                                    <option value="2">3</option>
                                    <option value="3">4</option>
                                    <option value="4">5</option>
                                    <option value="5">6</option>
                                    <option value="6">7</option>
                                    <option value="7">8</option>
                                    <option value="8">9</option>
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
        )
    } else {
        return (
            <></>
        )
    }

}

export default ProductShow