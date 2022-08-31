import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import img from '../Images/images/30.png';
import img1 from "../Images/images/31.png";
import img2 from "../Images/images/32.png";
import img3 from "../Images/images/33.png";
import img4 from "../Images/images/34.png";
import img5 from "../Images/images/35.png";
import img6 from "../Images/images/36.png";
import img7 from "../Images/images/37.png";
import img8 from "../Images/images/38.png";
import img9 from "../Images/images/39.png";
import "../Css/Screen15.css";

const Screen15 = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='scroll15'></div>
      <nav>
        <img src={img} alt="bg" className='bg' />
        <ArrowBackIosIcon className='back15' fontSize="medium" onClick={() => { navigate("/S14") }}></ArrowBackIosIcon>
        <i className="glass15 fa-solid fa-magnifying-glass" onClick={() => { navigate("/S21") }}></i>
        <i className="share15 fa-solid fa-share-from-square"></i>
      </nav>

      <p className='mayfie'>Mayfield Bakery & <br /> Cafe</p>
      <ul>
        <li className='dol15'>$$</li>
        <li className='ch15'>Chinese</li>
        <li className='am15'>American</li>
        <li className='de15'>Deshi food</li>
      </ul>
      <div>
        <p className='for'>4.3</p>
        <StarRoundedIcon className='rt15' fontSize='small'></StarRoundedIcon>
        <p className='twohun' onClick={() => { navigate("/S39") }}>200+ Ratings</p>
        <img src={img1} alt="img" className='dolcir' />
        <p className='frd'>Free<br />Delivery</p>
        <img src={img2} alt="img" className='tim' />
        <p className='twofive'>25 <br />Minutes</p>
      </div>
      <button className='btn15'>TAKE AWAY</button>
      <p className='fei'>Featured Items</p>
      <ul>
        <img src={img3} alt="img" className='fetimg' />
        <li className='fetcook'>Cookie Sandwich</li>
        <li className='fetdol'>$$</li>
        <li className='fetchin'>Chinese</li>
      </ul>
      <ul>
        <img src={img4} alt="img" className='fetimg1' />
        <li className='fetcook1'>Chow Fun</li>
        <li className='fetdol1'>$$</li>
        <li className='fetchin1'>Chinese</li>
      </ul>
      <p className='lamb'>& Lamb <span className='span'> Appetizers D</span></p>
      <p className='seafo'>Seafood</p>
      <p className='mopo'>Most Populars</p>
      <ul>
        <img src={img5} alt="img" className='img315' onClick={() => navigate("/S16")}/>
        <li className='coos' onClick={() => navigate("/S16")}>Cookie Sandwich</li>
        <li className='short'>Shortbread, chocolate turtle cookies, and red velvet.</li>
        <li className='dol'>$$</li>
        <li className='chn'>Chinese</li>
        <li className='aud'>AUD$10</li>
        <hr className='mhori' />
      </ul>
      <ul>
        <img src={img6} alt="img" className='img3151' />
        <li className='coos1'>Combo Burger</li>
        <li className='short1'>Shortbread, chocolate turtle cookies, and red velvet.</li>
        <li className='dol1'>$$</li>
        <li className='chn1'>Chinese</li>
        <li className='aud1'>AUD$10</li>
        <hr className='mhori1' />
      </ul>
      <ul>
        <img src={img7} alt="img" className='img3152' />
        <li className='coos2'>Combo Sandwich</li>
        <li className='short2'>Shortbread, chocolate turtle cookies, and red velvet.</li>
        <li className='dol2'>$$</li>
        <li className='chn2'>Chinese</li>
        <li className='aud2'>AUD$10</li>
      </ul>
      <p className='seaf1'>Sea Foods</p>
      <ul>
        <img src={img8} alt="img" className='img3153' />
        <li className='coos3'>Oyster Dish</li>
        <li className='short3'>Shortbread, chocolate turtle cookies, and red velvet.</li>
        <li className='dol3'>$$</li>
        <li className='chn3'>Chinese</li>
        <li className='aud3'>AUD$10</li>
        <hr className='mhori3' />
      </ul>
      <ul>
        <img src={img9} alt="img" className='img3154' />
        <li className='coos4'>Oyster On Ice</li>
        <li className='short4'>Shortbread, chocolate turtle cookies, and red velvet.</li>
        <li className='dol4'>$$</li>
        <li className='chn4'>Chinese</li>
        <li className='aud4'>AUD$10</li>
      </ul>
      <div className='screenbody15'></div>
    </>
  );
}

export default Screen15;
