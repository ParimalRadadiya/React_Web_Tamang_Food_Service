import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import SearchIcon from '@mui/icons-material/Search';
import img from "../Images/images/83.png";
import img1 from "../Images/images/84.png";
import img2 from "../Images/images/85.png";
import img3 from "../Images/images/86.png";
import img4 from "../Images/images/87.png";
import img5 from "../Images/images/88.png";
import img6 from "../Images/images/89.png";
import img7 from "../Images/images/90.png";
import img8 from "../Images/images/91.png";
import img9 from "../Images/images/92.png";
import '../Css/Screen39.css';

const Screen39 = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='scroll39'></div>
            <div>
                <img src={img} alt="img" className='bg39' />
            </div>
            <nav>
                <div className='lesscircle39'></div>
                <ArrowBackIosIcon className='lessthb38' fontSize="small" onClick={() => { navigate("/S15") }}></ArrowBackIosIcon>
                <div className='searchcircle39'></div>
                <SearchIcon className='search39' fontSize='small' onClick={() => { navigate('/S20') }}></SearchIcon>
                <i className="loc39 fa-solid fa-location-dot"></i>
                <p className='hay39'>Hay Street , Perth</p>
                <hr className='hori39' />
            </nav>
            <div>
                <h2 className='rate39'>Ratings & Reviews</h2>
                <p className='see39'>See all</p>
            </div>
            <div>
                <img src={img1} alt="img" className='img391' />
                <p className='susie'>Susie Bridges</p>
                <button className='ratebtn'>5.0</button>
                <p className='grefood'>Great food I like this place, I think best place of Colarodo. Chilling with Friends :)</p>
                <div>
                    <img src={img2} alt="img" className='img392' />
                    <img src={img3} alt="img" className='img393' />
                    <img src={img4} alt="img" className='img394' />
                    <img src={img5} alt="img" className='img395' />
                    <img src={img6} alt="img" className='img396' /> <p className='plusfo'>+4</p>
                </div>
            </div>
            <div>
                <img src={img7} alt="img" className='img397' />
                <p className='rodney'>Rodney Miller</p>
                <button className='ratebtn1'>4.8</button>
                <p className='oneofthe'>One of the best and so much good food corner in Colarodo. Specially the burger, Lemonade.</p>
            </div>
            <div>
                <img src={img8} alt="img" className='img398' />
                <p className='larry'>Larry Bowers</p>
                <button className='ratebtn2'>5.0</button>
                <p className='greatfood'>Great food I like this place, I think best place of Colarodo. Chilling with Friends :)</p>
                <div className='ratingimg2'>
                    <img src={img2} alt="img" className='img392' />
                    <img src={img3} alt="img" className='img393' />
                    <img src={img4} alt="img" className='img394' />
                    <img src={img5} alt="img" className='img395' />
                    <img src={img6} alt="img" className='img396' /> <p className='plusfo'>+4</p>
                </div>
                <button className='browsebtn' onClick={() => { navigate('/S37') }}>Browse food</button>
                <button className='shrebrowse'></button><img src={img9} alt="img" className='img399' />
            </div>
            <div className='screenbody15'></div>
        </>
    );
}

export default Screen39;
