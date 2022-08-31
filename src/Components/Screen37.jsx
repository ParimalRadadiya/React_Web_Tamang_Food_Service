import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import img from "../Images/images/72.png";
import img2 from "../Images/images/73.png";
import img3 from "../Images/images/74.png";
import img4 from "../Images/images/75.png";
import img1 from "../Images/images/22.png";
import '../Css/Screen37.css';

const Screen37 = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='scroll37'></div>
            <nav>
                <ArrowBackIosIcon className='back' fontSize="small" onClick={() => { navigate("/S26") }}></ArrowBackIosIcon>
            </nav>
            <div>
                <p className='brfood'>Browse Foods</p>
                <ul>
                    <img src={img} alt="img" className='img371' />
                    <p className='ri37'>Rich Table</p>
                    <p className='dol37'>$$</p>
                    <li className='ch37'>Chinese</li>
                    <li className='am37'>American</li>
                    <li className='de37'>Deshi food</li>
                    <p className='fo37'>4.3</p>
                    <i className="fa-solid fa-star st37"></i>
                    <p className='rate37'>200+ Ratings</p>
                    <i className="cl37 fa-solid fa-clock"></i>
                    <p className='min37'>25 Min</p>
                    <img src={img1} alt="img" className='img372' />
                    <li className='free37'>Free</li>
                    <hr className='rihori' />
                </ul>
                <ul>
                    <img src={img2} alt="img" className='img373' />
                    <p className='ri371'>Nethai Kitchen</p>
                    <p className='dol371'>$$</p>
                    <li className='ch371'>Chinese</li>
                    <li className='am371'>American</li>
                    <li className='de371'>Deshi food</li>
                    <p className='fo371'>4.3</p>
                    <i className="fa-solid fa-star st371"></i>
                    <p className='rate371'>200+ Ratings</p>
                    <i className="cl371 fa-solid fa-clock"></i>
                    <p className='min371'>25 Min</p>
                    <img src={img1} alt="img" className='img374' />
                    <li className='free371'>Free</li>
                    <hr className='rihori1' />
                </ul>
                <ul>
                    <img src={img3} alt="img" className='img375' />
                    <p className='ri372' onClick={() => { navigate('/S15') }}>Mayfield Bakery & Cafe</p>
                    <p className='dol372'>$$</p>
                    <li className='ch372'>Chinese</li>
                    <li className='am372'>American</li>
                    <li className='de372'>Deshi food</li>
                    <p className='fo372'>4.3</p>
                    <i className="fa-solid fa-star st372"></i>
                    <p className='rate372'>200+ Ratings</p>
                    <i className="cl372 fa-solid fa-clock"></i>
                    <p className='min372'>25 Min</p>
                    <img src={img1} alt="img" className='img376' />
                    <li className='free372'>Free</li>
                    <hr className='rihori2' />
                    <img src={img4} alt="img" className='img377' />
                </ul>
            </div>
            <div className='screenbody15'></div>
        </>
    );
}

export default Screen37;
