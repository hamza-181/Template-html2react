import React from 'react'
import './navbar.css'

function Navbar(props) {
  return (
    <div className='navbar'>
         <a href="url" className="navbar-brand">
                <h1>{props.name}</h1>
            </a>
          
            <div className='linksContainer'>           
                {props.pages.map((page)=>( <a href='url'>{page}</a>))}
            </div>
        <div className='joinUsDiv'>
                    {props.button}
        </div>
    </div>

  )
}

export default Navbar
