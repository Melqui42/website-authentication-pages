'use client'

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
export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  color: #7065ff;
  padding: 1rem;
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
