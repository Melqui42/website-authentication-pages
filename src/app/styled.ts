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
    height: 450px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 0px 16px 5px rgba(68, 55, 241, 0.25);
    -webkit-box-shadow: 0px 0px 16px 5px rgba(68, 55, 241, 0.25);
    -moz-box-shadow: 0px 0px 16px 5px rgba(68, 55, 241, 0.25);

    .content {
      height: 100%;
      display: flex;
      padding: 1.5rem;
      align-items: center;
      justify-content: center;
      background-color: #7065ff;
      border-radius: 1rem 0rem 0rem 1rem;

      .center {
        width: 95%;
        height: 95%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .logo {
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
        }

        .text {
          gap: 1rem;
          display: flex;
          color: #ffffff;
          text-align: center;
          align-items: center;
          flex-direction: column;
        }

        .createAccount {
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
            padding: 1rem 1.5rem;
            border-radius: 2rem;
            border: 3px solid #ffffff;
          }
        }
      }
    }
  }

  .socialMediaSignUp {
    gap: 1rem;
    display: flex;
    align-items: center;
    flex-direction: column;

    p {
      color: #b8b7bc;
    }

    .list {
      gap: 2rem;
      display: flex;
      align-items: center;

      .item {
        button {
          .icon {
            font-size: 1.8rem;
          }
        }

        &:nth-child(2) button {
          .icon {
            color: #484848;
          }
        }

        &:nth-child(3) button {
          .icon {
            color: #3165a3;
          }
        }
      }
    }
  }
`
