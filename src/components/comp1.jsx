import React, { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../css/comp1.css"
import "../css/comp2.css"
import "../css/comp3.css"
import "../css/comp4.css"
import "../css/navbar.css"

gsap.registerPlugin(ScrollTrigger)


export default function Comp1() {

    const animationRef1 = useRef(null)
    const [image, setImage] = useState("/img1.png")
    const [Opacity2, setOpacity2] = useState("#57534948")
    const [Opacity3, setOpacity3] = useState("#57534948")
    const [flag , setFlag] = useState(false)

    useEffect(() => {

        const timeline = gsap.timeline({
            paused: true,
            onComplete: () => {
                ScrollTrigger.update();
                document.body.style.overflow = "auto"
            }
        });

        timeline.to('.main-img', {
            transformOrigin: 'bottom center',
            y: "5%",
            x: "-6%",
            transform: 'scale(0.6)',
            duration: 0.8
        }, 0);

        timeline.to('.intro-text', {
            opacity: 1,
            y: 0,
            duration: 0.8
        }, 0);

        timeline.to('.c1-bg', {
            transform: 'scale(1)',
            duration: 0.8
        }, 0);

        timeline.to('.peb-bg1', {
            duration: 0.8,
            y: 0,
        }, 0);

        timeline.to('.lake', {
            duration: 0.8,
            y: "-27%",
            scale:1
        }, 0);

        ScrollTrigger.create({
            trigger: ".comp2",
            start: "top bottom",
            scrub: 1,
            onEnter: () => {
                timeline.play();
                ScrollTrigger.update();
                document.body.style.overflow = "hidden"
            },
            onLeaveBack: () => {
                timeline.reverse()
            }
        });

        animationRef1.current = timeline;
    }, []);

    useEffect(() => {
        const timer1 = setTimeout(() => {
            setImage("/img2.png");
            setOpacity2("#575349");
        }, 2500);

        const timer2 = setTimeout(() => {
            setImage("/img3.png");
            setOpacity3("#575349");
        }, 5000);


        const timer3 = setTimeout(() => {
            setImage("/img1.png");
            setOpacity3("#57534948");
            setOpacity2("#57534948");
            setFlag(!flag)
        }, 7500);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        };

    }, [flag]);


    const animationRef2 = useRef(null);
    const animationRef3 = useRef(null);
    useEffect(() => {
        const tl1 = gsap.timeline({
            paused: true,
            onComplete: () => {
                ScrollTrigger.update();
                document.body.style.overflow = "auto";
            }
        });

        const tl2 = gsap.timeline({
            paused: true,
            onComplete: () => {
                ScrollTrigger.update();
                document.body.style.overflow = "auto";
            }
        });

        tl1.to('.grid-off', {
            width: "65vw",
            duration: 1
        }, 0);

        tl1.to('.grid-on', {
            width: "35vw",
            duration: 1
        }, 0);

        tl2.to('.grid-off', {
            width: "35vw",
            duration: 1
        }, 0);

        tl2.to('.grid-on', {
            width: "65vw",
            duration: 1
        }, 0);

        ScrollTrigger.create({
            trigger: ".comp3",
            start: "top top",
            scrub: 1,
            onEnter: () => {
                tl1.play();
                ScrollTrigger.update();
                document.body.style.overflow = "hidden";
                setFlag(true)
            },
            onLeaveBack: () => {
                if (tl2.progress() > 0) {
                    tl2.eventCallback("onReverseComplete", () => {
                        tl1.reverse();
                    setFlag(false)
                    });
                    tl2.reverse();
                } else {
                    tl1.reverse();
                    setFlag(false)
                }
            }
        });

        ScrollTrigger.create({
            trigger: ".comp4",
            start: "top 99%",
            scrub: 1,
            onEnter: () => {
                if(!flag){
                    tl1.play()
                    setFlag(true)
                }
                tl2.play();
                ScrollTrigger.update();
                document.body.style.overflow = "hidden";
            },
            onLeaveBack: () => {
                tl2.reverse()
            }
        });

        animationRef3.current = tl2;
        animationRef2.current = tl1;
    }, []);

    useEffect(() => {

        let t2 = gsap.timeline()

        t2.to(".peb-vid", {
            scrollTrigger: {
                trigger: ".comp4",
                start: "top 1%",
                end: "top 1%",
                scrub: .7,
            },
            width: "100vw",
            duration: .8
        })

        gsap.to(".l1", {
            scrollTrigger: {
                trigger: ".comp4",
                start: "top center",
                end: "top 20%",
                scrub: .7,
            },
            marginTop:0,
            duration:.8
        })

    }, [])

    return (
        <>
            <div className="comp1">

                <div className="peb d-flex flex-column position-relative">
                    <div className="peb-bg1 position-absolute">
                        <img className='c1-bg ' src="/forrest1.png" alt="" />
                        <img className='lake' src="/lake.png" alt="" />
                    </div>
                    {/* <div className="peb-bg2 position-absolute ">
                        <img className='lake' src="/lake.png" alt="" />
                    </div> */}
                    <div className="peb-top pe-5 position-relative d-flex flex-column justify-content-center align-items-center">
                        <div className="meet intro-text pt-4 ">
                            meet
                        </div>
                        <div className="pebble intro-text">
                            pebble
                        </div>
                    </div>
                    <div className="peb-bottom position-absolute d-flex">
                        <img className='main-img' src="/pebble.png" alt="pebble" />
                    </div>
                    <div className="peb-bg3 position-absolute d-flex flex-column">
                        <img className='tree' src="/tree1.png" alt="" />
                    </div>

                </div>

                <div className="comp2 d-flex flex-column justify-content-center align-items-center">
                    <div className="comp2-top d-flex justify-content-center align-items-center">
                        <img style={{ transition: "0.3s ease" }} src={image} alt="" />
                    </div>
                    <div className="comp2-bottom d-flex flex-column">
                        <div className="line1">
                            <span className='span1' style={{ color: "#575349" }}>So you can</span>
                            <span className='span2' style={{ color: Opacity2, transition: "0.3s ease" }}> feel at</span>
                        </div>
                        <div className="line2">
                            <span className='span2' style={{ color: Opacity2, transition: "0.3s ease" }}> home </span>
                            <span className='span3' style={{ color: Opacity3, transition: "0.3s ease" }}>, anywhere.</span>
                        </div>
                    </div>
                </div>

                <div className="comp3 d-flex position-relative">

                    <div className="comp3-bg position-absolute d-flex justify-content-center align-items-center ">
                        <div className="grid-on grid d-flex justify-content-start">
                            <img className='' src="/ongrid.jpg" alt="" />
                        </div>
                        <div className="grid-off grid d-flex justify-content-end">
                            <img src="/offgrid.jpg" alt="" />
                        </div>
                    </div>

                    <div className="comp3-top d-flex ">
                        <div className="comp3-left pt-5 grid-text d-flex flex-column justify-content-start align-items-center">
                            <div className="ongrid-head pt-5">
                                On grid
                            </div>
                            <div className="ongrid-body mx-5 px-5">
                                Scape to the great outdoors for up to 7 days completely off-grid. Say goodbye to generators and propane tanks.
                            </div>
                        </div>
                        <div className="comp3-right pt-5 grid-text d-flex flex-column justify-content-start align-items-center">
                            <div className="offgrid-head pt-5">
                                Off grid
                            </div>
                            <div className="offgrid-body mx-5 px-5">
                                Scape to the great outdoors for up to 7 days completely off-grid. Say goodbye to generators and propane tanks.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="comp4 py-5 d-flex flex-column justify-content-center align-items-center">
                    <div className="l1 item">
                        <img src="/l1.png" alt="" />
                    </div>
                    <div className="l2 item py-5">
                        <video autoPlay muted className='peb-vid' src="/vid.mp4"></video>
                    </div>
                    <div className="l3 item">
                        <img className='last-item' src="/l3.png" alt="" />
                    </div>
                </div>

            </div>

        </>
    )
}
