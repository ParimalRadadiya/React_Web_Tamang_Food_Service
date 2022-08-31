import React from 'react';
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import img from "../Images/images/24.png";
import img1 from "../Images/images/25.png";
import img2 from "../Images/images/26.png";
import img3 from "../Images/images/27.png";
import img4 from "../Images/images/28.png";
import img5 from "../Images/images/29.png";
import img6 from "../Images/images/23.png";
import "../Css/Screen14.css";

const Screen14 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='scroll14'></div>
      <ArrowBackIosIcon className='back14' fontSize="small" onClick={() => { navigate("/S13") }}></ArrowBackIosIcon>
      <div>
        <p className='fep'>Featured Partners</p>
        <ul>
          <img src={img} alt="img" className='tcimg' />
          <li className='taco'>Tacos Nanchas</li>
          <li className='chin'>Chinese</li>
          <li className='americ'>American</li>
        </ul>
        <ul>
          <img src={img1} alt="img" className='mcimg' />
          <li className='mc14d'>McDonald's</li>
          <li className='chin14'>Chinese</li>
          <li className='americ14'>American</li>
        </ul>
        <ul>
          <img src={img2} alt="img" className='kfimg' />
          <li className='kf14'>KFC Foods</li>
          <li className='chin141'>Chinese</li>
          <li className='americ141'>American</li>
        </ul>
        <ul>
          <img src={img3} alt="img" className='caimg' onClick={() => { navigate("/S15") }}/>
          <li className='ca14' onClick={() => { navigate("/S15") }}>Cafe MayField’s</li>
          <li className='chin142'>Chinese</li>
          <li className='americ142'>American</li>
        </ul>
        <ul>
          <img src={img4} alt="img" className='caimg1' />
          <img src={img5} alt="img" className='caimg2' />
        </ul>
      </div>
      <div className='menu14'>
        <i className="home14 fa-solid fa-utensils"></i>
        <p className='home114'>Home</p>
        <i className="search14 fa-solid fa-magnifying-glass" onClick={() => { navigate("/S20") }}></i>
        <p className='search114'>Search</p>
        <img src={img6} alt="" className='orderl14' onClick={() => { navigate("/S24") }} />
        <p className='order114'>Orders</p>
        <i className="fauser14 fa-solid fa-user" onClick={() => { navigate("/S27") }}></i>
        <p className='profile114'>Profile</p>
      </div>
    </>
  );
}

export default Screen14;
