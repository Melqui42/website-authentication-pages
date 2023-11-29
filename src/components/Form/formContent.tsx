import { HTMLAttributes, ReactNode } from 'react'

import * as C from './styled'

interface FormContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const FormContent: React.FC<FormContentProps> = ({ children, ...rest }) => {
  return <C.Content {...rest}>{children}</C.Content>
}

export default FormContent
