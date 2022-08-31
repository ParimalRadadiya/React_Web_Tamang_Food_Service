import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from "../Images/images/9.png";
import img1 from "../Images/images/10.png";

const Connectfb = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <button className='facebook5' onClick={() => { navigate("/S33") }}>{props.button}</button>
                <img src={img} alt="img" className='face5' />
                <button className='google5'>{props.google}</button>
                <img src={img1} alt="img" className='goog5' />
            </div>
        </>
    )
}

export default Connectfb;
