import * as C from './styled'

interface FormHeaderProps {
  title: string
  subTitle?: string
}

const FormHeader: React.FC<FormHeaderProps> = ({ title, subTitle }) => {
  return (
    <C.Header>
      <h1 className="title">{title}</h1>
      <p className="subTitle">{subTitle}</p>
    </C.Header>
  )
}

export default FormHeader
