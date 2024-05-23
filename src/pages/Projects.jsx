import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import SidebarSection from '../components/SidebarSection'
import Project from '../components/Project'
import './Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
import projects from '../projects.json'
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
         id: 'express',
         text: 'Express',
         icon: faNodeJs,
      },
   ]

   const [selectedFilters, setSelectedFilters] = useState([])
   const [filteredProjects, setFilteredProjects] = useState(projects)

   const handleFilterClick = (clickedFilter) => {
      if (selectedFilters.includes(clickedFilter.text)) {
         // below line basically removes the clickedFilter from selectedFilters
         let newFilters = selectedFilters.filter((e) => e !== clickedFilter.text)
         setSelectedFilters(newFilters)
      } else {
         setSelectedFilters([...selectedFilters, clickedFilter.text])
      }
   }

   useEffect(() => {
      filterProjects()
   }, [selectedFilters])

   const filterProjects = () => {
      if (selectedFilters.length > 0) {
         // let tempProjects = selectedFilters.map((eachFilter) => {
         //    let temp = projects.filter((project) => project.tech.includes(eachFilter))
         //    return temp
         // })
         let tempProjects = []
         selectedFilters.map((eachFilter) => {
            let temp = projects.filter(
               (project) => !tempProjects.flat().includes(project) && project.tech.includes(eachFilter)
            )
            tempProjects.push(temp)
         })
         setFilteredProjects(tempProjects.flat())
      } else {
         setFilteredProjects([...projects])
      }
   }

   return (
      <div className='flex'>
         <Sidebar>
            <SidebarSection sectionName='technologies-used'>
               <div className='py-5 px-6 border-b border-border align-middle'>
                  {filters.map((filter) => (
                     <div
                        key={filter.id}
                        className={`mb-4 cursor-pointer ${
                           selectedFilters.includes(filter.text) ? 'filter-active' : ''
                        }`}
                        onClick={() => handleFilterClick(filter)}>
                        {/* TODO: removing the radio button is only a temporary solution. solve it later */}
                        {/* <label className='align-middle cursor-pointer'>
                           <input
                              type='checkbox'
                              id={filter.id}
                              className='checkbox rounded-sm text-sm bg-transparent border-2 mr-3 hover:shadow-input'
                           /> */}
                        <FontAwesomeIcon icon={filter.icon} className='mr-2 text-xl align-middle' />
                        {filter.text}
                        {/* </label> */}
                     </div>
                  ))}
               </div>
            </SidebarSection>
         </Sidebar>
         <div className='projects-list'>
            {filteredProjects.map((project) => (
               <Project key={project.id} project={project} />
            ))}
         </div>
      </div>
   )
}

export default Projects
