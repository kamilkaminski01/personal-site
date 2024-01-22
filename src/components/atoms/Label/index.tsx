import './style.scss'
import { LabelProps } from './interface.ts'

const Label = ({ text }: LabelProps) => {
  return <p className="label">{text}</p>
}

export default Label
