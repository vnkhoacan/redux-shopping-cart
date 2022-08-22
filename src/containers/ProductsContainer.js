import React, { useEffect } from "react";
import { addProductToCart, getAllProducts } from '../actions';
import ProductItem from "../components/ProductItem";
import ProductList from "../components/ProductList";
import { connect } from "react-redux";

const ProductsContainer = ({
    products,
    cart,
    isFetchingProducts,
    getAllProducts,
    addProductToCart
}) => {
    const isEmpty = products.length === 0;
    useEffect(() => {
        getAllProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
            <ProductList title="PRODUCT LIST">
                {isEmpty
                ? (isFetchingProducts ? <p>Loading.....</p> : <p>Empty</p>)
                : products.map(product =>
                    <ProductItem
                        key={product.id}
                        product={product}
                        onAddToCart={() => addProductToCart({product, cart})}
                    />
                )}
            </ProductList>
    )
}

const mapStateToProps = state => {
    return {
        products: state.products,
        cart: state.cart,
        isFetchingProducts: state.isFetchingProducts
    }
    
}

const mapDispatchToProps = dispatch => {
    return {
        getAllProducts: () => dispatch(getAllProducts()),
        addProductToCart: ({product, cart}) => dispatch(addProductToCart({product, cart}))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)