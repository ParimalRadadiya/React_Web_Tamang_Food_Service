import React from 'react';


const Radio = (props) => {
    return (
        <>
            <div>
                <input type="radio" name='cookie' value={props.value} className='circle' />
                <label className='lab'>{props.lab}</label>
            </div>
            <div>
                <input type="radio" name='cookie' value={props.value1} className='circle1' checked/>
                <label className='lab1'>{props.lab1}</label>
            </div>
            <div>
                <input type="radio" name='cookie' value={props.value2} className='circle2' />
                <label className='lab2'>{props.lab2}</label>
            </div>
            <div>
                <input type="radio" name='cookie' value={props.value3} className='circle3' />
                <label className='lab3'>{props.lab3}</label>
            </div>
            <div>
                <input type="radio" name='cookie' value={props.value4} className='circle4' />
                <label className='lab4'>{props.lab4}</label>
            </div>
            <div>
                <input type="radio" name='cookie' value={props.value5} className='circle5' />
                <label className='lab5'>{props.lab5}</label>
            </div>
            <div>
                <input type="radio" name='cookie' value={props.value6} className='circle6' />
                <label className='lab6'>{props.lab6}</label>
            </div>
            <div>
                <input type="radio" name='cookie' value={props.value7} className='circle7' />
                <label className='lab7'>{props.lab7}</label>
            </div>

            <div>
                <input type="radio" name='cookie' value={props.value8} className='circle8' />
                <label className='lab8'>{props.lab8}</label>
            </div>
            <div>
                <input type="radio" name='cookie' value={props.value9} className='circle9' />
                <label className='lab9'>{props.lab9}</label>
            </div>
            <div>
                <input type="radio" name='cookie' value={props.value10} className='circle10' />
                <label className='lab10'>{props.lab10}</label>
            </div>
            <div>
                <input type="radio" name='cookie' value={props.value11} className='circle11' />
                <label className='lab11'>{props.lab11}</label>
            </div>
            <div>
                <input type="radio" name='cookie' value={props.value12} className='circle12' checked />
                <label className='lab12'>{props.lab12}</label>
            </div>
            <div>
                <input type="radio" name='cookie' value={props.value13} className='circle13' />
                <label className='lab13'>{props.lab13}</label>
            </div>
            <div>
                <input type="radio" name='cookie' value={props.value14} className='circle14' />
                <label className='lab14'>{props.lab14}</label>
            </div>
            <div>
                <input type="radio" name='cookie' value={props.value15} className='circle15' />
                <label className='lab15'>{props.lab15}</label>
            </div>
        </>
    )
}

export default Radio;
