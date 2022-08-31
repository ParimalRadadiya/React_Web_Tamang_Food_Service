import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../Images/images/58.png';
import img1 from '../Images/images/59.png';
import img2 from '../Images/images/60.png';
import img3 from '../Images/images/61.png';
import img4 from '../Images/images/62.png';
import "../Css/Screen24.css";

const Screen24 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='scroll20'></div>
      <div>
        <p className='youord'>Your Orders</p>
        <p className='uporder'>Upcoming orders</p>
        <p className='clr245'>Clear all</p>
      </div>
      <ul>
        <img src={img} alt="img" className='mc24' />
        <li className='mcname'>McDonald's</li>
        <li className='mctag'>Shortbread, chocolate turtle cookies, and red velvet.</li>
        <li className='mcdol'>$$</li>
        <li className='mcchi'>Chinese</li>
        <li className='mcaud'>AUD$10</li>
      </ul>
      <ul>
        <img src={img1} alt="img" className='uc24' />
        <li className='ucname'>Uncle Boy's</li>
        <li className='uctag'>Shortbread, chocolate turtle cookies, and red velvet.</li>
        <li className='ucdol'>$$</li>
        <li className='ucchi'>Chinese</li>
        <li className='ucaud'>AUD$10</li>
      </ul>
      <ul>
        <img src={img2} alt="img" className='th24' />
        <li className='thname'>The Halal Guys</li>
        <li className='thtag'>Shortbread, chocolate turtle cookies, and red velvet.</li>
        <li className='thdol'>$$</li>
        <li className='thchi'>Chinese</li>
        <li className='thaud'>AUD$10</li>
      </ul>
      <div>
        <p className='propay' onClick={() => { navigate('/S25') }}>Proceed Payment</p>
        <p className='pastod'>Past orders</p>
        <p className='clr24'>Clear all</p>
      </div>
      <ul>
        <img src={img3} alt="img" className='ca24' />
        <li className='caname'>Cafe Brichor's</li>
        <li className='catag'>Shortbread, chocolate turtle cookies, and red velvet.</li>
        <li className='cadol'>$$</li>
        <li className='cachi'>Chinese</li>
        <li className='caaud'>AUD$10</li>
      </ul>
      <div className='menu24'>
        <i className="home24 fa-solid fa-utensils" onClick={() => { navigate("/S13") }}></i>
        <p className='home124'>Home</p>
        <i className="search24 fa-solid fa-magnifying-glass" onClick={() => { navigate("/S20") }}></i>
        <p className='search241'>Search</p>
        <img src={img4} alt="img" className='orderl24' />
        <p className='order241'>Orders</p>
        <i className="fauser24 fa-solid fa-user" onClick={() => { navigate("/S27") }}></i>
        <p className='profile124'>Profile</p>
      </div>
    </>
  );
}

export default Screen24;
