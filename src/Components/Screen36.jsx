import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import img from '../Images/images/71.png';
import "../Css/Screen36.css";

const Screen36 = () => {
    const navigate = useNavigate();
    return (
        <>
            <nav>
                <img src={img} alt="img" className='bgscan' />
                <ArrowBackIosIcon className='lessthn35' fontSize="large" onClick={() => { navigate("/S18") }}></ArrowBackIosIcon>
            </nav>
            <div>
                <p className='scard35'>Scan Your Card :)</p>
                <p className='scard351'>Just my luck, no ice. Must go faster. Did he just throw my cat out of the window</p>
                <div className='scanner'></div>
            </div>
        </>
    );
}

export default Screen36;
