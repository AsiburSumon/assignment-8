import React from 'react';
import image from '../../../images/img1.jpg';
import './Activities.css'

const Activities = (props) => {
    const {activities} = props;
   
    let studyTime = 0;

    for(const book of activities){
       studyTime = studyTime+ JSON.parse(book.requiredTime);
    }

    return (
        <div className='activities-side'>
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
                        <h4>Study Time: <small>{studyTime}</small> mins</h4>
                    </div>
                    <div className='break-time'>
                        <h4>Break Time: <small>0</small> mins</h4>
                    </div>
                    <div>
                        <button className="activities-btn">Activity Completed</button>
                    </div>
                </div>
        </div>
    );
};

export default Activities;