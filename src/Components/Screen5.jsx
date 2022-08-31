import React from 'react';
import Emailpass from './Emailpass';
import Connectfb from './Connectfb';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "../Css/Screen5.css";

const Screen5 = () => {
    const navigate = useNavigate();
    return (
        <>
            <ArrowBackIosIcon className='back' fontSize="small" onClick={() => { navigate("/S4") }}></ArrowBackIosIcon>
            <p className='sn5'>Sign In</p>
            <p className='title5'>Welcome to Tamang </p><p className='fst'>Food Services</p>
            <p className='tag5'>Enter your Phone number or Email </p><p className='afs'>address for sign in. Enjoy your food :)</p>
            <Emailpass />
            <button className='btn5' type='submit' onClick={() => { navigate("/S11") }}>SIGN IN</button>
            <p className='fp5' onClick={() => { navigate("/S6") }}>Forget Password?</p>
            <p className='dha5'>Don’t have account?</p>&nbsp;<p className='cna5' onClick={() => { navigate("/S8") }}>Create new account.</p>
            <p className='or5'>Or</p>
            <Connectfb button='Connect with Facebook' google='Connect with google' />
        </>
    );
}

export default Screen5;

