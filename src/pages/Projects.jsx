import React from 'react'
import { NavLink } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import SidebarSection from '../components/SidebarSection'
import Project from '../components/Project'
import './Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faAngular,
   faCss3,
   faHtml5,
   faJs,
   faNode,
   faNodeJs,
   faReact,
} from '@fortawesome/free-brands-svg-icons'
import projectsData from '../projects.json'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

const Projects = () => {
   const filters = [
      {
         id: 'react',
         text: 'React',
         icon: faReact,
      },
      {
         id: 'angular',
         text: 'Angular',
         icon: faAngular,
      },
      {
         id: 'node',
         text: 'NodeJS',
         icon: faNodeJs,
      },
      {
         id: 'mongo',
         text: 'MongoDB',
         icon: faDatabase,
      },
      {
         id: 'html',
         text: 'HTML',
         icon: faHtml5,
      },
      {
         id: 'css',
         text: 'CSS',
         icon: faCss3,
      },
      {
         id: 'javascript',
         text: 'Javascript',
         icon: faJs,
      },
   ]

   return (
      <div className='flex'>
         <Sidebar>
            <SidebarSection sectionName='technologies-used'>
               <div className='py-5 px-6 border-b border-border align-middle'>
                  {filters.map((filter) => (
                     <div key={filter.id} className='mb-4'>
                        <label className='align-middle cursor-pointer'>
                           <input
                              type='checkbox'
                              id={filter.id}
                              className='checkbox rounded-sm text-sm bg-transparent border-2 mr-3 hover:shadow-input'
                           />
                           <FontAwesomeIcon icon={filter.icon} className='mr-2 text-xl align-middle' />
                           {filter.text}
                        </label>
                     </div>
                  ))}
               </div>
            </SidebarSection>
         </Sidebar>
         <div className='projects-list'>
            {projectsData.map((project) => (
               <Project
                  key={project.id}
                  id={project.id}
                  name={project.name}
                  description={project.description}
                  imageId={project.imageId}
                  githubLink={project.link}
               />
            ))}
         </div>
      </div>
   )
}

export default Projects
