import React from 'react'
import "../css/comp2.css"

export default function Comp2() {
    return (
        <>
            <div className="comp2 d-flex flex-column justify-content-center align-items-center">
                <div className="comp2-top">
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="2000">
                                <img src="/porsche.png" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item " data-bs-interval="2000">
                                <img src="" class="d-block w-100" alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="/porsche.png" class="d-block w-100" alt="..."/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="comp2-bottom d-flex flex-column">
                    <div className="line1">
                        <span style={{ color: "#575349" }}>So you can</span> feel at
                    </div>
                    <div className="line2">
                        home , anywhere.
                    </div>
                </div>
            </div>
        </>
    )
}
