'use client'

import { Field } from 'formik'

import styled from 'styled-components'

export const Root = styled.div`
  display: flex;
  position: relative;
  border-radius: 0.8rem;
  border: 3px solid #7065ff;
`
export const Label = styled.label`
  top: -10px;
  left: 15px;
  color: #7065ff;
  position: absolute;
  padding: 0rem 0.2rem;
  background-color: #ffffff;
`
export const Container = styled.div`
  top: -20px;
  width: 100%;
  display: flex;
  position: absolute;
  justify-content: right;
`
export const ErrorMessage = styled.span`
  color: #ff0000;
  font-size: 0.8rem;
`
export const Input = styled(Field)`
  width: 100%;
  border: none;
  outline: none;
  color: #7065ff;
  padding: 1rem;
  border-radius: 0.75rem;
  background-color: transparent;
`
export const Action = styled.button`
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;

  .iconAction {
    color: #7065ff;
    font-size: 1.2rem;
  }
`
