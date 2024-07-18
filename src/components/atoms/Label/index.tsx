import './style.scss'
import { LabelProps } from './interface'

const Label = ({ text }: LabelProps) => {
  return <p className="label">{text}</p>
}

export default Label
