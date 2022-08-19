import React, { useEffect } from "react";
import {
    getCart,
    decreaseProductQuantity,
    increaseProductQuantity,
    deleteProductFromCart,
    checkout
} from '../actions';
import ProductList from "../components/ProductList";
import CartItem from "../components/CartItem";
import { connect } from "react-redux";

const CartContainer = ({
    cart,
    cartTotal,
    getCart,
    decreaseProductQuantity,
    increaseProductQuantity,
    deleteProductFromCart,
    checkout
}) => {
    let cartLength = cart.length;
    useEffect(() => {
        getCart();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ProductList title="MY CART">
            {cart.map(item => 
                <CartItem
                    key={item.id}
                    cart={item}
                    onDecreaseProduct={() => decreaseProductQuantity(item)}
                    onIncreaseProduct={() => increaseProductQuantity(item)}
                    onDeleteFromCart={() => deleteProductFromCart(item.id)}
                />
            )}
            <div className="mb-2">
                <b className="me-2">Total:</b>${cartTotal}
            </div>
            <div className="col-2">
                <button
                className="btn btn-success"
                disabled={cartLength ? false : true}
                onClick={() => checkout(cart)}
                >
                    <i className="fa-solid fa-cart-shopping"></i>
                    <p className="ms-2 d-inline">Checkout</p>
                </button>
            </div>
        </ProductList>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
        cartTotal: state.cartTotal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCart: () => dispatch(getCart()),
        decreaseProductQuantity: product => dispatch(decreaseProductQuantity(product)),
        increaseProductQuantity: product => dispatch(increaseProductQuantity(product)),
        deleteProductFromCart: id => dispatch(deleteProductFromCart(id)),
        checkout: cart => dispatch(checkout(cart)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)