import React from 'react';
import './Book.css'

const Book = (props) => {
    const {handleAddToActivity, book} = props;
    const {title, requiredTime, img} = book;
    return (
        <div className='each-book'>
            <div className="book-img">
                <img src={img} alt="" />
            </div>
            <div className="book-info">
                <h4>{title}</h4>
                <p>Required-time: <small>{requiredTime}mins</small></p>
            </div>
            <button onClick={()=>handleAddToActivity(book)} className='book-btn'>Add to list</button>
        </div>
    );
};

export default Book;