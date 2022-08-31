import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from "../Images/images/48.png";
import img1 from "../Images/images/49.png";
import img2 from "../Images/images/50.png";
import img3 from "../Images/images/51.png";
import img4 from "../Images/images/52.png";
import img5 from "../Images/images/53.png";
import img6 from "../Images/images/48.png";
import img7 from "../Images/images/48.png";
import img8 from "../Images/images/23.png";
import "../Css/Screen21.css";

const Screen21 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='scroll21'></div>
      <div>
        <i className="glass21 fa-solid fa-magnifying-glass" onClick={() => { navigate("/S22") }}></i>
        <p className='ser'>Search</p>
        <p className='topcate'>Top Categories</p>
      </div>
      <ul>
        <img src={img} alt="img" className='fastfood' />
        <li className='fastfood1'>Fast Food</li>
      </ul>
      <ul>
        <img src={img1} alt="img1" className='breakfast' />
        <li className='breakfast1'>Breakfast & Brunch</li>
      </ul>
      <ul>
        <img src={img2} alt="img2" className='mexican' />
        <li className='mexican1'>Mexican</li>
      </ul>
      <ul>
        <img src={img3} alt="img3" className='bakery' />
        <li className='bakery1'>Bakery</li>
      </ul>
      <ul>
        <img src={img4} alt="img4" className='deserts' />
        <li className='deserts1'>Deserts</li>
      </ul>
      <ul>
        <img src={img5} alt="img5" className='burger' />
        <li className='burger1'>Burgers</li>
      </ul>
      <ul>
        <img src={img6} alt="img6" className='fast' />
        <li className='fast1'>Fast Food</li>
      </ul>
      <ul>
        <img src={img7} alt="img7" className='fastf' />
        <li className='fastf1'>Fast Food</li>
      </ul>
      <div className='menu21'>
        <i className="home21 fa-solid fa-utensils" onClick={() => { navigate("/S13") }}></i>
        <p className='home121'>Home</p>
        <i className="search21 fa-solid fa-magnifying-glass"></i>
        <p className='search121'>Search</p>
        <img src={img8} alt="img8" className='orderl21' onClick={() => { navigate("/S24") }} />
        <p className='order121'>Orders</p>
        <i className="fauser21 fa-solid fa-user" onClick={() => { navigate("/S27") }}></i>
        <p className='profile121'>Profile</p>
      </div>
    </>
  );
}

export default Screen21;
