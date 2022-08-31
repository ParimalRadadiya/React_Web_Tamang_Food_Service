import React from 'react';
import Getstarted from './Getstarted';
import { useNavigate } from 'react-router-dom';
import img from "../Images/images/3.png";
import img2 from "../Images/images/4.png";
import "../Css/Screen2.css";

const Screen2 = () => {
    const navigate = useNavigate();
    return (
        <>
            <Getstarted />
            <div>
                <img src={img} alt="img" className='img1' />
                <Getstarted name1='All your favorites' />
            </div>
            <Getstarted para='Order from the best local restaurants with easy, on-demand delivery.' />
            <img src={img2} alt="img2" className='imgs' onClick={() => { navigate("/") }} />
            <button className='btn2'>GET STARTED</button>
        </>
    );
}

export default Screen2;
