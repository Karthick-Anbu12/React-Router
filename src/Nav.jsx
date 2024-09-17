import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
  <div className='container-fluid p-0'>
  <nav className="navbar navbar-expand-lg bg-body-tertiary ">
  <div className="container">
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item" >
          <Link className='link' to="/">ALL</Link>
        </li>
        <li className="nav-item">
        <Link  className='link' to="/fsd">FULL STACK DEVELOPMENT</Link>

        </li>
        <li className="nav-item">
          
        <Link className='link' to="/data">DATA SCIENCE</Link>
        </li>
        <li className="nav-item">
        <Link className='link' to="/cyber">CYBER SECURITY</Link>
        </li>
        <li className="nav-item">
        <Link className='link' to="/career">CAREER</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>
    )
}

export default Nav
