import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../Css/Screen22.css";

const Screen22 = () => {
   const navigate = useNavigate();
   return (
      <>
         <div>
            <i className="glass22 fa-solid fa-magnifying-glass"></i>
            <input type="text" className='in22' autoFocus />
            <p className='cancel'>Cancel</p>
            <p className='recsea'>Recent Searches</p>
            <p className='clr22'>Clear all</p>
         </div>
         <div>
            <i className="subway fa-solid fa-magnifying-glass"></i>
            <p className='suby'>Subway</p>
            <i className="burg fa-solid fa-magnifying-glass"></i>
            <p className='burge' onClick={() => navigate('/S23')}>Burgers</p>
            <i className="sand fa-solid fa-magnifying-glass"></i>
            <p className='sandw'>Sandwich</p>
            <i className="piz fa-solid fa-magnifying-glass"></i>
            <p className='pizz'>Pizza</p>
            <i className="frw fa-solid fa-magnifying-glass"></i>
            <p className='frwm'>Fried Rice with meat</p>
            <i className="bak fa-solid fa-magnifying-glass"></i>
            <p className='baker'>Bakery</p>
            <i className="cak fa-solid fa-magnifying-glass"></i>
            <p className='cake'>Cake</p>
         </div>
      </>
   );
}

export default Screen22;
