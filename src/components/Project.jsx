import React from 'react'

const Project = ({ projectImg, id, name, description }) => {
  return (
    <div className='absolute right-0'>
      <p className='text-sm'><span className='text-base text-blue-700 font-bold'>Project {id} </span>// {name}</p>
      <div className='mt-3 bg-dark max-w-96 min-w-96 rounded-2xl'>
         {/* TODO: solve the image corners issue */}
         <img src={projectImg} alt="no-img" />
         <div className='p-8'>
            <p>{description}</p>
            <button className='mt-2 px-3 py-2 bg-[#1c2b3a] rounded-md text-white text-sm'>view-project</button>
         </div>
      </div>
    </div>
  )
}

export default Project