import React,{useState} from 'react'
import products from './data/products';
import Product from './components/Product';
import Cart from './components/Cart';
import './App.css';

 const App = () => {
  const[cartItems , setCartItems] = useState([]);
  
  const handleAddToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem){
      setCartItems(cartItems.map(item => item.id === product.id ? { ...item,quantity: item.quantity + 1} : item));
    } else {
      setCartItems([...cartItems, {...product, quantity: 1}]);
    }
  };

  const handleUpdateQuantity = (productId , quantity) => {
    setCartItems(cartItems.map(item => item.id === productId ? {...item, quantity}: item));
  };

  return (
    <div className="App">
      <div className="header">
        <h1>My Online Store</h1>
     </div>
     <div className="product-list">
      {products.map(product => (
        <Product key = {product.id} product = {product} onAddToCart={handleAddToCart} />

      ))}
     </div>
     <Cart cartItems= {cartItems} onUpdateQuantity = {handleUpdateQuantity} />

    </div>
  );
};


export default App;
