import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../Images/images/42.png';
import img1 from '../Images/images/43.png';
import img2 from '../Images/images/44.png';
import img3 from '../Images/images/45.png';
import img4 from '../Images/images/46.png';
import img5 from '../Images/images/47.png';
import img6 from '../Images/images/23.png';
import "../Css/Screen20.css";

const Screen20 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='scroll20'></div>
      <p className='serch'>Search</p>
      <div className='seafood'>
        <input type="text" className='in20' autoFocus />
      </div>
      <i className="glass fa-solid fa-magnifying-glass" onClick={() => { navigate("/S21") }}></i>
      <p className='topres'>Top Restaurants</p>
      <ul>
        <img src={img} alt="img" className='halal' />
        <li className='li1'>The Halal Guys</li>
        <li className='li2'>$$</li>
        <li className='li3'>Chinese</li>
      </ul>
      <ul>
        <img src={img1} alt="img1" className='pope' />
        <li className='li4'>Popeyes 1426 Flmst</li>
        <li className='li5'>$$</li>
        <li className='li6'>Chinese</li>
      </ul>
      <ul>
        <img src={img2} alt="img2" className='mixt' />
        <li className='li7'>Mixt - Yerba Buena</li>
        <li className='li8'>$$</li>
        <li className='li9'>Chinese</li>
      </ul>
      <ul>
        <img src={img3} alt="img3" className='split' />
        <li className='li10'>Split Bread - Russian</li>
        <li className='li11'>$$</li>
        <li className='li12'>Chinese</li>
      </ul>
      <ul>
        <img src={img4} alt="img4" className='img20p' />
        <img src={img5} alt="img5" className='img20c' />
      </ul>
      <div className='menu20'>
        <i className="home20 fa-solid fa-utensils" onClick={() => { navigate("/S13") }}></i>
        <p className='home120'>Home</p>
        <i className="search20 fa-solid fa-magnifying-glass"></i>
        <p className='search120'>Search</p>
        <img src={img6} alt="" className='orderl20' onClick={() => { navigate("/S24") }} />
        <p className='order120'>Orders</p>
        <i className="fauser20 fa-solid fa-user" onClick={() => { navigate("/S27") }}></i>
        <p className='profile120'>Profile</p>
      </div>
    </>
  );
}

export default Screen20;
