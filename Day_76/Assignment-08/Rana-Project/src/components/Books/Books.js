import React from 'react';
import Book from '../Book/Book';
import './Books.css'
const Books = (props) => {
    const {books,addToCart}=props;
    // console.log(books);
    return (
        <div className='all-books'>
            {books.map(book=>{
                return <Book key={book.id} book={book} addToCart={addToCart}></Book>
            })}
        </div>
    );
};

export default Books;