'use client'

import { useState } from 'react'
import * as Bi from 'react-icons/bi'

import Link from 'next/link'

import Form from '@/components/Form'
import Field from '@/components/Form/Field'

import axios from 'axios'
import { motion, AnimatePresence, useIsPresent } from 'framer-motion'

import * as C from './styled'

const SignUp: React.FC = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const buttonClassName =
    name === '' || email === '' || password === '' ? 'closed' : 'open'

  const handleDataSending = async () => {
    if (name !== '' && email !== '' && password !== '') {
      try {
        const response = await axios.post('http://localhost:8080/signUp', {
          name,
          email,
          password,
        })
        console.log('Dados enviados com sucesso', response.data)
      } catch (error) {
        console.error('Erro ao enviar dados', error)
      }
    }
  }

  const isPresent = useIsPresent()

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
          <Form.Root style={{ borderRadius: '1rem 0rem 0rem 1rem' }}>
            <Form.Header title="Sign Up" />
            <Form.Content>
              <Field.Root>
                <Field.Label htmlFor="name">Name</Field.Label>
                <Field.Input
                  id="name"
                  type="text"
                  value={name}
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)}
                />
              </Field.Root>
              <Field.Root>
                <Field.Label htmlFor="email">Email</Field.Label>
                <Field.Input
                  id="email"
                  type="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Field.Root>
              <Field.Root>
                <Field.Label htmlFor="password">Password</Field.Label>
                <Field.Input
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
                <Field.Action visible={true} />
              </Field.Root>
              <Form.AcceptTerms />
            </Form.Content>
            <Form.Action
              type="submit"
              onClick={handleDataSending}
              conditional={buttonClassName}
            >
              CONTINUE
            </Form.Action>
          </Form.Root>
          <div className="content">
            <div className="center">
              <div className="logo">
                <Bi.BiChip className="icon" />
                <p>Event Jungle</p>
              </div>
              <div className="text">
                <h1 className="title">Hey There!</h1>
                <p className="description">
                  Are you new here?
                  <br /> You are just one step away to your feed.
                </p>
              </div>
              <div className="createAccount">
                <p>Already have an account?</p>
                <Link href="/">SIGN IN</Link>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </C.Page>
  )
}

export default SignUp
