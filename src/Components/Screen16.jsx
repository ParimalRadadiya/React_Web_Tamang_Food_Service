import React, { useState } from 'react';
import Radio from './Radio';
import { useNavigate } from 'react-router-dom';
import CancelIcon from '@mui/icons-material/Cancel';
import img from "../Images/images/30.png";
import "../Css/Screen16.css";

const Screen16 = () => {
  const [num, setNum] = useState(1);
  const incNum = () => {
    setNum(num + 1);
  }
  const decNum = () => {
    setNum(num - 1);
  }
  const navigate = useNavigate();
  return (
    <>
      <div className='scroll16'></div>
      <nav>
        <img src={img} alt="bg" className='bgs' />
        <CancelIcon className='xmark' fontSize='large' onClick={() => { navigate("/S15") }}></CancelIcon>
      </nav>
      <p className='cooksan'>Cookie Sandwich</p>
      <p className='shct'>Shortbread, chocolate turtle cookies, and red <br /> velvet. 8 ounces cream cheese, softened.</p>
      <ul className='ul16'>
        <li className='dol15'>$$</li>
        <li className='ch15'>Chinese</li>
        <li className='am15'>American</li>
        <li className='de15'>Deshi food</li>
      </ul>
      <p className='chtc'>Choice of top Cookie</p>
      <button className='btn167'>REQUIRED</button>
      <form>
        <Radio value='choc' lab='Chocolate Chip' /><hr className='hori' />
        <Radio value1='cook' lab1='Cookies and Cream' /><hr className='hori1' />
        <Radio value2='fun' lab2='Funfetti' /><hr className='hori2' />
        <Radio value3='mm' lab3='M and M' /><hr className='hori3' />
        <Radio value4='red' lab4='Red Velvet' /><hr className='hori4' />
        <Radio value5='pean' lab5='Peanut Butter' /><hr className='hori56' />
        <Radio value6='sni' lab6='Snickerdoodle' /><hr className='hori66' />
        <Radio value7='whi' lab7='White Chocolate Macadamia' /><hr className='hori67' />
      </form>
      <p className='cobc'>Choice of Bottom Cookie</p>
      <button className='btn168'>REQUIRED</button>
      <form>
        <Radio value8='chock' lab8='Chocolate Chip' /><hr className='hori8' />
        <Radio value9='chocl' lab9='Chocolate Chip' /><hr className='hori9' />
        <Radio value10='funt' lab10='Funfetti' /><hr className='hori10' />
        <Radio value11='mam' lab11='M and M' /><hr className='hori11' />
        <Radio value12='redv' lab12='Red Velvet' /><hr className='hori12' />
        <Radio value13='pebutt' lab13='Peanut Butter' /><hr className='hori13' />
        <Radio value14='snick' lab14='Snickerdoodle' /><hr className='hori14' />
        <Radio value15='whichm' lab15='White Chocolate Macadamia' /><hr className='hori15' />
        <p className='addspi'>Add Special Instructions</p>
        <i className="right fa-solid fa-angle-right"></i>
        <hr className='hori16' />
      </form>
      <h1 className='nu'>{num}</h1>
      <button onClick={incNum} className='inc'>+</button>
      <button onClick={decNum} className='dec' >-</button>
      <button className='order' onClick={() => { navigate("/S17") }}>Add to Order ($11.98)</button>
      <div className='screenbody15'></div>
    </>
  );
}

export default Screen16;
