import { ButtonHTMLAttributes, ReactNode } from 'react'

import * as C from './styled'

interface FormActionProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  conditional: string
}

const FormAction: React.FC<FormActionProps> = ({
  children,
  conditional,
  ...rest
}) => {
  return (
    <C.Action className={`submitButton ${conditional}`} {...rest}>
      {children}
    </C.Action>
  )
}

export default FormAction
