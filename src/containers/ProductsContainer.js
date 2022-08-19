import React, { useEffect } from "react";
import { addProductToCart, getAllProducts } from '../actions';
import ProductItem from "../components/ProductItem";
import ProductList from "../components/ProductList";
import { connect } from "react-redux";

const ProductsContainer = ({products, cart, getAllProducts, addProductToCart}) => {
    useEffect(() => {
        getAllProducts();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
            <ProductList title="PRODUCT LIST">
                {products.map(product => 
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
        cart: state.cart
    }
    
}

const mapDispatchToProps = dispatch => {
    return {
        getAllProducts: () => dispatch(getAllProducts()),
        addProductToCart: ({product, cart}) => dispatch(addProductToCart({product, cart}))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)