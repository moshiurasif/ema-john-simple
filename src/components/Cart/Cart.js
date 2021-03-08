import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((totalPrice, prd) => totalPrice + prd.price,0);
    let shipping = 0;
    if (total>35) {
        shipping=0;
    }else if (total>15) {
        shipping = 4.99;
    }else if (total>0) {
        shipping = 12.99;
    }
    const tax = (total/10).toFixed(2);
    const grandTotal = (total+shipping+Number(tax)).toFixed(2);
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4>Order Summery</h4>
            <h5>Items Order: {cart.length}</h5>
            <h5>Product Price: {formatNumber(total)}</h5>
            <h6>Shipping Cost: {shipping}</h6>
            <h5><small>Tax+VAT(10%): {tax}</small></h5>
            <h6>Total Price: {grandTotal}</h6>
        </div>
    );
};

export default Cart;