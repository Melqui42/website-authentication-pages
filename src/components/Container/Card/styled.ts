import styled from 'styled-components'

export const Root = styled.div`
  width: 340px;
  height: 100%;
  display: flex;
  padding: 1.5rem;
  align-items: center;
  justify-content: center;
  background-color: #7065ff;

  .center {
    width: 95%;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`
export const Logo = styled.div`
  gap: 0.5rem;
  display: flex;
  align-items: center;

  p {
    color: #ffffff;
  }

  .icon {
    color: #ffffff;
    font-size: 1.5rem;
  }
`
export const Content = styled.div`
  gap: 1rem;
  display: flex;
  text-align: center;
  align-items: center;
  flex-direction: column;
`
export const Title = styled.h1`
  color: #ffffff;
`
export const Descriptin = styled.p`
  color: #ffffff;
`
export const Action = styled.div`
  gap: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    color: #918aff;
  }

  a {
    color: #ffffff;
    font-weight: bold;
    border-radius: 1rem;
    padding: 0.5rem 1rem;
    border: 3px solid #ffffff;
  }
`
