import React from 'react'
import './info.css'

function Info(props) {
  return (
    <div className='infosContainer'>
      {props.icon}
      <div>{props.text}</div>
    </div>
  )
}

export default Info
