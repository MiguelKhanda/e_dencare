import ChoiceSlider from "./ChoiceSlider"
import { service_Data } from "./db"

const Services = () => {
  return (
    <div className='h-screen bg-dark relative'>
      <h1 className="text-primary text-2xl text-center pt-5">Our Services</h1>
      <div className="text-secondary">
        <ChoiceSlider data = {service_Data}/>
      </div>
    </div>
  )
}

export default Services