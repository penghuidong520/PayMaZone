import csrfFetch from "./csrf";
import { SET_CURRENT_USER, REMOVE_CURRENT_USER } from './session';
const RECEIVE_CART = 'carts/RECEIVE_CART';
const RECEIVE_CARTS = 'carts/RECEIVE_CARTS';
const REMOVE_CART = 'carts/REMOVE_CART';

const receiveCart = (cart) => ({
    type: RECEIVE_CART,
    cart
});

const receiveCarts = (carts) => ({
    type: RECEIVE_CARTS,
    carts
});

const removeCart = (cartId) => ({
    type: REMOVE_CART,
    cartId
});

export const getCart = (cartId) => ({carts}) => (carts ? carts[cartId] : null);
export const getCarts = ({carts}) => (carts ? Object.values(carts): []);

export const fetchCarts = () => async dispatch => {
    const response = await fetch("/api/carts");
    if (response.ok) {
        let data = await response.json();
        dispatch(receiveCarts(data));
    }
}

export const fetchCart = (cartId) => async dispatch => {
    const response = await fetch(`/api/carts/${cartId}`);
    if (response.ok) {
        let data = await response.json();
        dispatch(receiveCart(data));
    }
} 

export const createCart = (cart) => async dispatch => {
    const response = await csrfFetch("/api/carts", {
        method: 'POST',
        body: JSON.stringify(cart),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.ok) {
        let data = await response.json();
        dispatch(receiveCart(data));
    }
}

export const updateCart = (cart) => async dispatch => {
    const response = await csrfFetch(`/api/carts/${cart.id}`, {
        method: "PATCH",
        body: JSON.stringify(cart),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    if (response.ok) {
        let data = await response.json();
        dispatch(receiveCart(data));
    }
}

export const deleteCart = (cartId) => async dispatch => {
    const response = await csrfFetch(`api/carts/${cartId}`, {
        method: 'DELETE'
    })
    if (response.ok) {
        dispatch(removeCart(cartId));
    }
}

const cartReducer = (state = {}, action) => {
    Object.freeze(state);
    const nextState = {...state};
    switch(action.type) {
        case SET_CURRENT_USER:
            if(!action.payload) return state;
            return {...state, ...action.payload.carts};
        case RECEIVE_CARTS:
            return action.carts;
        case RECEIVE_CART:
            nextState[action.cart.id] = action.cart;
            return nextState;
        case REMOVE_CART:
            delete nextState[action.cartId];
            return nextState;
        case REMOVE_CURRENT_USER:
            return {};
        default:
            return state;
    }
}

export default cartReducer;