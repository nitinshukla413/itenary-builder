import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li><a>Itinerary Builder</a></li>
          <li>
            <a></a>
            <ul className="p-2">
              <li><a> 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
          <li><a>Item 3</a></li>
        </ul>
      </div>
      <a className="btn btn-ghost text-xl">Travel Tara</a>
    </div>
    <div className="navbar- hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li><a>Travel Itinerary</a></li>
        <li>
          <details>
            <summary><Link href={"/forms"}>Add + </Link></summary>
            <ul className="p-2 bg-black">
              <li><a>Cities</a></li>
              <li><a>Hotels</a></li>
              <li><a>Trips</a></li>
              <li><a>Activities</a></li>

            </ul>
          </details>
        </li>
        <li><a>Create</a></li>
      </ul>
    </div>
  </div>
  )
}

export default Navbar