import React from 'react';
import Getstarted from './Getstarted';
import { useNavigate } from 'react-router-dom';
import img from "../Images/images/7.png";
import img2 from "../Images/images/8.png";
import "../Css/Screen4.css";

const Screen4 = () => {
    const navigate = useNavigate();
    return (
        <>
            <Getstarted />
            <div>
                <img src={img} alt="img" className='img147' />
                <Getstarted name3='Choose your food' />
            </div>
            <Getstarted para='Easily find your type of food craving and you’ll get delivery in wide range.' />
            <img src={img2} alt="img2" className='img24' onClick={() => { navigate("/S3") }} />
            <button className='btn4' onClick={() => { navigate("/S5") }}>GET STARTED</button>
        </>
    );
}

export default Screen4;

