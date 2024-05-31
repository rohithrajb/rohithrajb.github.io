import React from 'react'
import Description from './Description'

const Education = () => {
   return (
      <Description sectionName={'education'} comments={7}>
         <p className='pr-3'>
            I did my BTech in Computer Science & Engineering at MIT ADT University, Pune.
            <br />
            <br />
            Graduated in May 2023 with a CGPA of 7.69.
            <br />
            <br />
            <span className='font-bold'>Coursework:</span> Data Structures, Algorithms Analysis, Object
            Oriented Programming, Database Management, Operating Systems, Computer Networks, Machine
            Learning
         </p>
      </Description>
   )
}

export default Education
