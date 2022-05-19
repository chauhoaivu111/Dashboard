import React from 'react'
import './TopNav.scss'
import DropDown from '../dropdown/DropDown'
import { Link } from 'react-router-dom'

import notifications from '../../assets/JsonData/notification.json';
import user_image from '../../assets/images/HV.jpg';
import user_menu from '../../assets/JsonData/user_menus.json';




const curr_user ={
  display_name:"Hoai Vu",
  image: user_image

}

const renderNotificationsItem = (item,index) =>(
  <div className='notification-item' key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>


  </div>
)

const renderUserToggle =(user) =>(

  <div className='topnav__right-user'>
    <div className="topnav__right-user__image">
      <img src ={user.image} alt=''/>

    </div>
    <div className="topnav__right-user__name">
      {user.display_name}
    </div>

  </div>
)


const renderUserMenu = (item,index) => (
  <Link className='notification-item' key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>

  </Link>
)

const TopNav = () => {
  return (
    <div className='topnav'>
      <div className='topnav__search'>
        <input type="text" placeholder='search here..' />
        <i className='bx bx-search'></i>

      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
        <DropDown
         customToggle={() => renderUserToggle(curr_user)}

        contentData={user_menu}
         renderItems={(item,index) => renderUserMenu(item,index)}
          

          
          />
         
         
        </div>
        <div className="topnav__right-item">
          <DropDown
          icon='bx bx-bell'
          badge='12'
           contentData={notifications}
           renderItems ={(item,index) => renderNotificationsItem(item,index)}
           renderFooter = {()=> ( 

            <Link to='/'> View All</Link>
           )}

          
          />
         
          
        </div>
        <div className="topnav__right-item">
          {/* theme setting */}
          
         
        </div>

      </div>

        
      
    </div>
  )
}

export default TopNav
