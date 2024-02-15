import React from 'react'
import "../css/navbar.css"

export default function Navbar() {
  return (
    <>
      <div className='navbar d-flex justify-content-between p-4'>
        <div className="nav nav-left d-flex justify-content-center align-items-center p-3">
          <img src="/Traced.png" alt="" />
        </div>
        <div className="nav nav-right d-flex justify-content-center align-items-center">
          <div className="nav-item p-4">
            <i class="fa-solid fa-bars"></i>
          </div>
          <div className="nav-item preorder p-4">
            PREORDER
          </div>
        </div>
      </div>
    </>
  )
}
