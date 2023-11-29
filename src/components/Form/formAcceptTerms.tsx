import * as C from './styled'

const FormAcceptTerms: React.FC = () => {
  return (
    <C.AcceptTerms htmlFor="AcceptTerms">
      <input type="checkbox" name="" id="AcceptTerms" />I agree to the{' '}
      <span>terms & conditions</span> and <span>privacy policy</span>
    </C.AcceptTerms>
  )
}

export default FormAcceptTerms
