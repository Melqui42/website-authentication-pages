import { ElementType } from 'react'

import * as C from './styled'

interface CardLogoProps {
  title: string
  icon: ElementType
}

const CardLogo: React.FC<CardLogoProps> = ({ title, icon: Icon }) => {
  return (
    <C.Logo>
      <Icon className="icon" />
      <p>{title}</p>
    </C.Logo>
  )
}

export default CardLogo
