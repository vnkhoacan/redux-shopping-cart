import * as types from '../constants/ActionTypes';

export const addProductToCart = (product) => ({
    type: types.ADD_PRODUCT_TO_CART,
    payload: product
})

export const deleteProductFromCart = (productId) => ({
    type: types.DELETE_PRODUCT_FROM_CART,
    payload: productId
})