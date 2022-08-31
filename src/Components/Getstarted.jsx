import React from 'react';
import logo from '../Images/images/1.png';

const Getstarted = (props) => {
    return (
        <>
            <div className='hero'>
                <img src={logo} alt="logo" className='logo' />
                <h1 className='tamang'>Tamang</h1>
                <br /><h1>FoodService</h1>
            </div>
            <h1 className='titlew'>{props.name}</h1>
            <h1 className='titlea'>{props.name1}</h1>
            <h1 className='title'>{props.name2}</h1>
            <h1 className='title4'>{props.name3}</h1>
            <div className='para'>{props.para}</div>
        </>
    )
}

export default Getstarted;
