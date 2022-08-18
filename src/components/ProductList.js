import React from "react";

const ProductList = ({title, children}) => {
    return (
        <div>
            <h1>{title}</h1>
            <div>
                {children}
            </div>
        </div>
    )
}

export default ProductList