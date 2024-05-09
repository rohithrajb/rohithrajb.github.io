import { React, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons'

const SidebarSection = ({ children, sectionName }) => {
   const [sectionOpen, setSectionOpen] = useState(true)

   return (
      <>
         <div className='flex flex-col text-white transition duration-300 hover:text-green-300'>
            <div
               className='flex p-2 items-center border-b border-border cursor-pointer'
               onClick={() => setSectionOpen((sectionOpen) => !sectionOpen)}>
               {sectionOpen ? (
                  <FontAwesomeIcon icon={faCaretDown} className='text-sm' />
               ) : (
                  <FontAwesomeIcon icon={faCaretRight} className='text-sm' />
               )}
               <p className='ml-3'>{sectionName}</p>
            </div>
         </div>
         {sectionOpen && <>{children}</>}
      </>
   )
}

export default SidebarSection
