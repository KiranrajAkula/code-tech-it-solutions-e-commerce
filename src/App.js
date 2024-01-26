
import { useState } from 'react';
import './App.css';
import  Header  from './components/Header'
import Product_list from './components/Product_list';
import CartList from './components/CartList';


function App() {

const [product, setProduct] = useState(
  [
    
    {
      "id": 9,
      "title": "Dell Inspiron 3250",
      "description": "Infinix Inbook X1 Ci3 10th 8GB...",
      "price": 100099,
      "discountPercentage": 11.83,
      "rating": 4.54,
      "stock": 96,
      "brand": "DELL",
      "category": "laptops",
      "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
      "images": [
        "https://i.dummyjson.com/data/products/9/1.jpg",
      ]
    },
    {
      "id": 9,
      "title": "HP Pevilion",
      "description": "Infinix Inbook X1 Ci3 10th 8GB...",
      "price": 51099,
      "discountPercentage": 11.83,
      "rating": 4.54,
      "stock": 96,
      "brand": "HP",
      "category": "laptops",
      "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
      "images": [
        
        "https://i.dummyjson.com/data/products/9/2.png",
        
      ]
    },
    {
      "id": 9,
      "title": "Mac Book air",
      "description": "Infinix Inbook X1 Ci3 10th 8GB...",
      "price": 100999,
      "discountPercentage": 11.83,
      "rating": 4.54,
      "stock": 96,
      "brand": "Mac",
      "category": "laptops",
      "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
      "images": [
        
        "https://i.dummyjson.com/data/products/9/3.png",
        
      ]
    },
    {
      "id": 9,
      "title": "Infinix INBOOK",
      "description": "Infinix Inbook X1 Ci3 10th 8GB...",
      "price": 299999,
      "discountPercentage": 11.83,
      "rating": 4.54,
      "stock": 96,
      "brand": "Infinix",
      "category": "laptops",
      "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
      "images": [
        
        "https://i.dummyjson.com/data/products/9/4.jpg",
        
      ]
    },
    {
      "id": 9,
      "title": "Infinix INBOOK",
      "description": "Infinix Inbook X1 Ci3 10th 8GB...",
      "price": 159999,
      "discountPercentage": 11.83,
      "rating": 4.54,
      "stock": 96,
      "brand": "Infinix",
      "category": "laptops",
      "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
      "images": [
        
        "https://i.dummyjson.com/data/products/9/thumbnail.jpg"
      ]
    },
    {
      "id": 9,
      "title": "Dell Inspiron 3250",
      "description": "Infinix Inbook X1 Ci3 10th 8GB...",
      "price": 100099,
      "discountPercentage": 11.83,
      "rating": 4.54,
      "stock": 96,
      "brand": "DELL",
      "category": "laptops",
      "thumbnail": "https://i.dummyjson.com/data/products/9/thumbnail.jpg",
      "images": [
        "https://i.dummyjson.com/data/products/9/1.jpg",
      ]
    }
   
    
  ]
)
 const [cart, setCart] = useState([])
 const [showCart, setShowCart] = useState(false)
 

 const addToCart = (data) =>{
  setCart([...cart, { ...data, quantity: 1}])
 }
 const handleShow = (value) =>{
  setShowCart(value)
 }

  return (
    <div>
    <Header count = {cart.length} handleShow = {(value) => handleShow(value)}/>
    {
      showCart ? 
      <CartList cart = { cart } ></CartList> :
      <Product_list product = { product } addToCart = { addToCart }></Product_list>
    }
    
    </div>
  );

  /** 
  return(
    <>
    <JuiceList ></JuiceList>
    </>
  )
  */
}

export default App;
