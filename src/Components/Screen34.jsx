import React from 'react';
import Refer from './Refer';
import { useNavigate } from 'react-router-dom';
import img1 from "../Images/images/70.png";
import '../Css/Screen34.css';

const Screen34 = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <Refer />
                <div className='referlin'></div>
                <Refer link='https://ui8.net/76738b' />
                <img src={img1} alt='img' className='referarr' onClick={() => { navigate('/S35') }} />
            </div>
        </>
    );
}

export default Screen34;
