import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import card from "../Images/images/40.png";
import scan from "../Images/images/41.png";
import "../Css/Screen18.css";

const Screen18 = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <ArrowBackIosIcon className='back18' fontSize="medium" onClick={() => { navigate("/S13") }}></ArrowBackIosIcon>
      </nav>
      <p className='addypm'>Add your payment methods</p>
      <p className='addypmtag'>This card will only be charged when you place an order.</p>
      <div className='inp18'>
        <input type="text" className='in18' placeholder='4242 4242 4242 4242' autoFocus />
      </div>
      <img src={card} alt="card" className='card' />
      <div className='inp181'>
        <input type="text" className='in181' placeholder='MM/YY' />
      </div>
      <div className='inp182'>
        <input type="text" className='in182' placeholder='CVC' />
      </div>
      <button className='addcard' onClick={() => { navigate("/S30") }}>Add Card</button>
      <button className='scan' onClick={() => { navigate("/S36") }}></button><span className='scard' onClick={() => { navigate("/S36") }}>Scan Card</span>
      <img src={scan} alt="" className='scanimg' onClick={() => { navigate("/S36") }}/>
    </>
  );
}

export default Screen18;
