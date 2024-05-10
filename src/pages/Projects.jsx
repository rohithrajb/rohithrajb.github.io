import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import SidebarSection from '../components/SidebarSection'
import './AboutMe.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'

const Projects = () => {
   return (
      <div className='flex'>
         <Sidebar>
            <SidebarSection sectionName='about-me'>
               <div className='p-2 text-sm border-b border-border nav-active'>
                  <NavLink className='details cursor-pointer' to='/pprojects/react'>
                     <FontAwesomeIcon icon={faReact} className='text-orange-400' />
                     <p className='ml-2'>ReactJS</p>
                  </NavLink>
                  <NavLink className='mt-2 details cursor-pointer' to='/about-me/skills'>
                     <FontAwesomeIcon icon={faReact} className='text-green-400' />
                     <p className='ml-2'>skills</p>
                  </NavLink>
                  <NavLink className='mt-2 details cursor-pointer' to='/about-me/experience'>
                     <FontAwesomeIcon icon={faReact} className='text-teal-400' />
                     <p className='ml-2'>experience</p>
                  </NavLink>
               </div>
            </SidebarSection>
         </Sidebar>
         {/* <Routes>
            <Route path='/education' element={<Education />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/experience' element={<Experience />} />
         </Routes> */}
      </div>
   )
}

export default Projects
