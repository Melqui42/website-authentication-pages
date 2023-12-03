'use client'

import { useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import Container from '@/components/Container'
import Form from '@/components/Form'
import Field from '@/components/Form/Field'

import { Formik } from 'formik'

import * as Yup from 'yup'

interface FormValuesProps {
  password: string
  confirmPassword: string
}

interface SubmittingProps {
  setSubmitting: (isSubmitting: boolean) => void
}

const NewPassword: React.FC = () => {
  const router = useRouter()
  const [visible, setVisible] = useState<boolean[]>([false, false])

  const initialValues: FormValuesProps = {
    password: '',
    confirmPassword: '',
  }

  const validationSchema = Yup.object({
    password: Yup.string()
      .min(6, 'A senha deve ter pelo menos 6 caracteres')
      .required('Senha requerida'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), undefined], 'As senhas devem corresponder')
      .required('Confirmar senha é obrigatório'),
  })

  const handleSubmit = (
    values: FormValuesProps,
    { setSubmitting }: SubmittingProps,
  ) => {
    console.log(values)
    setSubmitting(false)

    router.push('/')
  }

  return (
    <Container heightContainer="350px">
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ values, isSubmitting }) => (
          <Form.Root style={{ borderRadius: '1rem' }}>
            <Form.Header
              title="Insira a nova senha"
              subTitle="Sua nova senha deve ser diferente da senha que você usou
              anteriormente."
            />
            <Form.Content>
              <Field.Root>
                <Field.ErrorMessage name="password" />
                <Field.Label htmlFor="password">Senha</Field.Label>
                <Field.Input
                  id="password"
                  name="password"
                  type={!visible[0] ? 'password' : 'text'}
                  placeholder="Coloque sua senha"
                />
                <Field.Action
                  visible={!visible[0]}
                  onClick={() => setVisible([!visible[0]])}
                />
              </Field.Root>
              <Field.Root>
                <Field.ErrorMessage name="confirmPassword" />
                <Field.Label htmlFor="confirmPassword">
                  Confirmar Senha
                </Field.Label>
                <Field.Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={!visible[1] ? 'password' : 'text'}
                  placeholder="Confirme sua senha"
                />
                <Field.Action
                  visible={!visible[1]}
                  onClick={() => setVisible([!visible[1]])}
                />
              </Field.Root>
            </Form.Content>
            <Form.Action
              type="submit"
              disabled={isSubmitting}
              className={
                !values.password || !values.confirmPassword ? 'closed' : 'open'
              }
            >
              CONFIRMAR
            </Form.Action>
            <Link href="/" style={{ color: '#ff9400' }}>
              Voltar
            </Link>
          </Form.Root>
        )}
      </Formik>
    </Container>
  )
}

export default NewPassword
