import React from 'react'
import Navbar from '../global-components/Navbar'

const Forms = () => {
  return (
    <div>
        <Navbar/>
        <div className="drawer drawer-end">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
   
    <label htmlFor="my-drawer-4" className="drawer-button btn btn-[#ffffff]">Open drawer</label>
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">

      <li><a>Add City</a></li>
      <li><a>Add Hotels</a></li>
      <li><a>Add Activities </a></li>
    </ul>
  </div>
</div>
        
    </div>
  )
}

export default Forms