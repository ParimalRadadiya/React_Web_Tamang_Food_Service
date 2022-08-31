import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import img from '../Images/images/63.png';
import img1 from '../Images/images/23.png';
import '../Css/Screen27.css';

const Screen27 = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='scroll27'></div>
            <div className='screen27'>
                <p className='account'>Account Settings</p>
                <p className='update'>Update your settings like notifications, payments, profile edit etc.</p>
                <div>
                    <i className="user fa-solid fa-user"></i>
                    <p className='profile'>Profile Information</p>
                    <p className='change' onClick={() => { navigate('/S28') }} >Change your account information</p>
                    <ArrowForwardIosIcon className='gt' fontSize='small'></ArrowForwardIosIcon>
                    <hr className='userl' />
                </div>
                <div>
                    <i className="password fa-solid fa-lock"></i>
                    <p className='pass'>Change Password</p>
                    <p className='changep' onClick={() => { navigate('/S29') }}>Change your password</p>
                    <ArrowForwardIosIcon className='gt1' fontSize='small'></ArrowForwardIosIcon>
                    <hr className='userl1' />
                </div>
                <div>
                    <i className="card27 fa-solid fa-credit-card"></i>
                    <p className='paymeth' onClick={() => { navigate('/S30') }}>Payment Methods</p>
                    <p className='carddeb' onClick={() => { navigate('/S31') }}>Add your credit & debit cards</p>
                    <ArrowForwardIosIcon className='gt2' fontSize='small'></ArrowForwardIosIcon>
                    <hr className='userl2' />
                </div>
                <div>
                    <i className="loc27 fa-solid fa-location-dot"></i>
                    <p className='locs'>Locations</p>
                    <p className='addord' onClick={() => { navigate('/S32') }}>Add or remove your delivery locations</p>
                    <ArrowForwardIosIcon className='gt3' fontSize='small'></ArrowForwardIosIcon>
                    <hr className='userl3' />
                </div>
                <div>
                    <i className="faceb fa-brands fa-facebook-f"></i>
                    <p className='addsoc'>Add Social Account</p>
                    <p className='addface' onClick={() => { navigate('/S33') }}>Add Facebook, Twitter etc </p>
                    <ArrowForwardIosIcon className='gt4' fontSize='small'></ArrowForwardIosIcon>
                    <hr className='userl4' />
                </div>
                <div>
                    <i className="share fa-solid fa-share-from-square"></i>
                    <p className='refer'>Refer to Friends</p>
                    <p className='getrefer' onClick={() => { navigate('/S34') }}>Get $10 for reffering friends</p>
                    <ArrowForwardIosIcon className='gt5' fontSize='small'></ArrowForwardIosIcon>
                    <hr className='userl5' />
                </div>
            </div>
            <div className='noti278'>
                <p className='notif'>Notifications</p>
                <div>
                    <i className="bell fa-solid fa-bell"></i>
                    <p className='push'>Push Notifications</p>
                    <p className='dailyup'>For daily update you will get it</p>
                    <div className='swi1'>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <hr className='userl6' />
                </div>
                <div>
                    <i className="bell1 fa-solid fa-bell"></i>
                    <p className='sms'>SMS Notifications</p>
                    <p className='dailyup1'>For daily update you will get it</p>
                    <div className='swi2'>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <hr className='userl7' />
                </div>
                <div>
                    <i className="bell2 fa-solid fa-bell"></i>
                    <p className='prom'>Promotional Notifications</p>
                    <p className='dailyup2'>For daily update you will get it</p>
                    <div className='swi3'>
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="slider round"></span>
                        </label>
                    </div>
                    <hr className='userl8' />
                </div>
            </div>
            <div className='more278'>
                <p className='more'>MORE</p>
                <div>
                    <i className="star27 fa-solid fa-star"></i>
                    <p className='rate'>Rate Us</p>
                    <p className='rateus'>Rate us playstore, appstor</p>
                    <ArrowForwardIosIcon className='gt6' fontSize='small'></ArrowForwardIosIcon>
                    <hr className='userl9' />
                </div>
                <div>
                    <img src={img} alt="img" className='faq' />
                    <p className='faq1'>FAQ</p>
                    <p className='freq'>Frequently asked questions</p>
                    <ArrowForwardIosIcon className='gt7' fontSize='small'></ArrowForwardIosIcon>
                    <hr className='userl10' />
                </div>
                <div>
                    <i className="log fa-solid fa-right-from-bracket"></i>
                    <p className='logout' onClick={() => { navigate('/S5') }}>Logout</p>
                    <ArrowForwardIosIcon className='gt8' fontSize='small'></ArrowForwardIosIcon>
                </div>
                <div className='menu27'>
                    <i className="home27 fa-solid fa-utensils" onClick={() => { navigate('/S13') }}></i>
                    <p className='home127'>Home</p>
                    <i className="search27 fa-solid fa-magnifying-glass" onClick={() => { navigate('/S20') }}></i>
                    <p className='search127'>Search</p>
                    <img src={img1} alt="" className='orderl27' onClick={() => { navigate('/S24') }} />
                    <p className='order127'>Orders</p>
                    <i className="fauser27 fa-solid fa-user"></i>
                    <p className='profile127'>Profile</p>
                </div>
            </div>

        </>
    );
}

export default Screen27;
