import React from 'react'
import './Navbar.css'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Popover } from 'flowbite-react'

const Navbar = () => {
   // TODO: checking current path to highlight about-me in navbar is imo a workaround. find a legit solution for it
   const path = useLocation().pathname
   const isCorrect =
      path == '/about-me/education' || path == '/about-me/skills' || path == '/about-me/experience'

   return (
      <nav className='flex border-b border-border text-main'>
         <Link className='px-5 py-2 border-r border-border cursor-pointer hover:text-main' to='/'>
            _rohithrajb
         </Link>
         <ul>
            <NavLink to='/'>_hello</NavLink>
            <NavLink to='/about-me/education' className={isCorrect && 'border-b-2 border-b-orange-400'}>
               _about-me
            </NavLink>
            <NavLink to='/projects'>_projects</NavLink>
            <NavLink to='/contact-me'>_contact-me</NavLink>
         </ul>

         <Popover
            aria-labelledby='default-popover'
            content={
               <div className='flex flex-col bg-gray-100 px-3 w-64 text-main'>
                  <NavLink to='/'>_hello</NavLink>
                  <NavLink to='/about-me'>_about-me</NavLink>
                  <NavLink to='/projects'>_projects</NavLink>
                  <NavLink to='/contact-me'>_contact-me</NavLink>
               </div>
            }>
            <button>
               <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='w-6 h-6 mr-3 ml-3'>
                  <path
                     strokeLinecap='round'
                     strokeLinejoin='round'
                     d='M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
                  />
               </svg>
            </button>
         </Popover>
      </nav>
   )
}

export default Navbar
