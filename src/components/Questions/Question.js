import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div className='questions'>
            <div className='question'>
                <h3>How does react work?</h3>
                <p>ANS: React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            </div>
            <div className='question'>
                <h3>What is the difference between Props and State?</h3>
                <p>ANS: Props- <br /> 1. Props are read only. <br />2. Props can not be modified. <br /> State- <br />
                1. State changes can be asynchronous. <br />
                2. State can be modified using this.setState.</p>
            </div>
            <div className='question'>
                <h3>What is the purpose of useEffect without DataLoad?</h3>
                <p>ANS:..........................</p>
            </div>
        </div>
    );
};

export default Question;