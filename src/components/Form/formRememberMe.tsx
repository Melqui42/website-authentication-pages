import * as C from './styled'

const FormRememberMe: React.FC = () => {
  return (
    <C.RememberMe htmlFor="rememberMe">
      <input type="checkbox" name="" id="rememberMe" />
      Keep me logged in
    </C.RememberMe>
  )
}

export default FormRememberMe
