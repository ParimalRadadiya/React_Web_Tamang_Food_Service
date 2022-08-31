import React from 'react';
import Order from './Order';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../Css/Screen25.css';

const Screen25 = () => {
    const navigate = useNavigate();
    return (
        <>
            <nav>
                <ArrowBackIosIcon className='back' fontSize="small" onClick={() => { navigate("/S24") }}></ArrowBackIosIcon>
            </nav>
            <Order total="Total (incl. VAT)" />
            <button className='check' onClick={() => { navigate('/S26') }}>Checkout (AUD $30)</button>
        </>
    );
}

export default Screen25;
