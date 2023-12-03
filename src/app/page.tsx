'use client'

import { useState } from 'react'

import Link from 'next/link'

import Container from '@/components/Container'
import Card from '@/components/Container/Card'
import Form from '@/components/Form'
import Field from '@/components/Form/Field/'
import Icon from '@/utils/iconImport'

import { Formik } from 'formik'

import * as Yup from 'yup'

import * as C from './styled'

interface FormValuesProps {
  email: string
  password: string
}

interface SubmittingProps {
  setSubmitting: (isSubmitting: boolean) => void
}

const Login: React.FC = () => {
  const [visible, setVisible] = useState(false)

  const initialValues: FormValuesProps = {
    email: '',
    password: '',
  }

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Endereço de email invalido')
      .required('O e-mail é obrigatório'),
    password: Yup.string().required('Senha requerida'),
  })

  const handleSubmit = (
    values: FormValuesProps,
    { setSubmitting }: SubmittingProps,
  ) => {
    console.log(values)
    setSubmitting(false)
  }

  return (
    <Container heightContainer="450px">
      <Card.Root style={{ borderRadius: '1rem 0rem 0rem 1rem' }}>
        <Card.Logo title="Event Jungle" icon={Icon.Bi.BiChip} />
        <Card.Content>
          <Card.Title>Bem vindo de volta!</Card.Title>
          <Card.Description>
            Você está a apenas um passo do seu feed.
          </Card.Description>
        </Card.Content>
        <Card.Action text="Não tem em conta?">
          <Link href="/signup">REGISTRE-SE</Link>
        </Card.Action>
      </Card.Root>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ values, isSubmitting }) => (
          <Form.Root style={{ borderRadius: '0rem 1rem 1rem 0rem' }}>
            <Form.Header title="ENTRAR" />
            <Form.Content>
              <Field.Root>
                <Field.ErrorMessage name="email" />
                <Field.Label htmlFor="email">Email</Field.Label>
                <Field.Input name="email" placeholder="Digite seu e-mail" />
              </Field.Root>
              <Field.Root>
                <Field.ErrorMessage name="password" />
                <Field.Label htmlFor="password">Senha</Field.Label>
                <Field.Input
                  name="password"
                  placeholder="Coloque sua senha"
                  type={!visible ? 'password' : 'text'}
                />
                <Field.Action
                  type="button"
                  visible={!visible}
                  onClick={() => setVisible(!visible)}
                />
              </Field.Root>
            </Form.Content>
            <Form.Row>
              <Form.RememberMe>Mantenha-me conectado</Form.RememberMe>
              <Link
                href="/forgotpassword"
                style={{ width: 285, color: '#ff9400' }}
              >
                Esqueceu sua senha?
              </Link>
            </Form.Row>
            <Form.Action
              type="button"
              disabled={isSubmitting}
              className={!values.email || !values.password ? 'closed' : 'open'}
            >
              ENTRAR
            </Form.Action>
            <C.socialMedia>
              <p>Ou use a mídia social para fazer login</p>
              <ul className="list">
                <li className="item">
                  <button>
                    <Icon.Fc.FcGoogle className="icon" />
                  </button>
                </li>
                <li className="item">
                  <button>
                    <Icon.Fa.FaGithub className="icon" />
                  </button>
                </li>
                <li className="item">
                  <button>
                    <Icon.Fa.FaFacebook className="icon" />
                  </button>
                </li>
              </ul>
            </C.socialMedia>
          </Form.Root>
        )}
      </Formik>
    </Container>
  )
}

export default Login
