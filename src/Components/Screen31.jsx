import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import img from "../Images/images/65.png";
import img1 from "../Images/images/66.png";
import img2 from "../Images/images/67.png";
import '../Css/Screen31.css';

const Screen31 = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <ArrowBackIosIcon className='back' fontSize="small" onClick={() => { navigate("/S27") }}></ArrowBackIosIcon>
      </nav>
      <div>
        <p className='payment1'>Payment Methods</p>
        <ul>
          <img src={img} alt="img" className='paypal' />
          <li className='pay'>PayPal</li>
          <li className='defau'>Deafult Payment</li>
          <ArrowForwardIosIcon className='ang' fontSize='small'></ArrowForwardIosIcon>
          <hr className='payline' />
        </ul>
        <ul>
          <img src={img1} alt="img" className='mastercard' />
          <li className='mas'>MasterCard</li>
          <li className='defau1'>Not Deafult</li>
          <ArrowForwardIosIcon className='ang1' fontSize='small'></ArrowForwardIosIcon>
          <hr className='masline' />
        </ul>
        <ul>
          <img src={img2} alt="img" className='visa' />
          <li className='vis'>Visa</li>
          <li className='defau2'>Not Deafult</li>
          <ArrowForwardIosIcon className='ang2' fontSize='small'></ArrowForwardIosIcon>
          <hr className='visaline' />
        </ul>
      </div>
    </>
  );
}

export default Screen31;
