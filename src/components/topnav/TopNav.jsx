import React from 'react'
import './TopNav.scss'
import DropDown from '../dropdown/DropDown'
const TopNav = () => {
  return (
    <div className='topnav'>
      <div className='topnav__search'>
        <input type="text" placeholder='search here..' />
        <i className='bx bx-search'></i>

      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          {/* dropdown here */}
          fsf
        </div>
        <div className="topnav__right-item">
          {/* dropdown here */}
          sfsf
        </div>
        <div className="topnav__right-item">
          {/* theme setting */}
          fsf
        </div>

      </div>

        
      
    </div>
  )
}

export default TopNav
