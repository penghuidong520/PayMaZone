import React from 'react';
import { Link } from 'react-router-dom';

const ProductIndexItem = ({product}) => {
    return (
        <>
            <li>
                <Link to={`/products/${product.id}`} >{product.name}</Link>
            </li>
        </>
    )
}

export default ProductIndexItem;