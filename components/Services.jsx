import Image from "next/image"
import Card from "./Card"

const Services = () => {
  return (
    <div className='relative'>
      <h1 className="text-center text-dark">Our Services</h1>
      <Image
        src= '/images/service-bg.jpg'
        width={1200}
        height={800}
        alt="Background"
        className="w-full absolute -z-50 object-cover top-0 inset-0 h-full"
        priority
      />
      <Card/>
    </div>
  )
}

export default Services