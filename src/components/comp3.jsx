import React from 'react'
import "../css/comp3.css"

export default function Comp3() {
  return (
    <>
    <div className="comp3 d-flex">
        <div className="comp3-left d-flex flex-column justify-content-center align-items-center">
            <div className="ongrid-head">
                On grid
            </div>
            <div className="ongrid-body mx-5">
            Scape to the great outdoors for up to 7 days completely off-grid. Say goodbye to generators and propane tanks.
            </div>
        </div>
        <div className="comp3-right d-flex flex-column justify-content-center align-items-center">
            <div className="offgrid-head">
                Off grid
            </div>
            <div className="offgrid-body mx-5">
            Scape to the great outdoors for up to 7 days completely off-grid. Say goodbye to generators and propane tanks.
            </div>
        </div>
    </div>
    </>
  )
}
