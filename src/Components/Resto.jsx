import React from 'react';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import img6 from "../Images/images/19.png";
import img7 from "../Images/images/22.png";
import img8 from "../Images/images/21.png";
import img9 from "../Images/images/20.png";

const Resto = () => {
    return (
        <>
            <ul>
                <img src={img6} alt="img" className='img135' />
                <p className='m35'>McDonald's</p>
                <p className='dol35'>$$</p>
                <li className='ch35'>Chinese</li>
                <li className='am35'>American</li>
                <li className='de35'>Deshi food</li>
                <p className='fo35'>4.3</p>
                <StarRoundedIcon className='st35' fontSize='small'></StarRoundedIcon>
                <p className='rate35'>200+ Ratings</p>
                <i className="cl35 fa-solid fa-clock"></i>
                <p className='min35'>25 Min</p>
                <img src={img7} alt="img" className='img136' />
                <li className='free35'>Free</li>
            </ul>
            <ul>
                <img src={img8} alt="img" className='img137' />
                <p className='m351'>Cafe Brichor’s</p>
                <p className='dol351'>$$</p>
                <li className='ch351'>Chinese</li>
                <li className='am351'>American</li>
                <li className='de351'>Deshi food</li>
                <p className='fo351'>4.3</p>
                <StarRoundedIcon className='st351' fontSize='small'></StarRoundedIcon>
                <p className='rate351'>200+ Ratings</p>
                <i className="cl351 fa-solid fa-clock"></i>
                <p className='min351'>25 Min</p>
                <img src={img7} alt="img" className='img138' />
                <li className='free351'>Free</li>
            </ul>
            <img src={img9} alt="img" className='img139' />
        </>
    )
}

export default Resto;
