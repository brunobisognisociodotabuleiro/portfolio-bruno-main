import { PropsInput } from './types';

const Input: React.FC<PropsInput> = ({
  className, placeholder,id,name
}: PropsInput) => {
  return(
    <input 
      type = "text"
      id={id}
      className = {className}
      placeholder = {placeholder}
      name={name}
    />
  )
}

export default Input;