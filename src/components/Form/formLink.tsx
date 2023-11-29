import { HTMLAttributes, ReactNode } from 'react'

import * as C from './styled'

interface FormLinkProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const FormLink: React.FC<FormLinkProps> = ({ children, ...rest }) => {
  return <C.Link {...rest}>{children}</C.Link>
}

export default FormLink
