import { React } from 'react'

const Sidebar = ({ children }) => {
   return (
      <div className='flex flex-col w-72 border-r border-border'>
         {children}
      </div>
   )
}

export default Sidebar
