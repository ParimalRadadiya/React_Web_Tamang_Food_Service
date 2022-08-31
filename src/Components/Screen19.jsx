import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import "../Css/Screen19.css";

const Screen19 = () => {
    const navigate = useNavigate();
    return (
        <>
            <nav>
                <ArrowBackIosIcon className='back' fontSize="small" onClick={() => { navigate("/S13") }}></ArrowBackIosIcon>
            </nav>
            <div>
                <p className='filt'>Filters</p>
                <p className='categ'>Categories</p>
                <p className='clear'>Clear all</p>
                <button className='all'>All</button>
                <button className='brunch'>Brunch</button>
                <button className='dinner'>Dinner</button>
                <button className='bu19'>Burgers</button>
                <button className='chis'>Chinese</button>
                <button className='pizza'>Pizza</button>
                <button className='salad'>Salads</button>
                <button className='soup'>Soups</button>
                <button className='br19'>Breakfast</button>
            </div>
            <div>
                <p className='dietary'>Dietary</p>
                <p className='clal'>Clear all</p>
                <button className='any'>any</button>
                <button className='veg'>Vegetarian</button>
                <button className='vegan'>Vegan</button>
                <button className='gluten'>Gluten-Free</button>
            </div>
            <div>
                <p className='prirang'>price range</p>
                <p className='clrall'>Clear all</p>
                <button className='ondol'>$</button>
                <button className='twodol'>$$</button>
                <button className='thredol'>$$$</button>
                <button className='fordol'>$$$$</button>
            </div>
            <button className='applyfilt' onClick={() => { navigate('/S20') }}>Apply filters</button>
        </>
    );
}

export default Screen19;
