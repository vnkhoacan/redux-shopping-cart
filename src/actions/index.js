import * as types from '../constants/ActionTypes';
import ProductsDataService from '../services/products.service';
import CartDataService from '../services/cart.service';

export const getAllProducts = () => async (dispatch) => {
    try {
        const res = await ProductsDataService.getAll();
        dispatch({
            type: types.GET_ALL_PRODUCTS,
            payload: res.data,
        })
    } catch (err) {
        console.log(err);
    }
}

export const getCart = () => async (dispatch) => {
    try {
        const res = await CartDataService.getAll();
        dispatch({
            type: types.GET_CART,
            payload: res.data
        })
    } catch (err) {
        console.log(err);
    }
}

export const addProductToCart = ({product, cart}) => async (dispatch) => {
    try {
        let res, updateItem;
        let isExistInCart = cart.some(item => item.id === product.id);
        if(isExistInCart) {
            cart.map((item) => {
                if(item.id === product.id) {
                    product["quantity"] = item.quantity + 1;
                    updateItem = product;
                }
                return item;
            })
            res = await CartDataService.update(updateItem.id, updateItem);
        } else {
            product["quantity"] = 1;
            res = await CartDataService.create(product);
        }
        dispatch({
            type: types.ADD_PRODUCT_TO_CART,
            payload: res.data,
        });
        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
};

export const deleteProductFromCart = (productId) => async(dispatch) => {
    try {
        await CartDataService.delete(productId);
        dispatch({
            type: types.DELETE_PRODUCT_FROM_CART,
            payload: productId
        })
    } catch (err) {
        console.log(err);
    }
};

export const increaseProductQuantity = (product) => async(dispatch) => {
    try {
        product.quantity++;
        const res = await CartDataService.update(product.id, product);
        dispatch({
            type: types.INCREASE_PRODUCT_QUANTITY,
            payload: product,
        });

        return Promise.resolve(res.data);
    } catch (err) {
        return Promise.reject(err);
    }
}

export const decreaseProductQuantity = (product) => async(dispatch) => {
    try {
        product["quantity"]--;
        if(product.quantity <= 0) {
            await CartDataService.delete(product.id);
        } else {
            await CartDataService.update(product.id, product);
        }
        dispatch({
            type: types.DECREASE_PRODUCT_QUANTITY,
            payload: product,
        });
    } catch (err) {
        console.log(err);
    }
}

export const checkout = (cart) => async(dispatch) => {
    try {
        cart.forEach(item => {
            CartDataService.delete(item.id);
        });
        dispatch({
            type: types.CHECKOUT_CART,
        });
    } catch (err) {
        console.log(err);
    }
}