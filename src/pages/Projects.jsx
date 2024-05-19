import React, { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar'
import SidebarSection from '../components/SidebarSection'
import Project from '../components/Project'
import './Projects.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngular, faCss3, faHtml5, faJs, faNodeJs, faReact } from '@fortawesome/free-brands-svg-icons'
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
         // console.log(filteredProjects)
         let tempProjects = selectedFilters.map((eachFilter) => {
            let temp = projects.filter((project) => project.tech.includes(eachFilter))
            console.log(temp)
            return temp
         })
         // removeDuplicates(tempProjects.flat())
         setFilteredProjects(tempProjects.flat())
      }
   }

   // so we got a lil diverted from out goal. we were adding all the projects into the filteredProjects list which were matching atleast 1 filter. that's not cool at all. we should display projects which match all the selected filters.

   // TODO: complete the removeDuplicates function
   const removeDuplicates = (nums) => {}

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
