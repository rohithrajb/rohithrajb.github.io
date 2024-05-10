import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import SidebarSection from '../components/SidebarSection'
import './AboutMe.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import Experience from '../components/about-me/Experience'
import Skills from '../components/about-me/Skills'
import Education from '../components/about-me/Education'

const AboutMe = () => {
   return (
      <div className='flex'>
         <Sidebar>
            <SidebarSection sectionName='about-me'>
               <div className='p-2 text-sm border-b border-border nav-active'>
                  <NavLink className='details cursor-pointer' to='/about-me/education'>
                     <FontAwesomeIcon icon={faFolder} className='text-orange-400' />
                     <p className='ml-2'>education</p>
                  </NavLink>
                  <NavLink className='mt-2 details cursor-pointer' to='/about-me/skills'>
                     <FontAwesomeIcon icon={faFolder} className='text-green-400' />
                     <p className='ml-2'>skills</p>
                  </NavLink>
                  <NavLink className='mt-2 details cursor-pointer' to='/about-me/experience'>
                     <FontAwesomeIcon icon={faFolder} className='text-teal-400' />
                     <p className='ml-2'>experience</p>
                  </NavLink>
               </div>
            </SidebarSection>
         </Sidebar>
         <Routes>
            <Route path='/education' element={<Education />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/experience' element={<Experience />} />
         </Routes>
      </div>
   )
}

export default AboutMe
