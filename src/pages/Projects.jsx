import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import SidebarSection from '../components/SidebarSection'
import Project from '../components/Project'
import './AboutMe.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import img from '../assets/ui-animations2.png'

const Projects = () => {
   const projects = [
      {
         id: '1',
         name: '_pathfinding-algo-visualizer',
         description: 'Duis aute irure dolor in velit esse cillum dolore.'
      }
   ]

   return (
      <div className='flex'>
         <Sidebar>
            <SidebarSection sectionName='technologies-used'>
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
         <div>
            <Project projectImg={img} id={projects[0].id} name={projects[0].name} description={projects[0].description} />
         </div>

         {/* <Routes>
            <Route path='/education' element={<Education />} />
            <Route path='/skills' element={<Skills />} />
            <Route path='/experience' element={<Experience />} />
         </Routes> */}
      </div>
   )
}

export default Projects
