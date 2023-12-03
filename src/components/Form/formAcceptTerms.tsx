import { Dispatch, ReactNode, SetStateAction } from 'react'

import * as C from './styled'

interface FormAcceptTerms {
  children: ReactNode
  isChecked: boolean
  setIsChecked: Dispatch<SetStateAction<boolean>>
}

const FormAcceptTerms: React.FC<FormAcceptTerms> = ({
  children,
  isChecked,
  setIsChecked,
}) => {
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }
  return (
    <C.AcceptTerms htmlFor="AcceptTerms">
      <input
        type="checkbox"
        id="AcceptTerms"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      {children}
    </C.AcceptTerms>
  )
}

export default FormAcceptTerms
