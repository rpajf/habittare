import styled from 'styled-components'
import Image from 'next/image'

export const Container = styled.div`
  background: #f3f4f7;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  padding: 15px;
`

export const TextWrapper = styled.div``

export const SmallCap = styled.p`
  text-align: center;
  font-size: 19px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin: 15px auto;
`

export const BigCap = styled.p`
  text-align: center;
  font-size: 80px;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  text-align: center;

  width: min-content;
  margin: 15px auto;
`

export const SocialsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  min-width: 30%;

  margin-top: 20px;
`

export const SocialsLink = styled.a``
export const SocialsIcon = styled(Image)``
