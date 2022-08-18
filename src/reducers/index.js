import { ADD_PRODUCT_TO_CART, DELETE_PRODUCT_FROM_CART, DECREASE_PRODUCT_QUANTITY, INCREASE_PRODUCT_QUANTITY, CHECKOUT_CART } from '../constants/ActionTypes';

const initialState = {
    products: [
        { id: '1', title: 'Gaming Mouse', price: 29.99 },
        { id: '2', title: 'Harry Potter 3', price: 9.99 },
        { id: '3', title: 'Used plastic bottle', price: 0.99 },
        { id: '4', title: 'Half-dried plant', price: 2.99 }
    ],
    cart: [],
    cartTotal: 0
}

const shopReducer = (state = initialState, action) => {
    let updatedCart;
    let updatedCartIndex;
    let updatedItem;
    let updatedCartTotal;
    switch (action.type) {
        case INCREASE_PRODUCT_QUANTITY:
        case ADD_PRODUCT_TO_CART:
            updatedCart = [...state.cart];
            updatedCartTotal = [state.cartTotal];
            updatedCartIndex = updatedCart.findIndex(
                item => item.id === action.payload.id
            );

            if (updatedCartIndex < 0) {
                updatedCart.push({...action.payload, quantity: 1 });
            } else {
                updatedItem = {
                    ...updatedCart[updatedCartIndex]
                };
                updatedItem.quantity++;
                updatedCart[updatedCartIndex] = updatedItem;
            }
            updatedCartTotal = Number(updatedCartTotal) + Number(action.payload.price);
            return {...state, cart: updatedCart, cartTotal: updatedCartTotal.toFixed(2)};
        case DELETE_PRODUCT_FROM_CART:
            updatedCart = [...state.cart];
            updatedCartTotal = [state.cartTotal];
            updatedCartIndex = updatedCart.findIndex(
                item => item.id === action.payload
            )
            updatedItem = {
                ...updatedCart[updatedCartIndex]
            };
            updatedCartTotal = Number(updatedCartTotal) - (Number(updatedItem.quantity)*Number(updatedItem.price));
            updatedCart.splice(updatedCartIndex, 1);
            return {...state, cart: updatedCart, cartTotal: updatedCartTotal.toFixed(2)};
        case DECREASE_PRODUCT_QUANTITY:
            updatedCart = [...state.cart];
            updatedCartTotal = [state.cartTotal];
            updatedCartIndex = updatedCart.findIndex(
                item => item.id === action.payload
            )
            updatedItem = {
                ...updatedCart[updatedCartIndex]
            }
            updatedItem.quantity--;
            if(updatedItem.quantity <= 0) {
                updatedCart.splice(updatedCartIndex, 1);
            } else {
                updatedCart[updatedCartIndex] = updatedItem;
            }
            updatedCartTotal = Number(updatedCartTotal) - Number(updatedItem.price);
            return {...state, cart: updatedCart, cartTotal: updatedCartTotal.toFixed(2)};
        case CHECKOUT_CART:
            return initialState;
        default:
            return state;
    }
}

export default shopReducer