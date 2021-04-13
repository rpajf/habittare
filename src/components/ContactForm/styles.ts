import styled from 'styled-components'
import Button from '@/components/PrimaryBtn'

export const Container = styled.div`
  background: ${props => props.theme.colors.textPrimary};
  display: flex;
  flex-direction: column;
  flex: 1;
  max-width: 700px;
  border-radius: 5px;
  padding: 10px;
  @media (min-width: 310px) and (max-width: 480px) {
    flex: auto;
    padding: 10px;
    align-items: center;
  }
`
export const FieldWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 310px) and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`

export const FormText = styled.text`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #001;
`
export const CheckBoxWrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  @media (min-width: 310px) and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`
export const CheckBoxDiv = styled.div`
  display: flex;
  flex: 1;
  max-width: 300px;
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
