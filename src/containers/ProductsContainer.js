import React from "react";
import { addProductToCart } from '../actions';
import ProductItem from "../components/ProductItem";
import ProductList from "../components/ProductList";
import { connect } from "react-redux";

const ProductsContainer = ({products, addProductToCart}) => {
    return (
            <ProductList title="PRODUCT LIST">
                {products.map(product => 
                    <ProductItem
                        key={product.id}
                        product={product}
                        onAddToCart={() => addProductToCart(product)}
                    />
                )}
            </ProductList>
    )
}

const mapStateToProps = state => {
    return {products: state.products}
    
}

const mapDispatchToProps = dispatch => {
    return {
        addProductToCart: product => dispatch(addProductToCart(product))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer)