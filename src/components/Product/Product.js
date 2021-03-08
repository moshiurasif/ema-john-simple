import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const {name, img, seller, price, stock} = props.product;
    return (
        <div className="product">
            <div className="">
                <img src={img} alt=""/>
            </div>
            <div className="">
                <h3 className="product-name">{name}</h3>
                <p><small>by: {seller}</small></p>
                <h2>${price}</h2>
                <p><small>Only {stock} product available - order soon</small></p>
                <button onClick={()=>props.handleAddPd(props.product)} className="cart-btn"><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            </div>
        </div>
    );
};

export default Product;