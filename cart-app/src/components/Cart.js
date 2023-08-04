import React from 'react'

 const Cart = ({cartItems}) => {
 const totalPrice = cartItems.reduce((total, item ) => total + item.price * item.quantity, 0);

  return (
    <div className="cart">
    <h2>Shopping Cart</h2>
    {cartItems.map(item =>(
        <div key={item.id}>
        <p>{item.name} - $ {item.price} x {item.quantity}</p>
    </div>
    ))}
    <h3>Total: ${totalPrice}</h3>
    </div>
  );
};

export default Cart;
