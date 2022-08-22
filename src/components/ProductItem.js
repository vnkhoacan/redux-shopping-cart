import React, { useState } from "react";

const ProductItem = ({product, onAddToCart}) => {
    const [isAdding, setIsAdding] = useState(false)
    const handleAddToCart = async () => {
        setIsAdding(true);
        await onAddToCart();
        setIsAdding(false);
    }
    return (
        <div className="col-3">
            <div className="card">
                <div className="card-body text-center">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">${product.price}</p>
                    <button
                    className="btn btn-primary"
                    onClick={handleAddToCart}
                    disabled={isAdding}
                    >
                        {isAdding ? "Loading....." 
                        : "Add To Cart"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductItem