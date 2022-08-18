import React from "react";

const ProductItem = ({product, onAddToCart}) => {
    return (
        <div className="mb-3">
            <p className="mb-1"><b>Name:</b> {product.title}, <b>Price:</b> {product.price}</p>
            <button className="btn btn-primary" onClick={onAddToCart}>
                Add to cart
            </button>
        </div>

    )
}

export default ProductItem