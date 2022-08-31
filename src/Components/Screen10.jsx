import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "../Css/Screen10.css";

const Screen10 = () => {
    const navigate = useNavigate();
    return (
        <>
            <ArrowBackIosIcon className='back' fontSize="small" onClick={() => { navigate("/S9") }}></ArrowBackIosIcon>
            <p className='sn10'>Login to Foodly</p>
            <p className='title10'>Verify phone number </p>
            <p className='tag10'>Enter the 4-Digit code sent to you at +610489632578</p>
            <div className='form10'>
                <form>
                    <div>
                        <div className='boxinpu'></div><input type="text" className='in10' autoFocus /><hr className='hr10' />
                        <div className='boxinpu1'></div><input type="text" className='in101' /> <hr className='hr110' />
                        <div className='boxinpu2'></div><input type="text" className='in102' /><hr className='hr210' />
                        <div className='boxinpu3'></div><input type="text" className='in103' /><hr className='hr310' />
                    </div>
                    <button className='btn10' type='submit' onClick={() => { navigate("/S11") }}>CONTINUE</button>
                </form>
            </div>
            <p className='drc10'>Didn’t receive code?</p>
            <p className='ra10'>Resend Again.</p>
            <p className='tc10'>By Signing up you agree to our Terms Conditions & Privacy Policy.</p>
        </>
    );
}

export default Screen10;

