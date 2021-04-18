import styled from 'styled-components'
import Button from '@/components/PrimaryBtn'

export const Container = styled.div`
  background: ${props => props.theme.colors.textPrimary};
  display: flex;
  flex-direction: column;

  border-radius: 5px;
  @media (min-width: 310px) and (max-width: 480px) {
    flex: auto;
    padding: 10px;
    align-items: center;
  }
  form {
    input {
      margin-bottom: 5px;

      ::-webkit-input-placeholder {
        color: #cacaca;
      }
      ::-moz-placeholder {
        color: #cacaca;
      }
    }
    textarea {
      width: 100%;
      ::-webkit-input-placeholder {
        color: #cacaca;
      }
      ::-moz-placeholder {
        color: #cacaca;
      }
    }
  }
`
export const NavMainText = styled.text`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  color: #484848;
`
export const SubmitButton = styled(Button)`
  text-align: center;
  padding: 10px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 27px;
`

export const TextFoot = styled.div`
  height: 1px;
  max-width: 720px;
  background: linear-gradient(to right, #5743d9 45%, #c4c4c4 0%);
  margin-bottom: 10px;
`
