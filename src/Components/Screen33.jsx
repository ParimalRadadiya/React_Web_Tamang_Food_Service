import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import img from "../Images/images/68.png";
import img1 from "../Images/images/69.png";
import '../Css/Screen33.css';

const Screen33 = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <ArrowBackIosIcon className='back' fontSize="small" onClick={() => { navigate("/S27") }}></ArrowBackIosIcon>
      </nav>
      <div>
        <p className='sociala'>Add Social Accounts</p>
        <p className='sociala1'>Add social accounts</p>
        <p className='addyousc'>Add your social accounts for more security. You will go directly to their site.</p>
        <button className='facebook'>Connect with Facebook</button>
        <img src={img} alt="img" className='face' />
        <button className='google'>Connect with google</button>
        <img src={img1} alt="img" className='goog' />
      </div>
    </>
  );
}

export default Screen33;
