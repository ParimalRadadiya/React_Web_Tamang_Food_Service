import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import img from "../Images/images/64.png";
import '../Css/Screen30.css';

const Screen30 = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <ArrowBackIosIcon className='back' fontSize="small" onClick={() => { navigate("/S27") }}></ArrowBackIosIcon>
      </nav>
      <div>
        <p className='payment'>Payment Methods</p>
        <img src={img} alt="img" className='cardimg' />
        <p className='dontcard'>Don’t have any card :)</p>
        <p className='itsee'>It’s seems like you have not added any credit or debit card. You may easily add card.</p>
        <button className='addcredit' onClick={() => { navigate("/S31") }}>Add credit cards</button>
      </div>
    </>
  );
}

export default Screen30;
