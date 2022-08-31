import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import RoomIcon from '@mui/icons-material/Room';
import CancelIcon from '@mui/icons-material/Cancel';
import NearMeIcon from '@mui/icons-material/NearMe';
import "../Css/Screen12.css";

const Screen12 = () => {
    const navigate = useNavigate();
    const [val, setVal] = useState();
    return (
        <>
            <CloseIcon className='back' fontSize='small' onClick={() => { navigate("/S11") }}></CloseIcon>
            <p className='title12'>Find restaurants near you</p>
            <p className='tag12'>Please enter your location or allow access to your location to find restaurants near you.</p>
            <div className='form12'>
                <form>
                    <div className='inpu' ></div>
                    <input type="text" className='in12' value={val} autoFocus />
                    <div className='location12'><RoomIcon fontSize='small'></RoomIcon></div>
                    <div className='cancel12'><CancelIcon fontSize='small' onClick={() => setVal(() => "")}></CancelIcon></div>
                </form>
                <div>
                    <div className='arrow12'><NearMeIcon fontSize='small'></NearMeIcon></div>
                    <p className='one12'>St Georgese Terrace, Perth</p><br /><p className='on12'>Western Australia</p>
                    <hr className='hr12' />
                </div>
                <div>
                    <div className='arrow112'><NearMeIcon fontSize='small'></NearMeIcon></div>
                    <p className='two12'>Murray street, Perth</p><br /><p className='tw12'>Western Australia</p>
                    <hr className='hr112' />
                </div>
                <div>
                    <div className='arrow212'><NearMeIcon fontSize='small'></NearMeIcon></div>
                    <p className='three12'>Kings Square, Perth</p><br /><p className='th12'>Western Australia</p>
                    <hr className='hr113' />
                </div>
                <div>
                    <div className='arrow312'><NearMeIcon fontSize='small'></NearMeIcon></div>
                    <p className='four12' onClick={() => { navigate('/S13') }}>HayStreet, Perth</p><br /><p className='fr12'>Western Australia</p>
                    <hr className='hr114' />
                </div>
            </div>
        </>
    );
}

export default Screen12;

