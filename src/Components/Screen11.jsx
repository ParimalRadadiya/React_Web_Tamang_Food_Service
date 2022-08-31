import React from 'react';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close'
import RoomIcon from '@mui/icons-material/Room';
import NearMeIcon from '@mui/icons-material/NearMe';
import "../Css/Screen11.css";

const Screen11 = () => {
    const navigate = useNavigate();
    return (
        <>
            <CloseIcon className='back' fontSize='small' onClick={() => { navigate("/S10") }}></CloseIcon>
            <p className='title11'>Find restaurants near you</p>
            <p className='tag11'>Please enter your location or allow access to your location to find restaurants near you.</p>
            <div className='form11'>
                <form>
                    <button className='btn11' type='submit'> <div className='arrow11'><NearMeIcon fontSize='small'></NearMeIcon></div>Use current location</button>
                    <input type="text" placeholder='Enter a new address' className='addr' onClick={() => { navigate("/S12") }} />
                    <RoomIcon className='location' fontSize='small'></RoomIcon>
                </form>
            </div>
        </>
    );
}

export default Screen11;

