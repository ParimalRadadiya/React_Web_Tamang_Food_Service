import React from 'react';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../Css/Screen9.css';

const Screen9 = () => {
    const navigate = useNavigate();
    return (
        <>
            <ArrowBackIosIcon className='back' fontSize="small" onClick={() => { navigate("/S8") }}></ArrowBackIosIcon>
            <p className='sn9'>Login to Tamang Food <br /> Service</p>
            <p className='title9'>Get started with Foodly </p>
            <p className='tag9'>Enter your phone number to use foodly and enjoy your food :)</p>
            <div className='form9'>
                <form>
                    <span className='phonenumberinp'>phone number</span>
                    <IntlTelInput className='inteli'
                        containerClassName="intl-tel-input"
                        inputClassName="form-control" autoFocus
                    />
                    <hr className='hr9' /><br />
                    <button className='btn9' type='submit' onClick={() => { navigate("/S10") }}>SIGN UP</button>
                </form>
            </div>
        </>
    );
}

export default Screen9;

