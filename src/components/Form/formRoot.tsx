import { HTMLAttributes, ReactNode } from 'react'

import * as C from './styled'

interface FormRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const FormRoot: React.FC<FormRootProps> = ({ children, ...rest }) => {
  return <C.Root {...rest}>{children}</C.Root>
}

export default FormRoot
