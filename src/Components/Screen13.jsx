import React from 'react';
import Resto from './Resto';
import { useNavigate } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import img from "../Images/images/13.png";
import img1 from "../Images/images/14.png";
import img2 from "../Images/images/15.png";
import img3 from "../Images/images/16.png";
import img4 from "../Images/images/17.png";
import img5 from "../Images/images/18.png";
import img10 from "../Images/images/23.png";
import "../Css/Screen13.css";

const Screen13 = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='scroll13'>
                <p className='delto'>Delivery to</p>
                <p className='locname'> HayStreet, Perth</p>
                <div className='downarr'><ExpandMoreIcon onClick={() => { navigate("/S12") }}></ExpandMoreIcon></div>
                <p className='filter' onClick={() => { navigate("/S19") }}>Filter</p>
                <hr className='hr13' />
                <img src={img} alt="img" className='img131' />
                <p className='fepar'>Featured <br /> Partners</p>
                <p className='seeall' onClick={() => { navigate("/S14") }}>See all</p>
                <Resto />
                <ul>
                    <img src={img1} alt="img" className='img132' />
                    <p className='kri'>Krispy Creme</p>
                    <p className='kri1'>St Georgece Terrace, Perth</p>
                    <button className='kribtn'>4.5</button>
                    <p className='krimin'>25min</p>
                    <li className='krifree'>Free delivery</li>
                </ul>
                <ul>
                    <img src={img2} alt="img" className='img133' />
                    <p className='mar'>Mario Italiano</p>
                    <p className='mar1'>Hay street , Perth City</p>
                    <button className='marbtn'>4.5</button>
                    <p className='marmin'>25min</p>
                </ul>
                <img src={img3} alt="img" className='img134' />
                <div>
                    <p className='bepr'>Best Picks <br /> Restaurants by <br /> team</p>
                    <p className='seeal' onClick={() => { navigate("/S38") }}>See all</p>
                </div>
                <ul>
                    <img src={img4} alt="img" className='mcds135' />
                    <p className='mcds'>McDonald’s</p>
                    <p className='mcds1'>Hay street , Perth City</p>
                    <button className='mcdsbtn'>4.5</button>
                    <p className='mcdsmin'>25min</p>
                    <li className='mcdsfree'>Free delivery</li>
                </ul>
                <ul>
                    <img src={img5} alt="img" className='the135' />
                    <p className='the'>The Halal Guys</p>
                    <p className='the1'>Hay street,Perth City</p>
                    <button className='thebtn'>4.5</button>
                    <p className='themin'>25min</p>
                </ul>
                <div>
                    <p className='allre'>All Restaurants</p>
                    <p className='seal' onClick={() => { navigate("/S38") }}>See all</p>
                </div>
                <div className='menu13'>
                    <i className="home13 fa-solid fa-utensils"></i>
                    <p className='home113'>Home</p>
                    <i className="search13 fa-solid fa-magnifying-glass" onClick={() => { navigate("/S20") }}></i>
                    <p className='search113'>Search</p>
                    <img src={img10} alt="" className='orderl13' onClick={() => { navigate("/S24") }} />
                    <p className='order113'>Orders</p>
                    <i className="fauser13 fa-solid fa-user" onClick={() => { navigate("/S27") }}></i>
                    <p className='profile113'>Profile</p>
                </div>
            </div>
        </>
    );
}

export default Screen13;
