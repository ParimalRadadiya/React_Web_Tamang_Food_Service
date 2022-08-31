import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import img from "../Images/images/64.png";

const Refer = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <nav>
                <ArrowBackIosIcon className='back' fontSize="small" onClick={() => { navigate("/S27") }}></ArrowBackIosIcon>
            </nav>
            <p className='referafr'>Refer to Friends</p>
            <img src={img} alt="img" className='referimg' />
            <p className='get10'>Refer a Friend, Get $10</p>
            <p className='get101'>Get $10 in credits when someone sign up using your refer link</p>
            <p className='referlink'>{props.link}</p>
        </>
    )
}

export default Refer;
