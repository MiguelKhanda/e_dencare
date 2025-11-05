import Image from "next/image"
import Card from "./Card"

const Services = () => {
  return (
    <div className='h-screen bg-dark relative'>
      <h1 className="text-primary text-2xl text-center pt-5">Our Services</h1>
      <div className="">
        <Card/>
      </div>
    </div>
  )
}

export default Services