import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../Css/Screen26.css';

const Screen26 = () => {
    const navigate = useNavigate();
    return (
        <>
            <nav>
                <ArrowBackIosIcon className='back' fontSize="small" onClick={() => { navigate("/S27") }}></ArrowBackIosIcon>
            </nav>
            <div>
                <p className='mcd26'>McDonald's</p>
                <div className='ract26'></div><span className='recton26'>1</span>
                <p className='csw26'>Cookie Sandwich</p>
                <p className='shtag26'>Shortbread, chocolate turtle cookies, and red velvet.</p>
                <p className='audp26'>AUD$10</p> <hr className='audh26' />
                <div className='ract126'></div><span className='recton266'>1</span>
                <p className='csw126'>Combo Burger</p>
                <p className='shtag126'>Shortbread, chocolate turtle cookies, and red velvet.</p>
                <p className='audp126'>AUD$10</p> <hr className='audh126' />
                <div className='ract226'></div><span className='recton226'>2</span>
                <p className='csw226'>Oyster Dish</p>
                <p className='shtag226'>Shortbread, chocolate turtle cookies, and red velvet.</p>
                <p className='audp226'>AUD$10</p> <hr className='audh226' />
            </div>
            <div className='cont'>
                <button className='btn26'></button><i className="checkbt fa-solid fa-check"></i>
                <p className='youpl'>You Place the Order Successfully</p>
                <p className='pltag'>You placed the order successfully. You will get your food within 25 minutes. Thanks for using our services. Enjoy your food :)</p>
                <p className='keepbr' onClick={() => { navigate('/S37') }}>Keep Browsing</p>
            </div>
        </>
    );
}

export default Screen26;

