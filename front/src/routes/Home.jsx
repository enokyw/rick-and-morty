import { NavContent } from "../components/navbar/NavBar";

import { Outlet } from "react-router-dom";


export function Home () {
  
  return (
    <div className='App' style={{ padding: '90px 25px 25px 25px' }}>
      <NavContent /> {/*  this contained searchbar */}

      <div>
        <Outlet/>
      </div>
    </div>
  )
}