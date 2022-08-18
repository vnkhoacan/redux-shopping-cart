import { ADD_PRODUCT_TO_CART, DELETE_PRODUCT_FROM_CART } from '../constants/ActionTypes';

const initialState = {
    products: [
        { id: '1', title: 'Gaming Mouse', price: 29.99 },
        { id: '2', title: 'Harry Potter 3', price: 9.99 },
        { id: '3', title: 'Used plastic bottle', price: 0.99 },
        { id: '4', title: 'Half-dried plant', price: 2.99 }
    ],
    cart: [],
    cartSum: 0
}

const shopReducer = (state = initialState, action) => {
    let updatedCart;
    let updatedCartIndex;
    switch (action.type) {
        case ADD_PRODUCT_TO_CART:
            updatedCart = [...state.cart];
            updatedCartIndex = updatedCart.findIndex(
                item => item.id === action.payload.id
            );

            if (updatedCartIndex < 0) {
                updatedCart.push({...action.payload, quantity: 1 });
            } else {
                const updatedItem = {
                    ...updatedCart[updatedCartIndex]
                };
                updatedItem.quantity++;
                updatedCart[updatedCartIndex] = updatedItem;
            }
            return {...state, cart: updatedCart};
        case DELETE_PRODUCT_FROM_CART:
            updatedCart = [...state.cart];
            updatedCartIndex = updatedCart.findIndex(
                item => item.id === action.payload
            )

            const updatedItem = {
                ...updatedCart[updatedCartIndex]
            }
            updatedItem.quantity--;
            if(updatedItem.quantity <= 0) {
                updatedCart.splice(updatedCartIndex, 1);
            } else {
                updatedCart[updatedCartIndex] = updatedItem;
            }

            return {...state, cart: updatedCart};
        default:
            return state;
    }
}

export default shopReducer