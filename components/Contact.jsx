'use client'
import emailjs from 'emailjs-com'
import { useForm } from "react-hook-form"
import {useState, useRef} from 'react'
const Contact = () => {
  const {register, handleSubmit, formState:{errors}, reset} = useForm()
  const formRef = useRef()
  const [status, setStatus] = useState(null)
  const onSubmit = (data) => {
   emailjs.sendForm(
    'service_l6udqpa',
    'template_se3rrgw',
    formRef.current,
    'xLcvI02xJ2CCF_-F0'
   ).then(
    (result) => {
      console.log(result.text);
      setStatus({type:'success',message:'Message sent successfully'})
      reset()
    },
    (error) => {
      console.log(error.text)
      setStatus({type:'error', message:'Failed to send message'})
    }
   )
    
  }
  return (
    <section id ='contact' className="bg-dark flex flex-col sm:pb-40 pb-40">
      <hr className="w-full text-primary shadow-2xl shadow-secondary"/>
      <h1 className="text-primary pt-6 text-center text-2xl">Contact Us</h1>
      <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="bg-primary flex flex-col w-[90%] m-auto rounded-2xl p-5 mt-30 shadow-secondary shadow-2xl sm:w-[70%] sm:py-12 md:w-[50%] md:p-10">
        <div className="flex flex-col">
          <label htmlFor="">Name</label>
          <input 
          name='name'
          placeholder="Jean Christophe"
          className="px-2 outline-light border-light border-2 rounded bg-accent text-secondary"
          {...register('name', {required:'Name is required'})}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
          <div className="flex flex-col">
          <label htmlFor="">Email</label>
          <input 
          name='email'
          placeholder="jeanchriskas@gmail.com"
          type="text" 
          className="px-2 outline-light border-light border-2 rounded bg-accent text-secondary"
          {...register('email', {
            required: 'Email is required', 
            pattern:{
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email address',
            },
          })}
          />
          
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div>
          <label>Message</label>
          <textarea name='message' placeholder="Write to us" className="bg-accent w-full mt-1 rounded p-2 h-30 md:h-50 text-secondary"
          {...register('message', {
            required:'Message is required',
            minLength:{value:10, message:'Minimum 10 characters'}
          })}></textarea>
          {errors.message && <p>{errors.message.message}</p>}
        </div>
        <button type="submit"  className="bg-accent rounded p-2 w-[40%] mx-auto text-light mt-4">Submit</button>
      </form>
    </section>
  )
  
}

export default Contact
