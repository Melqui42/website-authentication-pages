import { ReactNode } from 'react'

import * as C from './styled'

interface CardDescriptionProps {
  children: ReactNode
}

const CardDescription: React.FC<CardDescriptionProps> = ({ children }) => {
  return <C.Descriptin>{children}</C.Descriptin>
}

export default CardDescription
