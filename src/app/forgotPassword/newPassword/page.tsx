'use client'

import { useState } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

import Form from '@/components/Form'
import Field from '@/components/Form/Field'

import { motion, AnimatePresence, useIsPresent } from 'framer-motion'

import * as C from './styled'

const NewPassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  const [visible, setVisible] = useState<boolean[]>([false, false])

  const buttonClassName = newPassword === '' ? 'closed' : 'open'

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
          <Form.Root
            style={{ borderRadius: '1rem', width: '350px', height: '400px' }}
          >
            <div className="top">
              <Form.Header title="Enter New Password" subTitle="" />
              <p>
                Your new password must be different from the password you used
                previously.
              </p>
            </div>
            <Form.Content>
              <Field.Root>
                <Field.Label htmlFor="password">Password</Field.Label>
                <Field.Input
                  id="password"
                  type={!visible[0] ? 'password' : 'text'}
                  value={newPassword}
                  style={{ width: '100%' }}
                  placeholder="Enter your password"
                  onChange={(e) => setNewPassword(e.target.value)}
                />
                <Field.Action
                  visible={!visible[0]}
                  onClick={() => setVisible([!visible[0]])}
                />
              </Field.Root>
              <Field.Root>
                <Field.Label htmlFor="confirmPassword">
                  Confirm Password
                </Field.Label>
                <Field.Input
                  id="confirmPassword"
                  type={!visible[1] ? 'password' : 'text'}
                  value={confirmNewPassword}
                  style={{ width: '100%' }}
                  placeholder="Confirm your password"
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                />
                <Field.Action
                  visible={!visible[1]}
                  onClick={() => setVisible([!visible[1]])}
                />
              </Field.Root>
            </Form.Content>
            <Form.Action conditional={buttonClassName}>CONFIRM</Form.Action>
            <Link href="/" style={{ color: '#ff9400' }}>
              Back
            </Link>
          </Form.Root>
        </motion.div>
      </AnimatePresence>
    </C.Page>
  )
}

export default NewPassword
