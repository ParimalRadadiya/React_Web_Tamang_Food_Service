import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "../Css/Screen28.css";

const Screen28 = () => {
    const navigate = useNavigate();
    function myfunction() {
        var x = document.getElementById('myinput');
        var y = document.getElementById('eyehide28');
        var z = document.getElementById('eyepass28');

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
                <ArrowBackIosIcon className='back' fontSize="small" onClick={() => { navigate("/S27") }}></ArrowBackIosIcon>
            </nav>
            <p className='profset'>Profile Settings</p>
            <form>
                <div className="form-group">
                    <label for="exampleInputEmail1" className='full28'>FULL NAME</label>
                    <input type="text" className='in28' autoFocus />
                    <hr className='hr28' />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1" className='email28'>Email address</label>
                    <input type="text" className='in281' />
                    <hr className='hr281' />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1" className='phone28'>Phone number</label>
                    <input type="number" className='in282' />
                    <hr className='hr282' />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1" className='pass28'>PAssword</label>
                    <input type="text" className='in283' id='myinput' />
                    <div onClick={myfunction}>
                        <div id='eyehide28'><i className="fa-solid fa-eye"></i></div>
                        <div id='eyepass28'><i className="fa-solid fa-eye-slash"></i></div>
                    </div>
                    <hr className='hr283' />
                    <p className='passchang' onClick={() => { navigate('/S29') }}>Change</p>
                </div>
            </form>
            <button className='btn28' onClick={() => { navigate("/S27") }}>Change settings</button>
        </>
    );
}

export default Screen28;
