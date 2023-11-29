import { InputHTMLAttributes } from 'react'

import * as C from './styled'

type FieldInputProps = InputHTMLAttributes<HTMLInputElement>

const FieldInput: React.FC<FieldInputProps> = ({ ...rest }) => {
  return <C.Input {...rest} />
}

export default FieldInput
