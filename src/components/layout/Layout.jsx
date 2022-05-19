import React from "react";


import './Layout.scss'
import Routes from "../Routes";
import SideBar from "../sidebar/SideBar";
import TopNav from "../topnav/TopNav";
import { BrowserRouter, Route } from "react-router-dom";

const Layout = () => {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div className="layout">
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
