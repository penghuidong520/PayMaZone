import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { fetchProduct, getProduct } from '../../store/products';

const ProductShow = () => {
    const dispatch = useDispatch();
    const {productId} = useParams();
    const product = useSelector(getProduct(productId));
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

                            <div className="place-product" >
                                <button id="add-to-cart" className="product-action">Add to Cart</button>
                                <button id="buy-now" className="product-action" >Buy Now</button>
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