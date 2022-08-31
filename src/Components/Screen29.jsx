import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "../Css/Screen29.css";

const Screen29 = () => {
    const navigate = useNavigate();
    function myfunction() {
        var x = document.getElementById('myinput');
        var y = document.getElementById('eyehide29');
        var z = document.getElementById('eyepass29');

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
    function myfunction1() {
        var x = document.getElementById('myinput1');
        var y = document.getElementById('eyehide291');
        var z = document.getElementById('eyepass291');

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
    function myfunction2() {
        var x = document.getElementById('myinput2');
        var y = document.getElementById('eyehide292');
        var z = document.getElementById('eyepass292');

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
            <nav>
                <ArrowBackIosIcon className='back' fontSize="small" onClick={() => { navigate("/S28") }}></ArrowBackIosIcon>
            </nav>
            <p className='profset29'>Profile Settings</p>
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1" className='full28'>Password</label>
                    <input type="password" className='in28' autoFocus id='myinput' />
                    <div onClick={myfunction}>
                        <div id='eyehide29'><i className="fa-solid fa-eye"></i></div>
                        <div id='eyepass29'><i className="fa-solid fa-eye-slash"></i></div>
                    </div>
                    <hr className='hr29' />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1" className='email28'>New password</label>
                    <input type="password" className='in281' id='myinput1' />
                    <div onClick={myfunction1}>
                        <div id='eyehide291'><i className="fa-solid fa-eye"></i></div>
                        <div id='eyepass291'><i className="fa-solid fa-eye-slash"></i></div>
                    </div>
                    <hr className='hr291' />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1" className='phone28'>Confirm password</label>
                    <input type="password" className='in282' id='myinput2' />
                    <div onClick={myfunction2}>
                        <div id='eyehide292'><i className="fa-solid fa-eye"></i></div>
                        <div id='eyepass292'><i className="fa-solid fa-eye-slash"></i></div>
                    </div>
                    <hr className='hr292' />
                </div>
            </form>
            <button className='btn29' onClick={() => { navigate('/S28') }}>Change Password</button>
        </>
    );
}

export default Screen29;

