'use client'

import styled from 'styled-components'

export const socialMedia = styled.div`
  gap: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;

  p {
    color: #b8b7bc;
  }

  ul {
    gap: 2rem;
    display: flex;
    align-items: center;

    li {
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
`
