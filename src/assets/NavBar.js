import React, { useState,useEffect } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import logo from '../assets/tripma_logo.svg';

const NavBar = () => {

    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav);
    }

    const [scrolled, setScrolled] = useState("");

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled({scrolled});
            } else {
                setScrolled("");
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, [])
    return (
        <nav className={scrolled? 'flex justify-between items-center h-24 mx-auto px-16 text-white fixed-navbar scrolled':'flex justify-between items-center h-24 mx-auto px-16 text-white fixed-navbar '}>
            <img src={logo} alt="Logo"/>
            <ul className='hidden md:flex'>
                <li className='p-4 hover:text-[#000df9a]'>Home</li>
                <li className='p-4 hover:text-[#000df9a]'>Company</li>
                <li className='p-4 hover:text-[#000df9a]'>Resources</li>
                <li className='p-4 hover:text-[#000df9a]'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden'>
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}

            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
                <ul className='p-4 uppercase'>
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>Company</li>
                    <li className='p-4 border-b border-gray-600'>Resources</li>
                    <li className='p-4 border-b border-gray-600'>About</li>
                    <li className='p-4'>Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;