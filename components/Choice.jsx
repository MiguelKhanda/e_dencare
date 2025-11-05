import ChoiceSlider from './ChoiceSlider'
import { choice_Data } from './db'

const Choice = () => {
  return (
    <div className="h-screen bg-accent text-primary">
      <h1 className="text-xl text-center pt-3">Why Choose Us</h1>
      <ChoiceSlider data ={choice_Data} color = 'primary'/>
    </div>
  )
}

export default Choice
