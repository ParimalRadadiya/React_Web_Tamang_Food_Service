import React from 'react';
import Getstarted from './Getstarted';
import { useNavigate } from 'react-router-dom';
import img from "../Images/images/5.png";
import img2 from "../Images/images/6.png";
import "../Css/Screen3.css";

const Screen3 = () => {
    const navigate = useNavigate();
    return (
        <>
            <Getstarted />
            <div>
                <img src={img} alt="img" className='img1' />
                <Getstarted name2='Free delivery offers' />
            </div>
            <Getstarted para='Free delivery for new customers via Apple Pay and others payment methods.' />
            <img src={img2} alt="img2" className='img2' onClick={() => { navigate("/S2") }} />
            <button className='btn3' onClick={() => { navigate("/S4") }}>GET STARTED</button>
        </>
    );
}

export default Screen3;

