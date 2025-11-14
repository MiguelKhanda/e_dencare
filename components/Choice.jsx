import ChoiceSlider from './ChoiceSlider'
import { choice_Data } from './db'

const Choice = () => {
  return (
    <section id='choice' className="h-screen bg-accent text-primary">
      <h1 className="text-xl text-center pt-3">Why Choose Us</h1>
      <ChoiceSlider data ={choice_Data} color = 'primary'/>
    </section>
  )
}

export default Choice
