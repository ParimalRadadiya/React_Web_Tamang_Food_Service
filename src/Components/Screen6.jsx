import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "../Css/Screen6.css";

const Screen6 = () => {
    const navigate = useNavigate();
    return (
        <>
            <ArrowBackIosIcon className='back' fontSize="small" onClick={() => { navigate("/S5") }}></ArrowBackIosIcon>
            <p className='sn6'>Forgot Password</p>
            <p className='title6'>Forgot password </p>
            <p className='tag6'>Enter your email address and we will send you a reset instructions.</p>
            <div className='form6'>
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1" className='emailforgot'>EMAIL ADDRESS</label>
                        <input type="text" className='in6' autoFocus />
                    </div>
                    <hr className='hr6' /><br />
                    <button className='btn6' type='submit' onClick={() => { navigate("/S7") }}>RESET PASSWORD</button>
                </form>
            </div>
        </>
    );
}

export default Screen6;

