'use client'

import { useState } from 'react'
import * as Bi from 'react-icons/bi'
import * as Fa from 'react-icons/fa'
import * as Fc from 'react-icons/fc'

import Link from 'next/link'

import Form from '@/components/Form'
import Field from '@/components/Form/Field/'

import { motion, AnimatePresence, useIsPresent } from 'framer-motion'

import * as C from './styled'

const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState(false)

  const buttonClassName = email === '' || password === '' ? 'closed' : 'open'

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
          <div className="content">
            <div className="center">
              <div className="logo">
                <Bi.BiChip className="icon" />
                <p>Event Jungle</p>
              </div>
              <div className="text">
                <h1 className="title">Hey There!</h1>
                <p className="description">
                  Welcome Back.
                  <br /> You are just one step away to your feed.
                </p>
              </div>
              <div className="createAccount">
                <p>Don&apos;t have on account?</p>
                <Link href="/signUp">SIGN UP</Link>
              </div>
            </div>
          </div>
          <Form.Root
            style={{
              borderRadius: '0rem 1rem 1rem 0rem',
            }}
          >
            <Form.Header title="SIGN IN" />
            <Form.Content>
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
                  type={!visible ? 'password' : 'text'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />
                <Field.Action
                  visible={!visible}
                  onClick={() => setVisible(!visible)}
                />
              </Field.Root>
            </Form.Content>
            <Form.Row>
              <Form.RememberMe />
              <Link
                href="/forgotPassword"
                style={{ width: 230, color: '#ff9400' }}
              >
                Forgot Password?
              </Link>
            </Form.Row>
            <Form.Action type="submit" conditional={buttonClassName}>
              LOGIN
            </Form.Action>
            <div className="socialMediaSignUp">
              <p>Or, Use socil media to sign in</p>
              <ul className="list">
                <li className="item">
                  <button>
                    <Fc.FcGoogle className="icon" />
                  </button>
                </li>
                <li className="item">
                  <button>
                    <Fa.FaGithub className="icon" />
                  </button>
                </li>
                <li className="item">
                  <button>
                    <Fa.FaFacebook className="icon" />
                  </button>
                </li>
              </ul>
            </div>
          </Form.Root>
        </motion.div>
      </AnimatePresence>
    </C.Page>
  )
}

export default Login
