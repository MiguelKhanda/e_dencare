import Image from "next/image"
import Card from "./Card"

const Services = () => {
  return (
    <div className='h-screen bg-dark relative'>
      <h1 className="text-primary text-xl text-center pt-5">Our Services</h1>
      <div className="absolute right-0 left-0 top-1/3">
        <Card/>
      </div>
    </div>
  )
}

export default Services