import React from 'react';

const Order = (props) => {
    return (
        <>
            <div>
                <p className='yoor'>Your Orders</p>
                <div className='ract'></div><span className='recton'>1</span>
                <p className='csw'>Cookie Sandwich</p>
                <p className='shtag'>Shortbread, chocolate turtle cookies, and red velvet.</p>
                <p className='audp'>AUD$10</p> <hr className='audh' />
                <div className='ract1'></div><span className='recton1'>1</span>
                <p className='csw1'>Combo Burger</p>
                <p className='shtag1'>Shortbread, chocolate turtle cookies, and red velvet.</p>
                <p className='audp1'>AUD$10</p> <hr className='audh1' />
                <div className='ract2'></div><span className='recton2'>2</span>
                <p className='csw2'>Oyster Dish</p>
                <p className='shtag2'>Shortbread, chocolate turtle cookies, and red velvet.</p>
                <p className='audp2'>AUD$10</p> <hr className='audh2' />
                <p className='sub'>Subtotal <br /> Delivery</p>
                <p className='audtot'>AUD$30 <br /> $0</p>
                <p className='audto'>AUD$30</p>
                <p className='total25'>{props.total}</p>
            </div>
            <div>
                <p className='addmit'>Add more items</p>
                <i className="addmmi fa-solid fa-angle-right"></i>
                <hr className='addhori' />
                <p className='promo17'>Promo code</p>
                <i className="promo1 fa-solid fa-angle-right"></i>
                <hr className='promohori' />
            </div>
        </>
    )
}

export default Order;
