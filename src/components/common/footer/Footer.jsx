import React from 'react'
import { CiLocationOn,CiMail,CiTwitter } from 'react-icons/ci';
import { AiFillPhone } from "react-icons/ai";
import Info from './Info';
import Button from './Button';
import './footer.css'

function Footer(props) {
  
  return (
    <div className='footerContainer'>
      
        <div className='getInTouchHolder'>
          <h2>{props.footerParts.map((name)=>( <p>{name}</p>))}</h2>
            <Info icon= {< CiLocationOn />} text='123 Street, New York, USA'/>
            <Info icon={<AiFillPhone/>} text='+012 345 67890'/>
            <Info icon={<CiMail/>} text='info@example.com'/>
            <Button btn={{type:"twitter",icon:<CiTwitter />}} />
        </div>

        <div></div>

        <div></div>

        <div></div>

        <div></div>



    </div>
  )
}

export default Footer
