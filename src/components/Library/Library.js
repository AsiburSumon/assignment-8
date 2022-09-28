import React from 'react';
import './Library.css';
import image from '../../images/img1.jpg'

const Library = () => {
    return (
        <div className='library-container'>
            <div className='books-container'>
                <h1>SET-STUDY-TIME</h1>
                <h2>Select your books</h2>
                <div className='books-card'>
                    <h1 style={{border:"2px solid green"}}>Hello</h1>
                    <h1 style={{border:"2px solid green"}}>Hello</h1>
                    <h1 style={{border:"2px solid green"}}>Hello</h1>
                    <h1 style={{border:"2px solid green"}}>Hello</h1>
                </div>
            </div>
            <div className='activities'>
                <div className='profile'>
                    <img src={image} alt="error" />
                        <div>
                            <h4 style={{margin:"0", marginTop:"10px"}}>Asibur Rahman Sumon</h4>
                            <p style={{marginTop:"0"}}>Amin-Bazar,Dhaka</p>
                        </div>
                </div>
                <div className='profile-info'>
                    <h4>74<small>kg</small></h4>
                    <h4>5'8</h4>
                    <h4>20<small>yr</small></h4>
                    <p>Weight</p>
                    <p>Height</p>
                    <p>Age</p>
                </div>
                <div className='break'>
                    <h2>Add a break</h2>
                    <div className="break-info">
                        <h4>30s</h4>
                        <h4>40s</h4>
                        <h4>45s</h4>
                        <h4>50s</h4>
                    </div>
                </div>
                <div className="study-details">
                    <h2>Study Details</h2>
                    <div className='study-time'>
                        <h4>Study Time: <small>0</small> second</h4>
                    </div>
                    <div className='break-time'>
                        <h4>Break Time: <small>0</small> second</h4>
                    </div>
                    <div>
                        <button className="activities-btn">Activity Completed</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Library;