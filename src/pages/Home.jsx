import React from 'react'
import bg from '../assets/background.svg'
import './Home.css'
import { Link } from 'react-router-dom'

const Home = () => {
   return (
      <>
         <img src={bg} alt='hello' className='fixed right-20 -z-10' />
         <div className='flex items-center justify-around page-height'>
            <div className='px-6'>
               <p className='text-white pl-1'>Hi, I am</p>
               <h1 className='text-6xl text-white font-normal mt-2 name'>
                  Rohith Raj <br />
                  Bingi
               </h1>
               {/* TODO: when the time is right and when i've become good at backend, change the below tag to 'Full-stack developer' */}
               <h2 className='text-3xl text-blue-600 mt-2 title'>&gt; Front-end developer</h2>
               <p className='text-main mt-10 github'>
                  // try the game out <br />
                  // you can find it my github
               </p>
               <div>
                  <span className='text-blue-600'>const </span>
                  <span className='text-green-400'>githubLink </span>
                  <span className='text-white'>= </span>
                  <Link
                     className='text-orange-400 hover:border-b border-b-orange-400'
                     to='https://github.com/rohithrajb'
                     target='_blank'>
                     "https://github.com/rohithrajb"
                  </Link>
               </div>
            </div>
            <div className='game'>
               <p className='p-40 border border-orange-400'>
                  tic tac toe <br /> under development
               </p>
            </div>
         </div>
      </>
   )
}

export default Home
