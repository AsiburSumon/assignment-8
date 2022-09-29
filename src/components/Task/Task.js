import React, { useEffect, useState } from 'react';
import './Task.css';
import Book from './Book/Book';
import Activities from './Activities/Activities';

const Task = () => {
    const [books, setBooks] = useState([]);
    const [activities, setActivities] = useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setBooks(data))
    },[]);

    const handleAddToActivity =(books)=>{
        const time = [...activities, books];
        setActivities(time)
    }

    return (
        <div className='library-container'>
            <div className='books-container'>
                <h1>STUDY-TIMER</h1>
                <h2>Select your books</h2>
                <div className='books-card'>
                    {
                        books.map(book=> <Book book={book} key={book.id} handleAddToActivity={handleAddToActivity}></Book>)
                    }
                </div>
            </div>
            <div className='activities'>
                <Activities activities={activities}></Activities>
            </div>
        </div>
    );
};

export default Task;