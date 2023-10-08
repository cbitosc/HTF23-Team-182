import React from 'react'
import Navibar from './navbar/NavigationBar';
import Footer from './footer/Footer';
import { Outlet } from "react-router-dom";
import Home from './home/Home';
function Rootlayout() {
  return(
<div>
      <div >
        <Navibar />
        </div>
      <div>
        <Outlet/>
      </div>
    </div>
  )
}

export default Rootlayout