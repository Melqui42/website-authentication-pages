import { ButtonHTMLAttributes, ReactNode } from 'react'

import * as C from './styled'

interface FormActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const FormAction: React.FC<FormActionProps> = ({ children, ...rest }) => {
  return <C.Action {...rest}>{children}</C.Action>
}

export default FormAction
