import React from 'react';

const Emailpass = () => {
    function myfunction() {
        var x = document.getElementById('myinput');
        var y = document.getElementById('eyehide');
        var z = document.getElementById('eyepass');

        if (x.type === 'password') {
            x.type = 'text';
            y.style.display = 'block';
            z.style.display = 'none';
        } else {
            x.type = 'password';
            y.style.display = 'none';
            z.style.display = 'block';
        }
    }
    return (
        <>
            <div className='form5'>
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1" className='emaillab'>EMAIL ADDRESS</label>
                        <div className='checkemail'>
                            <i className="fa-solid fa-check"></i>
                        </div>
                        <input type="text" className='in5' autoFocus />
                    </div>
                    <hr className='hr5' /><br />
                    <div className="form-group">
                        <label for="exampleInputPassword1" className='paas' >PASSWORD</label>
                        <input type="password" className='in51' id='myinput' />
                        <div onClick={myfunction}>
                            <div id='eyehide'><i className="fa-solid fa-eye"></i></div>
                            <div id='eyepass'><i className="fa-solid fa-eye-slash"></i></div>
                        </div>
                        <hr className='hp5' />
                    </div>
                </form>
            </div>
        </>
    )
}

export default Emailpass;
