import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import Cart from '../Cart/Cart';
import './Body.css'
const Body = () => {
    //load books from json
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        fetch('books.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[]);
    // console.log(books);

    //add to cart function
    const [cart, setCart] = useState([]);
    const addToCart = cartInfo =>{
        setCart([...cart,cartInfo]);
    }
    console.log(cart);
    return (
        <div className='body'>
            <Books books={books} addToCart={addToCart}></Books>
            <Cart insideCart={cart}></Cart>
        </div>
    );
};

export default Body;