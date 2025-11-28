import { choice_Data } from './db'
import OneSlider from './OneSlider'

const Choice = () => {
  return (
    <section id='choice' className="h-screen bg-dark text-primary">
      <hr className='w-screen border-primary'/>
      <h1 className="text-xl text-center pt-3">Why Choose Us</h1>
      <OneSlider data ={choice_Data} color = 'primary'/>
    </section>
  )
}

export default Choice
