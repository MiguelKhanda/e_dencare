'use client'

import { useForm } from "react-hook-form"


const Contact = () => {
  const {register, handleSubmit, formState:{errors}} = useForm()
  const onSubmit = (data) => {
    console.log(data);
    
  }
  return (
    <div className="mt-100 bg-dark h-screen">
      <h1 className="text-primary pt-6 text-center">Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-primary flex flex-col w-[80%] mx-auto rounded-2xl p-5 mt-30 shadow-secondary shadow-2xl">
        <div className="flex flex-col">
          <label htmlFor="">Name</label>
          <input 
          className="outline-light border-light border-2 rounded bg-accent text-secondary"
          {...register('name', {required:'Name is required'})}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
          <div className="flex flex-col">
          <label htmlFor="">Email</label>
          <input 
          type="text" 
          className="outline-light border-light border-2 rounded bg-accent text-secondary"
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
          <textarea className="bg-accent text-light w-full mt-6 rounded p-6 h-30"
          {...register('message', {
            required:'Message is required',
            minLength:{value:10, message:'Minimum 10 characters'}
          })}></textarea>
          {errors.message && <p>{errors.message.message}</p>}
        </div>
        <button type="submit"  className="bg-accent rounded p-2 w-[40%] mx-auto text-light mt-4">Submit</button>
      </form>
    </div>
  )
  
}

export default Contact
