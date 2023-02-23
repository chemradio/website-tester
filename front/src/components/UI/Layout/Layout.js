import React from 'react';
import AppToolbar from "../AppToolbar/AppToolbar";
import './layout.css';

const Layout = ({children}) => {
  return (
    <div>
      <AppToolbar/>
      <main>{children}</main>
    </div>
  );
};

export default Layout;