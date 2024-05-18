import React from 'react'
import { AdvancedImage } from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'
import { fill } from '@cloudinary/url-gen/actions/resize'
import { Link } from 'react-router-dom'

const Project = ({ id, name, description, imageId, githubLink }) => {
   const cld = new Cloudinary({
      cloud: {
         cloudName: 'dbgqgm4bm',
      },
   })

   const myImage = cld.image(imageId)

   myImage.resize(fill().width(384).height(216))

   return (
      <div>
         <p className='text-sm'>
            <span className='text-base text-blue-700 font-bold'>Project {id} </span>// {name}
         </p>
         <div className='mt-3 bg-dark max-w-96 min-w-96 rounded-2xl'>
            <AdvancedImage cldImg={myImage} className='rounded-t-2xl' />
            <div className='py-6 px-8'>
               <p className='mb-4'>{description}</p>
               <Link to={githubLink} target='_blank' className='px-3 py-2 bg-[#1c2b3a] hover:bg-[#263b50] rounded-md text-white text-sm '>
                  view-project
               </Link>
            </div>
         </div>
      </div>
   )
}

export default Project
