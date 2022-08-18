import React from "react";

const ProductList = ({title, children}) => {
    return (
        <div className="mb-3 mt-3">
            <h1 className="text-center">{title}</h1>
            <div className="row">
                {children}
            </div>
        </div>
    )
}

export default ProductList