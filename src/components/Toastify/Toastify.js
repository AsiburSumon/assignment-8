import React from 'react';
import './Tostify.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toastify = () => {

    const notify =()=>{
        toast('Basic notification!')
    }
    return (
        <div>
            <button onClick={notify} className="activities-btn">Activity Completed</button>
            <ToastContainer />
        </div>
    );
};

export default Toastify;