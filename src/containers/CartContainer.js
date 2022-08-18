import React from "react";
import { deleteProductFromCart } from '../actions';
import ProductList from "../components/ProductList";
import CartItem from "../components/CartItem";
import { connect } from "react-redux";

const CartContainer = ({cart, deleteProductFromCart}) => {
    return (
        <ProductList title="MY CART">
            {cart.map(cartItem => 
                <CartItem
                    key={cartItem.id}
                    cart={cartItem}
                    onDeleteFromCart={() => deleteProductFromCart(cartItem.id)}
                />
            )}
        </ProductList>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteProductFromCart: id => dispatch(deleteProductFromCart(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)