import React from "react";
import './button.css';

const Button=(props)=>{
    return(
        <>
            {props.btn.type==="twitter" && <button className='buttonStyle' >{props.btn.icon}</button> }
           

        </>
    )
}

export default Button;