import React, { useEffect, useState } from 'react';
import image from '../../../images/img1.jpg';
import Toastify from '../../Toastify/Toastify';
import { addToDb, getTimeFromDb } from '../../Utility/Utility';
import './Activities.css'

const Activities = (props) => {
    const [times, setTimes] = useState(0);

    const {activities} = props;
    let studyTime = 0;
    for(const book of activities){
       studyTime = studyTime + JSON.parse(book.requiredTime);
    }

    const breakTimes = [5, 7, 10, 12];
    const handleBreakTime =(time)=>{
        const breakTime = [time];
        setTimes(breakTime);
        addToDb(time);
    }
    useEffect(()=>{
        let storeNewTime = 0;
        const storedTime = getTimeFromDb();
        console.log(storedTime)
        if(storedTime.time){
            storeNewTime = storedTime.time;
            setTimes(storeNewTime);
        }
    },[times])
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
                        {
                            breakTimes.map(time=> <button onClick={()=>handleBreakTime(time)} key={breakTimes.indexOf(time)}>{time}mins</button>)   
                        }
                    </div>
                </div>
                <div className="study-details">
                    <h2>Study Details</h2>
                    <div className='study-time'>
                        <h4>Study Time: <small>{studyTime}</small> mins</h4>
                    </div>
                    <div className='break-time'>
                        <h4>Break Time: <small>{times} mins</small></h4>
                    </div>
                    <div>
                        <Toastify></Toastify>
                    </div>
                </div>
        </div>
    );
};

export default Activities;