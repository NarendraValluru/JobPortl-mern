import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiBars3, HiXMark } from "react-icons/hi2";

const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen] = useState(false);
    const handleMenuToggler =() =>{
        setIsMenuOpen(!isMenuOpen)
    };
    const navItems=[
        {path: "/",title:"Start a search"},
        {path: "/my-job",title:"My Jobs"},
        {path: "salary",title:"Salary Estimate"},
        {path: "/post-job",title:"Post a Job"},
    ]
  return (
    <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        <nav className='flex justify-between items-center py-6'>
        <a href='/' className='flex items-center gap-2 text-2xl text-black'>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_4112_12807)">
            <path d="M33.7512 11.25H6.25122C5.56086 11.25 5.00122 11.8096 5.00122 12.5V32.5C5.00122 33.1904 5.56086 33.75 6.25122 33.75H33.7512C34.4416 33.75 35.0012 33.1904 35.0012 32.5V12.5C35.0012 11.8096 34.4416 11.25 33.7512 11.25Z" stroke="#0A65CC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M26.25 11.25V8.75C26.25 8.08696 25.9866 7.45107 25.5178 6.98223C25.0489 6.51339 24.413 6.25 23.75 6.25H16.25C15.587 6.25 14.9511 6.51339 14.4822 6.98223C14.0134 7.45107 13.75 8.08696 13.75 8.75V11.25" stroke="#0A65CC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M35.0013 19.7358C30.4424 22.3734 25.2669 23.7583 20 23.75C14.734 23.7583 9.55941 22.3739 5.00104 19.7371" stroke="#0A65CC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.125 18.75H21.875" stroke="#0A65CC" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_4112_12807">
            <rect width="40" height="40" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            <span>JobPortal</span>
        </a>
        <ul className='hidden md:flex gap-12'>
            {
                navItems.map(({path,title}) =>(
                    <li key={path} className='text-base text-primary'>
                        <NavLink
                    to={path}
                    className={({ isActive}) =>isActive ? "active": ""}>
                    {title}
                  </NavLink>
                    </li>
                ))
            }
        </ul>
        <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
            <Link to="/login" className='py-2 px-5 border rounded'>Log in</Link>
            <Link to="/sign-up" className='py-2 px-5 border rounded bg-blue text-white'>Sign up</Link>
        </div>
        <div  className='md:hidden block'>
            <button onClick={handleMenuToggler}>
                {
                    isMenuOpen ? <HiXMark className='w-5 h-5 text-primary' /> : <HiBars3 className='w-5 h-5 text-primary' />
                }
            </button>
        </div>
         </nav>
         <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "" : "hidden"}`}>
            <ul>
                {
                    navItems.map(({path,title}) =>(
                        <li key={path} className='text-base text-white first:text-white py-1'>
                            <NavLink
                                to={path}
                                className={({ isActive}) =>isActive ? "active": ""}>
                                {title}
                            </NavLink>
                        </li>
                    ))
                }
                <li className='text-white py-1'><Link to="/login">Log in</Link></li>
            </ul>
         </div>
    </header>
  );
}

export default Navbar;
