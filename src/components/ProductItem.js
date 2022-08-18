import React from "react";

const ProductItem = ({product, onAddToCart}) => {
    return (
        <div className="col-3">
            <div className="card">
                <div className="card-body text-center">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">${product.price}</p>
                    <button className="btn btn-primary" onClick={onAddToCart}>
                        <i className="fa-solid fa-cart-plus"></i>
                        <p className="ms-2 d-inline">Add To Cart</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem