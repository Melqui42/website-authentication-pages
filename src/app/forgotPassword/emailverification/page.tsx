'use client'

import { useEffect, useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import Container from '@/components/Container'
import Form from '@/components/Form'
import Field from '@/components/Form/Field'

import { Formik } from 'formik'

interface FormValuesProps {
  code: ['', '', '', '', '']
}

interface SubmittingProps {
  setSubmitting: (isSubmitting: boolean) => void
}

const VerificationCode: React.FC = () => {
  const router = useRouter()
  const [randomCode, setRandomCode] = useState<string>('')

  const initialValues: FormValuesProps = {
    code: ['', '', '', '', ''],
  }

  const renderInputField = (index: number) => (
    <Field.Root key={index} style={{ width: '46px' }}>
      <Field.Input
        type="text"
        name={`code[${index}]`}
        maxLength={1}
        style={{ fontSize: 20 }}
      />
    </Field.Root>
  )

  const codeInputs = Array.from({ length: 5 }, (_, index) =>
    renderInputField(index),
  )

  useEffect(() => {
    const generateRandomChar = () => {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
      const randomIndex = Math.floor(Math.random() * characters.length)
      return characters[randomIndex]
    }

    const generatedRandomCode = Array.from({ length: 5 }, () =>
      generateRandomChar(),
    ).join('')

    setRandomCode(generatedRandomCode)
    console.log(generatedRandomCode)
  }, [])

  const handleSubmit = (
    values: FormValuesProps,
    { setSubmitting }: SubmittingProps,
  ) => {
    console.log(values)
    setSubmitting(false)

    router.push('/forgotpassword/newpassword')
  }

  return (
    <Container heightContainer="280px">
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        {({ values, isSubmitting }) => (
          <Form.Root style={{ borderRadius: '1rem', width: '350px' }}>
            <Form.Header
              title="Obtenha seu código"
              subTitle="Por favor, insira o código de 5 dígitos que será enviado para o seu endereço de e-mail."
            />
            <Form.Content style={{ flexDirection: 'row' }}>
              {codeInputs}
            </Form.Content>
            <Form.Action
              type="submit"
              disabled={isSubmitting}
              className={
                !values.code.every((code: string) => code !== '')
                  ? 'closed'
                  : 'open'
              }
            >
              CONFIRMAR CÓDIGO
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

export default VerificationCode
