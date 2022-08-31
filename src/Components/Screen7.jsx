import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import img from "../Images/images/11.png";
import "../Css/Screen7.css";

const Screen7 = () => {
    const navigate = useNavigate();
    return (
        <>
            <ArrowBackIosIcon className='back' fontSize="small" onClick={() => { navigate("/S6") }}></ArrowBackIosIcon>
            <p className='sn7'>Forgot Password</p>
            <p className='title7'>Reset email sent</p>
            <p className='tag7'>We have sent a instructions email to sajin tamang@figma.com.</p>
            <p className='prob7'>Having problem?</p>
            <div className='form7'>
                <form>
                    <button className='btn7' type='submit' onClick={() => { navigate("/S8") }}>SEND AGAIN</button>
                </form>
            </div>
            <img src={img} alt="img" className='img17' />
        </>
    );
}

export default Screen7;

