import React from 'react';
import Getstarted from './Getstarted';
import { useNavigate } from 'react-router-dom';
import img from '../Images/images/2.png';
import "../Css/Screen1.css";

const Screen1 = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='cirle'></div>
            <Getstarted />
            <div>
                <img src={img} alt='img'></img>
                <Getstarted name='Welcome' />
            </div>
            <div className='paras'><p>It’s a pleasure to meet you. We are excited that you’re here so let’s get started!</p></div>
            <button className='btng' onClick={() => { navigate("/S40") }}>GET STARTED</button>
        </>
    );
}

export default Screen1;
