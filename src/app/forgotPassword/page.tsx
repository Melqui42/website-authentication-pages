'use client'

import { useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import Form from '@/components/Form'
import Field from '@/components/Form/Field'

import { motion, AnimatePresence, useIsPresent } from 'framer-motion'

import * as C from './styled'

const Forgot: React.FC = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')

  const buttonClassName = email === '' ? 'closed' : 'open'

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
          <Form.Root style={{ borderRadius: '1rem' }}>
            <div className="top">
              <Form.Header title="Forgot Password" subTitle="" />
              <p className="text">
                Enter the email address you used when registering and we will
                send you instructions for resetting your password.
              </p>
            </div>

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
            </Form.Content>
            <Form.Action
              onClick={() => router.push('/forgotPassword/verificationCode')}
              conditional={buttonClassName}
            >
              SEND
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

export default Forgot
