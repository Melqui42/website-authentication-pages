'use client'

import styled from 'styled-components'

export const Page = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #664fff;

  .container {
    height: 280px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 0px 16px 5px rgba(68, 55, 241, 0.25);
    -webkit-box-shadow: 0px 0px 16px 5px rgba(68, 55, 241, 0.25);
    -moz-box-shadow: 0px 0px 16px 5px rgba(68, 55, 241, 0.25);

    .top {
      gap: 0.5rem;
      display: flex;
      align-items: center;
      flex-direction: column;

      p {
        color: #b8b7bc;
        text-align: center;
      }
    }
  }
`
