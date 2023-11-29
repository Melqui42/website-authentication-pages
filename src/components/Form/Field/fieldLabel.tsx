'use client'

import { LabelHTMLAttributes, ReactNode } from 'react'

import * as C from './styled'

interface FieldLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode
}

const FieldLabel: React.FC<FieldLabelProps> = ({ children, ...rest }) => {
  return <C.Label {...rest}>{children}</C.Label>
}

export default FieldLabel
