import React from 'react';
import { Link } from 'react-router-dom';

const ProductIndexItem = ({product}) => {
    // console.log(product);
    return (
        <Link to={`/products/${product.id}`} >{product.name}</Link>
    )
}

export default ProductIndexItem;