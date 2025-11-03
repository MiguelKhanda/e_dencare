'use client'

import { useForm } from "react-hook-form"


const Contact = () => {
  const {register, handleSubmit, formState:{errors}} = useForm()
  return (
    <div className="mt-400 bg-dark">
      <h1 className="text-primary">Contact Us</h1>
      <form>
        <div>
          <input type="text" />
        </div>
      </form>
    </div>
  )
  
}

export default Contact
