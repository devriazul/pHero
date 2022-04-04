import React from "react";
import "./Book.css";
const Book = (props) => {
  const { book,addToCart } = props;
  // console.log(addToCart);
  return (
    <div className="single-book">
      <img src={book.img} alt="" />
      <div className="info">
        <h3>{book.name}</h3>
        <p>প্রকাশকঃ {book.publications}</p>
        <p>বিভাগঃ {book.category}</p>
        <p><strong>মূল্যঃ {book.price} টাকা</strong></p>
        <p>রেটিংঃ {book.ratings}</p>
      <button onClick={()=>addToCart(book)}>Add to cart</button>
      </div>
    </div>
  );
};

export default Book;
