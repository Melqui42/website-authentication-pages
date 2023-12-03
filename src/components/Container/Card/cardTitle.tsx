import { ReactNode } from 'react'

import * as C from './styled'

interface CardTitleProps {
  children: ReactNode
}

const CardTitle: React.FC<CardTitleProps> = ({ children }) => {
  return <C.Title>{children}</C.Title>
}

export default CardTitle
