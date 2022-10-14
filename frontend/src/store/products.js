
const RECEIVE_PRODUCTS = 'products/RECEIVE_PRODUCTS';
const RECEIVE_PRODUCT = 'products/RECEIVE_PRODUCT';

const receiveProducts = (products) => ({
    type: RECEIVE_PRODUCTS,
    products
})

const receiveProduct = (product) => ({
    type: RECEIVE_PRODUCT,
    product
})

export const getProduct = (productId) => ({products}) => (products ? products[productId] : null);
export const getProducts = ({products}) => (products ? Object.values(products) : []);

export const fetchProducts = () => async dispatch => {
    const response = await fetch("/api/products");
    if (response.ok) {
        let data = await response.json();
        dispatch(receiveProducts(data))
    }
}

export const fetchProduct = (productId) => async dispatch => {
    const response = await fetch(`/api/products/${productId}`);
    if (response.ok) {
        let data = await response.json();
        // debugger
        dispatch(receiveProduct(data));
    }
}

const productsReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = {...state};
    switch(action.type) {
        case RECEIVE_PRODUCTS:
            return {...state, ...action.products};
        case RECEIVE_PRODUCT:
            nextState[action.product.id] = action.product;
            return nextState;
        default:
            return state;
    }
}

export default productsReducer;