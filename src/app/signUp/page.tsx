'use client'

import { useState } from 'react'

import Link from 'next/link'

import Container from '@/components/Container'
import Card from '@/components/Container/Card'
import Form from '@/components/Form'
import Field from '@/components/Form/Field'
import Icon from '@/utils/iconImport'

import { Formik } from 'formik'

import * as Yup from 'yup'

interface FormValuesProps {
  name: string
  email: string
  password: string
}

interface SubmittingProps {
  setSubmitting: (isSubmitting: boolean) => void
}

const SignUp: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const [isChecked, setIsChecked] = useState<boolean>(false)

  const initialValues: FormValuesProps = {
    name: '',
    email: '',
    password: '',
  }

  const validationSchema = Yup.object({
    name: Yup.string().required('Nome é obrigatório'),
    email: Yup.string()
      .email('Endereço de e-mail inválido')
      .required('E-mail é obrigatório'),
    password: Yup.string()
      .min(6, 'A senha deve ter pelo menos 6 caracteres')
      .required('Senha é obrigatória'),
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
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {({ values, isSubmitting }) => (
          <Form.Root style={{ borderRadius: '1rem 0rem 0rem 1rem' }}>
            <Form.Header title="CRIE SUA CONTA" />
            <Form.Content>
              <Field.Root>
                <Field.ErrorMessage name="name" />
                <Field.Label htmlFor="name">Nome</Field.Label>
                <Field.Input
                  id="name"
                  type="text"
                  name="name"
                  placeholder="Digite seu nome"
                />
              </Field.Root>
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
              <Field.Root>
                <Field.ErrorMessage name="password" />
                <Field.Label htmlFor="password">Senha</Field.Label>
                <Field.Input
                  id="password"
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
              <Form.AcceptTerms
                isChecked={isChecked}
                setIsChecked={setIsChecked}
              >
                Estou de acordo com <span>termos e Condições</span> e{' '}
                <span>política de Privacidade</span>
              </Form.AcceptTerms>
            </Form.Content>
            <Form.Action
              type="submit"
              disabled={isSubmitting || !isChecked}
              className={
                !isChecked || !values.name || !values.email || !values.password
                  ? 'closed'
                  : 'open'
              }
            >
              CONTINUAR
            </Form.Action>
          </Form.Root>
        )}
      </Formik>
      <Card.Root style={{ borderRadius: '0rem 1rem 1rem 0rem' }}>
        <Card.Logo title="Event Jungle" icon={Icon.Bi.BiChip} />
        <Card.Content>
          <Card.Title>Mais de 600 mil boosters já estão conectados.</Card.Title>
          <Card.Description>
            Junte-se a milhares de devs e acelere na direção dos seus objetivos
          </Card.Description>
        </Card.Content>
        <Card.Action text="Você já tem uma conta?">
          <Link href="/">ENTRAR</Link>
        </Card.Action>
      </Card.Root>
    </Container>
  )
}

export default SignUp
