import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { BiSearchAlt2 } from "react-icons/bi";
import { HiOutlineUser } from "react-icons/hi";
import { CiBookmarkCheck } from "react-icons/ci";

import laysbg from "../../src/assets/laysbg.png";
import chip from "../../src/assets/chip.png";
import logo from "../../src/assets/logo.png";
import chip1 from "../../src/assets/chip1.png";
import chip2 from "../../src/assets/chip2.png";
import chip3 from "../../src/assets/chip3.png";
import chip4 from "../../src/assets/chip4.png";
import "./Navbar.css";

const Navbar = () => {
    const backgroundRef = useRef(null);
    const chipRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        // Set the initial position and opacity of the background
        gsap.set(backgroundRef.current, { x: '-100%', opacity: 0 });

        // Set the initial size of the chip
        gsap.set(chipRef.current, { scale: 0 });

        // Animate both the background and chip simultaneously
        tl.to([backgroundRef.current, chipRef.current], {
            x: '0%',
            opacity: 1,
            scale: 1,
            duration: 3,
            ease: 'power3.out',
        });


    }, []);

    return (
        <div className='flex p-0 m-0'>
            <div
                className='main flex bg-dark-brown'
                style={{
                    backgroundImage: `url(${laysbg})`,
                }}
                ref={backgroundRef} // Reference to the background div
            >
                <div>
                    <img src={logo} width={"100px"} height={"100px"} />
                </div>
                <div className='flex h-16 items-center links '>
                    <BiSearchAlt2 className='text-xl m-2' />
                    <HiOutlineUser className='text-xl m-2' />
                    <CiBookmarkCheck className='text-xl m-2' />
                </div>
            </div>
            <div className='main2'>
                {/* Your content inside main2 */}
                <div>
                    <div className='main2_1 '>
                        <img src={chip1} alt="" width={"150px"} />
                        <img src={chip2} alt="" width={"150px"} />
                        <img src={chip3} alt="" width={"150px"} />
                        <img src={chip4} alt="" width={"150px"} />
                    </div>
                </div>
            </div>
            <div className='chip' ref={chipRef}>
                <img src={chip} alt="" width={"250px"} />
            </div>

        </div>
    );
};

export default Navbar;
