'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import Container from '@/components/Container'
import Form from '@/components/Form'
import Field from '@/components/Form/Field'

import { Formik } from 'formik'

import * as Yup from 'yup'

interface FormValuesProps {
  email: string
}

interface SubmittingProps {
  setSubmitting: (isSubmitting: boolean) => void
}

const Forgot: React.FC = () => {
  const router = useRouter()

  const initialValues: FormValuesProps = {
    email: '',
  }

  const validationScrema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
  })

  const handleSubmit = (
    values: FormValuesProps,
    { setSubmitting }: SubmittingProps,
  ) => {
    console.log(values)
    setSubmitting(false)

    router.push('/forgotpassword/emailverification')
  }

  return (
    <Container heightContainer="280px">
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationScrema}
      >
        {({ values, isSubmitting }) => (
          <Form.Root style={{ borderRadius: '1rem' }}>
            <Form.Header
              title="Recuperar senha"
              subTitle="Digite o endereço de e-mail que você usou ao se registrar e nós
              enviar-lhe instruções para redefinir sua senha."
            />
            <Form.Content>
              <Field.Root>
                <Field.ErrorMessage name="email" />
                <Field.Label htmlFor="email">Email</Field.Label>
                <Field.Input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Digite seu e-mail"
                />
              </Field.Root>
            </Form.Content>
            <Form.Action
              type="submit"
              disabled={isSubmitting}
              className={!values.email ? 'closed' : 'open'}
            >
              ENVIAR
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

export default Forgot
