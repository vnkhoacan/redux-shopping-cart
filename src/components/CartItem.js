import React from "react";

const CartItem = ({cart, onDeleteFromCart}) => {

    return (
        <div className="mb-4">
            <p className="mb-1"><b>Name:</b> {cart.title}, <b>Price:</b> {cart.price}</p>
            <div>
                <button className="btn btn-dark">--</button>
                <label className="mx-2">{cart.quantity}</label>
                <button className="btn btn-dark">+</button>
                <button className="btn btn-outline-danger ms-4" onClick={onDeleteFromCart}>
                X
                </button>
            </div>
        </div>

    )
}

export default CartItem