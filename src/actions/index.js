import * as types from '../constants/ActionTypes';

export const addProductToCart = (product) => ({
    type: types.ADD_PRODUCT_TO_CART,
    payload: product
})

export const deleteProductFromCart = (productId) => ({
    type: types.DELETE_PRODUCT_FROM_CART,
    payload: productId
})

export const increaseProductQuantity = (product) => ({
    type: types.INCREASE_PRODUCT_QUANTITY,
    payload: product
})

export const decreaseProductQuantity = (productId) => ({
    type: types.DECREASE_PRODUCT_QUANTITY,
    payload: productId
})

export const checkout = () => ({
    type: types.CHECKOUT_CART
})