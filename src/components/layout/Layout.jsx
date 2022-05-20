import React, { useEffect } from "react";


import './Layout.scss'
import Routes from "../Routes";
import SideBar from "../sidebar/SideBar";
import TopNav from "../topnav/TopNav";
import { BrowserRouter, Route } from "react-router-dom";

import { useSelector,useDispatch } from "react-redux";

import ThemeReducer from "../../redux/reducers/ThemeReducer";

import ThemeAction from '../../redux/actions/ThemeActions'


const Layout = () => {
  const themeReducer = useSelector(state =>state.ThemeReducer)

  const dispatch = useDispatch()

  useEffect(() =>{
    const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

  dispatch(ThemeAction.setMode(themeClass))
  dispatch(ThemeAction.setColor(colorClass))


  },[dispatch])

  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
            <SideBar {...props} />
            <div className="layout__content">
              <TopNav/>
              <div className="layout__content-main">
                <Routes />
              </div>
            </div>
          </div>
        )}
      />
    </BrowserRouter>
  );
};

export default Layout;
