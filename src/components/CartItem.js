import React from "react";

const CartItem = ({
    cart,
    onIncreaseProduct,
    onDecreaseProduct,
    onDeleteFromCart
}) => {
    return (
        <div className="mb-4">
            <div className="card">
                <div className="card-body">
                    <p className="mb-1"><b>Name:</b> {cart.title}, <b>Price:</b> ${cart.price}</p>
                    <div>
                        <button className="btn btn-secondary" onClick={onDecreaseProduct}>
                            <i className="fa-solid fa-minus"></i>
                        </button>
                        <label className="mx-3">{cart.quantity}</label>
                        <button className="btn btn-secondary" onClick={onIncreaseProduct}>
                            <i className="fa-solid fa-plus"></i>
                        </button>
                        <button className="btn btn-danger ms-4" onClick={onDeleteFromCart}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem