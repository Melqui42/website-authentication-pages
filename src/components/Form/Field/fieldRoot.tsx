'use client'

import { HTMLAttributes, ReactNode } from 'react'

import * as C from './styled'

interface FieldRootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

const FieldRoot: React.FC<FieldRootProps> = ({ children, ...rest }) => {
  return <C.Root {...rest}>{children}</C.Root>
}

export default FieldRoot
