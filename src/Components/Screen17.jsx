import React from 'react';
import Order from './Order';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import "../Css/Screen17.css";

const Screen17 = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav>
        <CloseIcon className='back' fontSize='small' onClick={() => { navigate("/S16") }}></CloseIcon>
      </nav>
      <Order />
      <button className='conti' onClick={() => { navigate("/S18") }}>Continue (AUD $30)</button>
    </>
  );
}

export default Screen17;
