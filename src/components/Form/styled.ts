'use client'

import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Root = styled.div`
  gap: 1.5rem;
  width: 340px;
  height: 100%;
  display: flex;
  padding: 1.5rem;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  justify-content: space-between;
`
export const Header = styled.div`
  width: 100%;
  gap: 1rem;
  display: flex;
  flex-direction: column;

  .title {
    color: #7065ff;
    font-size: 1.2rem;
  }

  .subTitle {
    color: #7065ff;
    font-weight: lighter;
  }
`

export const Action = styled.button`
  width: 100%;
  color: #ffffff;
  padding: 0.8rem;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 0.8rem;
  background-color: #7065ff;

  &.closed {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &.open {
    cursor: pointer;
  }
`
export const Content = styled.div`
  gap: 1.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`
export const RememberMe = styled.label`
  gap: 0.5rem;
  width: 100%;
  display: flex;
  color: #b8b7bc;
  align-items: center;

  input {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
`
export const AcceptTerms = styled.label`
  gap: 0.5rem;
  width: 100%;
  display: flex;
  color: #b8b7bc;
  font-size: 0.8rem;
  align-items: center;

  input {
    width: 18px;
    height: 18px;
    cursor: pointer;
  }

  span {
    color: #7065ff;
    text-decoration: underline;
  }
`
export const Row = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
