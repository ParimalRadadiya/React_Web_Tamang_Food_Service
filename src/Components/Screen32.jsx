import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../Css/Screen32.css';

const Screen32 = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <ArrowBackIosIcon className='back' fontSize="small" onClick={() => { navigate("/S27") }}></ArrowBackIosIcon>
      </nav>
      <div>
        <p className='payment1'>Payment Methods</p>
        <div className='seaadd'>
          <input type="text" className='in32' placeholder='Search new address' autoFocus />
        </div>
        <i className="addre fa-solid fa-location-dot"></i>
        <p className='receadd'>Recent address</p>
        <p className='addclr'>Clear all</p>
        <ul>
          <i className="addre1 fa-solid fa-location-dot"></i>
          <li className='add1'>Hay Street, Perth</li>
          <i className="addre2 fa-solid fa-location-dot"></i>
          <li className='add2'>Zoo, Perth</li>
          <i className="addre3 fa-solid fa-location-dot"></i>
          <li className='add3'>Murray Street, Perth</li>
          <i className="addre4 fa-solid fa-location-dot"></i>
          <li className='add4'>St Georgace Terrace, Perth</li>
        </ul>
      </div>
    </>
  );
}

export default Screen32;
