import React from 'react'
import bg from '../assets/background.svg'
import './Home.css'

const Home = () => {
   return (
      <>
         <img src={bg} alt="hello" className='fixed right-20 -z-10' />
         <div className='flex items-center justify-around page-height'>
            <div className='px-6'>
               <p className='text-white pl-1'>Hi, I am</p>
               <h1 className='text-6xl text-white font-normal mt-2 name'>Rohith Raj <br />Bingi</h1>
               <h2 className='text-3xl text-blue-600 mt-2 title'>&gt; Front-end developer</h2>
               <p className='text-main mt-10 github'>// try the game out <br />// you can find it my github</p>
               <div>
                  <span className='text-blue-600'>const </span>
                  <span className='text-green-400'>githubLink </span>
                  <span className='text-white'>= </span>
                  <a className='text-orange-400 hover:border-b border-b-orange-400' href='https://github.com/rohithrajb' target='_blank'>"https://github.com/rohithrajb"</a>
               </div>
            </div>
            <div className='game'>
               <p className='p-40 border border-orange-400'>tic tac toe <br /> under development</p>
            </div>
         </div>
      </>
   )
}

export default Home