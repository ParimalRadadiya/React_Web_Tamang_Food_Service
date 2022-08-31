import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import img from "../Images/images/9.png";
import img1 from "../Images/images/10.png";
import "../Css/Screen8.css";

const Screen8 = () => {
    const navigate = useNavigate();
    function myfunction() {
        var x = document.getElementById('myinput');
        var y = document.getElementById('eyehide8');
        var z = document.getElementById('eyepass8');

        if (x.type === 'password') {
            x.type = 'text';
            y.style.display = 'block';
            z.style.display = 'none';
        } else {
            x.type = 'password';
            y.style.display = 'none';
            z.style.display = 'block';
        }
    }
    return (
        <>
            <ArrowBackIosIcon className='back' fontSize="small" onClick={() => { navigate("/S7") }}></ArrowBackIosIcon>
            <p className='sn8'>Forgot Password</p>
            <p className='title8'>Create Account</p>
            <p className='tag8'>Enter your Name, Email and Password for sign up.</p>
            <p className='aha8' onClick={() => { navigate("/S5") }}>Already have account?</p>
            <div className='form8'>
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1" className='full8'>FULL NAME</label>
                        <div className='checkemail'>
                            <i className="fa-solid fa-check"></i>
                        </div>
                        <input type="text" className='in8' autoFocus />
                    </div>
                    <hr className='hf8' /><br />
                    <div className="form-group">
                        <label for="exampleInputEmail1" className='em8'>EMAIL ADDRESS</label>
                        <div className='checkemail1'>
                            <i className="fa-solid fa-check"></i>
                        </div>
                        <input type="text" className='in81' />
                    </div>
                    <hr className='hr8' /><br />
                    <div className="form-group">
                        <label for="exampleInputEmail1" className='pass8'>PASSWORD</label>
                        <input type="password" className='in82' id='myinput' />
                        <div onClick={myfunction}>
                            <div id='eyehide8'><i className="fa-solid fa-eye"></i></div>
                            <div id='eyepass8'><i className="fa-solid fa-eye-slash"></i></div>
                        </div>
                        <div className='checkemail2'>
                            <i className="fa-solid fa-check"></i>
                        </div>
                    </div>
                    <hr className='hp8' />
                    <button className='btn8' type='submit' onClick={() => { navigate("/S9") }}>SIGN UP</button>
                </form>
            </div>
            <p className='tc8'>By Signing up you agree to our Terms Conditions & Privacy Policy.</p>
            <p className='or8'>Or</p>
            <div>
                <button className='facebook8' onClick={() => { navigate("/S33") }}>Connect with Facebook</button>
                <img src={img} alt="img" className='face8' />
                <button className='google8'>Connect with google</button>
                <img src={img1} alt="img" className='goog8' />
            </div>
        </>
    );
}

export default Screen8;

