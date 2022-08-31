import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SearchIcon from '@mui/icons-material/Search';
import img from "../Images/images/76.png";
import img1 from "../Images/images/77.png";
import img2 from "../Images/images/78.png";
import img3 from "../Images/images/79.png";
import img4 from "../Images/images/80.png";
import img5 from "../Images/images/81.png";
import img6 from "../Images/images/82.png";
import '../Css/Screen38.css';

const Screen38 = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='scroll38'></div>
            <div>
                <img src={img} alt="img" className='bg38' />
            </div>
            <nav>
                <div className='lesscircle'></div>
                <ArrowBackIosIcon className='lessthb38' fontSize="small" onClick={() => { navigate("/S13") }}></ArrowBackIosIcon>
                <div className='searchcircle'></div>
                <SearchIcon className='search39' fontSize='small' onClick={() => { navigate('/S20') }}></SearchIcon>
            </nav>
            <div className='tpbg'>
                <div className='slide'></div>
                <p className='topresto'>Top Pick Restaurants</p>
                <button className='bug38'></button><span className='spbug'>Burgers</span>
                <button className='bru38'></button><span className='spbru'>Brunch</span>
                <button className='bre38'></button><span className='spbre'>Breakfast</span>
                <hr className='hori38' />
                <ul>
                    <img src={img1} alt="img" className='img381' />
                    <p className='neth'>Nethai Kitchen</p>
                    <p className='ch38'>Chinese</p>
                    <li className='am38'>American</li>
                </ul>
                <ul>
                    <img src={img2} alt="img" className='img382' />
                    <p className='lazy'>Lazy Bear</p>
                    <p className='ch381'>Chinese</p>
                    <li className='am381'>American</li>
                </ul>
                <ul>
                    <img src={img3} alt="img" className='img383' />
                    <p className='state'>State Bird</p>
                    <p className='ch382'>Chinese</p>
                    <li className='am382'>American</li>
                </ul>
                <ul>
                    <img src={img4} alt="img" className='img384' />
                    <p className='petit'>Petit Creen</p>
                    <p className='ch383'>Chinese</p>
                    <li className='am383'>American</li>
                </ul>
                <ul>
                    <img src={img5} alt="img" className='img385' />
                    <p className='richtable'>Rich Table</p>
                    <p className='ch384'>Chinese</p>
                    <li className='am384'>American</li>
                </ul>
                <ul>
                    <img src={img6} alt="img" className='img386' />
                    <p className='cotogna'>Cotogna</p>
                    <p className='ch385'>Chinese</p>
                    <li className='am385'>American</li>
                </ul>
            </div>
            <div className='screenbody15'></div>
        </>
    );
}

export default Screen38;
