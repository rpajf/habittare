import styled from 'styled-components'
import Button from '../../../components/Buttons/PrimaryBtn'

import Input from '../../../components/Input'

export const Container = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 700px;
  border-radius: 5px;
  padding: 20px 25px 30px 25px;
  @media (min-width: 310px) and (max-width: 480px) {
    flex: auto;
    padding: 10px;
    align-items: center;
    background: #fff;  }
`
export const FieldWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 310px) and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`
export const InputField = styled(Input)`
  background: #ffffff;
  border: 1px solid #c4c4c4;

  border-radius: 5px;
  max-width: 300px;

  input {
  }
`
export const InputArea = styled(Input)`
  height: 150px;
  text-align: start;
`
export const FormText = styled.text`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;

  color: #001;
`
export const CheckBoxWrapper = styled.div`
  display: flex;
  @media (min-width: 310px) and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`

export const SubmitButton = styled(Button)`
  text-align: center;
  padding: 10px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 27px;
`
export const CheckBox = styled.input`
  margin-right: 5px;
`
export const FormOrganizer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 50px;
  display: flex;
  justify-content: space-between;
  @media (min-width: 310px) and (max-width: 480px) {
    margin-left: 0;
  }
`
export const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 310px) and (max-width: 480px) {
    align-items: center;
  }
`
