import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import img from "../Images/images/54.png";
import img1 from "../Images/images/55.png";
import img2 from "../Images/images/56.png";
import img3 from "../Images/images/57.png";
import img4 from "../Images/images/54.png";
import img5 from "../Images/images/55.png";
import "../Css/Screen23.css";

const Screen23 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='scroll23'></div>
      <nav>
        <ArrowBackIosIcon className='back' fontSize="small" onClick={() => { navigate("/S24") }}></ArrowBackIosIcon>
      </nav>
      <div>
        <p className='bug2'>Burgers</p>
        <p className='flt' onClick={() => { navigate("/S19") }}>Filter</p>
        <hr className='hr23' />
      </div>
      <div>
        <p className='wehb'>We have founds 80 results of Burger’s</p>
        <p className='seaagi' onClick={() => { navigate('/S22') }}>Search Again</p>
      </div>
      <ul>
        <img src={img} alt="img" className='img231' />
        <li className='mc23'>McDonald's</li>
        <li className='ch23'>Chinese</li>
        <li className='am23'>American</li>
      </ul>
      <ul>
        <img src={img1} alt="img" className='img232' />
        <li className='tc23'>Tacos Nanchas</li>
        <li className='ch231'>Chinese</li>
        <li className='am231'>American</li>
      </ul>
      <ul>
        <img src={img2} alt="img" className='img233' />
        <li className='mc231'>McDonald's</li>
        <li className='ch232'>Chinese</li>
        <li className='am232'>American</li>
      </ul>
      <ul>
        <img src={img3} alt="img" className='img234' />
        <li className='tc232'>Tacos Nanchas</li>
        <li className='ch233'>Chinese</li>
        <li className='am233'>American</li>
      </ul>
      <ul>
        <img src={img4} alt="img" className='img235' />
        <li className='mc232'>McDonald's</li>
        <li className='ch234'>Chinese</li>
        <li className='am234'>American</li>
      </ul>
      <ul>
        <img src={img5} alt="img" className='img236' />
        <li className='tc233'>Tacos Nanchas</li>
        <li className='ch235'>Chinese</li>
        <li className='am235'>American</li>
      </ul>
      <div className='screenbody15'></div>
    </>
  );
}

export default Screen23;
