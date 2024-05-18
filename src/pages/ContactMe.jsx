import { React, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faLink } from '@fortawesome/free-solid-svg-icons'
import './ContactMe.css'
import emailjs from '@emailjs/browser'
import Sidebar from '../components/Sidebar'
import SidebarSection from '../components/SidebarSection'
import { Link } from 'react-router-dom'

const ContactMe = () => {
   const form = useRef()

   const socials = [
      ['github-profile', 'github.com/rohithrajb'],
      ['linkedin-profile', 'www.linkedin.com/in/rohith-raj-bingi-92b91a11a/'],
      ['leetcode-profile', 'leetcode.com/u/rohithrajb/'],
   ]

   // emailJs
   const sendMail = (e) => {
      e.preventDefault()

      emailjs
         .sendForm('service_nk3fnk4', 'template_thcnjhb', form.current, {
            publicKey: '5zIux2TVHAlabReWW',
         })
         .then(
            () => {
               console.log('SUCCESS!')
            },
            (error) => {
               console.log('FAILED...', error.text)
            }
         )
   }

   return (
      <div className='flex'>
         <Sidebar>
            <SidebarSection sectionName='contacts'>
               <div className='p-2 text-sm border-b border-border'>
                  <Link to='mailto:rohithrajb@gmail.com' className='details'>
                     <FontAwesomeIcon icon={faEnvelope} />
                     <p className='ml-2'>rohithrajb@gmail.com</p>
                  </Link>
                  <Link to='tel:7032531747' className='mt-1 details'>
                     <FontAwesomeIcon icon={faPhone} />
                     <p className='ml-2'>+91 7032531747</p>
                  </Link>
               </div>
            </SidebarSection>
            <SidebarSection sectionName='find-me-on'>
               <div className='p-2 border-b border-border'>
                  {socials.map((social, i) => (
                     <Link
                        key={i}
                        to={'https://' + social[1]}
                        target='_blank'
                        className='details text-sm mb-1'>
                        <FontAwesomeIcon icon={faLink} className='text-xs' />
                        <p className='ml-2'>{social[0]}</p>
                     </Link>
                  ))}
               </div>
            </SidebarSection>
         </Sidebar>
         <form ref={form} className='page-height p-14' onSubmit={sendMail}>
            <div>
               <label htmlFor='name'>_your-name:</label>
               <input type='text' name='from_name' id='name' required />
            </div>
            <div>
               <label htmlFor='email'>_your-email:</label>
               <input type='email' name='from_email' id='email' required />
            </div>
            <div>
               <label htmlFor='message'>_message:</label>
               <textarea
                  name='message'
                  id='message'
                  rows={7}
                  cols={40}
                  required></textarea>
            </div>
            <button type='submit'>send-message</button>
         </form>
      </div>
   )
}

export default ContactMe
