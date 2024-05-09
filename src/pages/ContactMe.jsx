import { React, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
   faCaretDown,
   faCaretRight,
   faEnvelope,
   faPhone,
   faLink,
} from '@fortawesome/free-solid-svg-icons'
import './ContactMe.css'
import emailjs from '@emailjs/browser'

const ContactMe = () => {
   const form = useRef()

   const [contactsOpen, setContactsOpen] = useState(true)
   const [socialsOpen, setSocialsOpen] = useState(true)

   const socials = [
      ['github-profile', 'github.com/rohithrajb'],
      ['linkedin-profile', 'www.linkedin.com/in/rohith-raj-bingi-92b91a11a/'],
      ['leetcode-profile', 'leetcode.com/u/rohithrajb/'],
   ]

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
         <div className='flex flex-col w-72'>
            <div className='flex flex-col text-white transition duration-300 hover:text-green-300'>
               <div
                  className='flex p-2 items-center border-b border-border cursor-pointer'
                  onClick={() => setContactsOpen((contactsOpen) => !contactsOpen)}>
                  {contactsOpen ? (
                     <FontAwesomeIcon icon={faCaretDown} className='text-sm' />
                  ) : (
                     <FontAwesomeIcon icon={faCaretRight} className='text-sm' />
                  )}
                  <p className='ml-3'>contacts</p>
               </div>
            </div>
            {contactsOpen && (
               <div className='p-2 text-sm border-b border-border'>
                  <a href='mailto:rohithrajb@gmail.com' className='details'>
                     <FontAwesomeIcon icon={faEnvelope} />
                     <p className='ml-2'>rohithrajb@gmail.com</p>
                  </a>
                  <a href='tel:7032531747' className='mt-1 details'>
                     <FontAwesomeIcon icon={faPhone} />
                     <p className='ml-2'>+91 7032531747</p>
                  </a>
               </div>
            )}
            <div className='flex flex-col text-white transition duration-300 hover:text-green-300'>
               <div
                  className='flex p-2 items-center border-b border-border cursor-pointer'
                  onClick={() => setSocialsOpen((socialsOpen) => !socialsOpen)}>
                  {socialsOpen ? (
                     <FontAwesomeIcon icon={faCaretDown} className='text-sm' />
                  ) : (
                     <FontAwesomeIcon icon={faCaretRight} className='text-sm' />
                  )}
                  <p className='ml-3'>find-me-on</p>
               </div>
            </div>
            {socialsOpen && (
               <div className='p-2 border-b border-border'>
                  {socials.map((social, i) => (
                     <a
                        key={i}
                        href={'https://' + social[1]}
                        target='_blank'
                        className='details text-sm mb-1'>
                        <FontAwesomeIcon icon={faLink} className='text-xs' />
                        <p className='ml-2'>{social[0]}</p>
                     </a>
                  ))}
               </div>
            )}
         </div>
         <form
            ref={form}
            className='border-l border-border page-height p-14'
            onSubmit={sendMail}>
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
               <textarea name='message' id='message' rows={7} cols={40} required></textarea>
            </div>
            <button type='submit'>send-message</button>
         </form>
      </div>
   )
}

export default ContactMe
