import {
    ADD_PRODUCT_TO_CART,
    DELETE_PRODUCT_FROM_CART,
    DECREASE_PRODUCT_QUANTITY,
    INCREASE_PRODUCT_QUANTITY,
    CHECKOUT_CART,
    GET_ALL_PRODUCTS,
    GET_CART
} from '../constants/ActionTypes';

const initialState = {
    products: [],
    isFetchingProducts: true,
    cart: [],
    isFetchingCart: true,
    cartTotal: 0
}

const shopReducer = (state = initialState, action) => {
    let updatedCart;
    let updatedCartIndex;
    let updatedItem;
    let updatedCartTotal;
    switch (action.type) {
        case GET_ALL_PRODUCTS:
            return {
                ...state,
                products: action.payload,
                isFetchingProducts: false,
            };
        case GET_CART:
            updatedCartTotal = 0;
            action.payload.map((item) => {
                updatedCartTotal = updatedCartTotal + (item.price*item.quantity);
                return item;
            })

            return {
                ...state,
                cart: action.payload,
                cartTotal: updatedCartTotal.toFixed(2),
                isFetchingCart: false,
            };
        case ADD_PRODUCT_TO_CART:
            let isCreate = true;
            updatedCart = state.cart;
            updatedCartTotal = state.cartTotal;
            updatedCartTotal = Number(updatedCartTotal) + Number(action.payload.price);
            updatedCart.map((item) => {
                if(item.id === action.payload.id) {
                    item.quantity++;
                    isCreate = false;
                }
                return item;
            })
            if(isCreate) {
                updatedCart = [...updatedCart, action.payload];
            }
            return {
                ...state,
                cart: updatedCart,
                cartTotal: updatedCartTotal.toFixed(2)
            };
        case DELETE_PRODUCT_FROM_CART:
            updatedCart = [...state.cart];
            updatedCartTotal = [state.cartTotal];
            updatedItem = updatedCart.find((item) => item.id === action.payload)
            updatedCartTotal = updatedCartTotal - (updatedItem.price * updatedItem.quantity);
            updatedCart = updatedCart.filter((item) => item.id !== action.payload)
            return {
                ...state,
                cart: updatedCart,
                cartTotal: updatedCartTotal.toFixed(2)
            };
        case INCREASE_PRODUCT_QUANTITY:
            updatedCart = state.cart;
            updatedCartTotal = state.cartTotal;
            updatedCartTotal = Number(updatedCartTotal) + Number(action.payload.price);
            updatedCart.map((item) => {
                if(item.id === action.payload.id) {
                    item.quantity = action.payload.quantity;
                }
                return item;
            })
            return {
                ...state,
                cart: updatedCart,
                cartTotal: updatedCartTotal.toFixed(2)
            };
        case DECREASE_PRODUCT_QUANTITY:
            updatedCart = state.cart;
            updatedCartTotal = state.cartTotal;
            updatedCartTotal = Number(updatedCartTotal) - Number(action.payload.price);
            updatedCartIndex = updatedCart.findIndex(
                item => item.id === action.payload.id
            )
            if(action.payload.quantity <= 0) {
                updatedCart.splice(updatedCartIndex, 1);
            } else {
                updatedItem = {
                    ...updatedCart[updatedCartIndex]
                }
                updatedCart[updatedCartIndex] = updatedItem;
            }
            return {...state, cart: updatedCart, cartTotal: updatedCartTotal.toFixed(2)};
        case CHECKOUT_CART:
            return {
                ...state,
                cart: [],
                cartTotal: 0
            };
        default:
            return state;
    }
}

export default shopReducer