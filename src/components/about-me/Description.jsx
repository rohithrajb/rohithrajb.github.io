import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faCommentDots, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

const Description = ({ children, sectionName }) => {
   const [detailsOpen, setDetailsOpen] = useState(false)

   return (
      <div className='page-height flex w-full'>
         <div className='w-1/2 border-r border-border'>
            <div className='flex border-b border-border'>
               <div className='flex items-center border-r border-border p-2'>
                  <p className='ml-3 mr-2'>{sectionName}</p>
                  <FontAwesomeIcon icon={faClose} className='mr-2 text-sm' />
               </div>
            </div>
            <div className='grid grid-cols-12 pt-3'>
               <div className='text-center'>
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                  <div>8</div>
                  <div>9</div>
                  <div>10</div>
                  <div>11</div>
                  <div>12</div>
                  <div>13</div>
                  <div>14</div>
                  <div>15</div>
                  <div>16</div>
                  <div>17</div>
                  <div>18</div>
                  <div>19</div>
                  <div>20</div>
               </div>
               <div className='text-center text-green-500 '>
                  <div>/**</div>
                  <div>*</div>
                  <div>*</div>
                  <div>*</div>
                  <div>*</div>
                  <div>*</div>
                  <div>*</div>
                  <div>*</div>
                  <div>**/</div>
               </div>
               <div className='col-span-10 text-green-500 '>{children}</div>
            </div>
         </div>
         <div className='w-1/2 py-4 px-6 overflow-y-scroll'>
            <p>// Code snippet showcase:</p>
            <div className='mt-8 text-sm'>
               <div className='flex'>
                  <img
                     src='https://github.com/rohithrajb.png'
                     alt=''
                     width={40}
                     className='rounded-full'
                  />
                  <div className='ml-3 w-full'>
                     <div className='flex justify-between'>
                        <Link
                           to={'https://github.com/rohithrajb'}
                           target='_blank'
                           className='text-blue-500 font-bold cursor-pointer hover:text-blue-400 '>
                           @rohithrajb
                        </Link>
                        <div className='flex items-center'>
                           <FontAwesomeIcon icon={faCommentDots} />
                           <p
                              className='ml-2 hover:text-white cursor-pointer'
                              onClick={() => setDetailsOpen((detailsOpen) => !detailsOpen)}>
                              details
                           </p>
                           <FontAwesomeIcon icon={faStar} className='ml-3' />
                           <div className='ml-2 hover:text-white cursor-pointer'>stars</div>
                        </div>
                     </div>
                     <p>Created 4 months ago</p>
                  </div>
               </div>
               <pre className='mt-3 border border-border bg-dark rounded-xl p-4 overflow-x-scroll max-h-52'>
                  <code>
                     {`if (selectedFilters.length > 0) {
   let tempProjects = []
   selectedFilters.map((eachFilter) => {
      let temp = projects.filter(
         (project) => !tempProjects.flat().includes(project) 
         && project.tech.includes(eachFilter)
      )
      tempProjects.push(temp)
   })
   setFilteredProjects(tempProjects.flat())
}
else {
   setFilteredProjects([...projects])
}`}
                  </code>
               </pre>
               {detailsOpen && (
                  <div className='mt-3 pt-3 border-t border-border'>
                     <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                  </div>
               )}
               <div className='flex mt-8'>
                  <img
                     src='https://github.com/rohithrajb.png'
                     alt=''
                     width={40}
                     className='rounded-full'
                  />
                  <div className='ml-3 w-full'>
                     <div className='flex justify-between'>
                        <Link
                           to={'https://github.com/rohithrajb'}
                           target='_blank'
                           className='text-blue-500 font-bold cursor-pointer hover:text-blue-400'>
                           @rohithrajb
                        </Link>
                        <div className='flex items-center'>
                           <FontAwesomeIcon icon={faCommentDots} />
                           <p className='ml-2 hover:text-white cursor-pointer'>details</p>
                           <FontAwesomeIcon icon={faStar} className='ml-3' />
                           <div className='ml-2 hover:text-white cursor-pointer'>stars</div>
                        </div>
                     </div>
                     <p>Created 4 months ago</p>
                  </div>
               </div>
               <pre className='mt-3 border border-border bg-dark rounded-xl p-4 overflow-x-scroll max-h-52'>
                  <code>
                     {`if (selectedFilters.length > 0) {
   let tempProjects = []
   selectedFilters.map((eachFilter) => {
      let temp = projects.filter(
         (project) => !tempProjects.flat().includes(project) 
         && project.tech.includes(eachFilter)
      )
      tempProjects.push(temp)
   })
   setFilteredProjects(tempProjects.flat())
}
else {
   setFilteredProjects([...projects])
}`}
                  </code>
               </pre>
            </div>
         </div>
      </div>
   )
}

export default Description
