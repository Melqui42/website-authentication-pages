import { ReactNode } from 'react'

import * as C from './styled'

interface CardContentProps {
  children: ReactNode
}

const CardContent: React.FC<CardContentProps> = ({ children }) => {
  return <C.Content>{children}</C.Content>
}

export default CardContent
