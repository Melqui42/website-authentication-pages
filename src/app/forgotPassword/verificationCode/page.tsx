'use client'

import { ChangeEvent, useEffect, useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import Form from '@/components/Form'
import Field from '@/components/Form/Field'

import { motion, AnimatePresence, useIsPresent } from 'framer-motion'

import * as C from './styled'

const VerificationCode: React.FC = () => {
  const router = useRouter()
  const [code, setCode] = useState<string[]>(['', '', '', '', ''])
  const [randomCode, setRandomCode] = useState<string>('')

  const buttonClassName = code.every((item) => item !== '') ? 'open' : 'closed'

  const isPresent = useIsPresent()

  const handleCodeChange = (index: number, value: string) => {
    const newValue = value.substring(0, 1)

    setCode((prevCode) => {
      const newCode = [...prevCode]
      newCode[index] = newValue
      return newCode
    })
  }

  const renderInputField = (index: number) => (
    <Field.Root key={index} style={{ width: '46px' }}>
      <Field.Input
        type="text"
        value={code[index].toUpperCase()}
        style={{ fontSize: 20 }}
        maxLength={1}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          handleCodeChange(index, e.target.value)
        }
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

    // Gerar uma string aleatória com 5 caracteres
    const generatedRandomCode = Array.from({ length: 5 }, () =>
      generateRandomChar(),
    ).join('')

    setRandomCode(generatedRandomCode)
    console.log(generatedRandomCode)
  }, [])

  const tete = () => {
    router.push('/forgotPassword/newPassword')
  }

  return (
    <C.Page>
      <AnimatePresence>
        <motion.div
          className="container"
          style={{
            position: isPresent ? 'static' : 'absolute',
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 900, damping: 40 }}
          layout
        >
          <Form.Root style={{ borderRadius: '1rem', width: '350px' }}>
            <div className="top">
              <Form.Header title="Get Your Code" subTitle="" />
              <p>Please enter 5 digit code that send to your email address.</p>
            </div>
            <Form.Content style={{ flexDirection: 'row' }}>
              {codeInputs}
            </Form.Content>
            <Form.Action onClick={tete} conditional={buttonClassName}>
              CONFIRM CODE
            </Form.Action>
            <Link href="/" style={{ color: '#ff9400' }}>
              Back
            </Link>
          </Form.Root>
        </motion.div>
      </AnimatePresence>
    </C.Page>
  )
}

export default VerificationCode
