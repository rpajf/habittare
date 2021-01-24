import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const RadioLabel = styled.label`
  color: #8a8a8a;
  text-align: center;
  background: #ffffff;
  border-radius: 21px;
  width: 20px;
  display: flex;
  align-items: center;
  height: 20px;
  padding: 21px;
`

export const QuantityInfo = styled.input`
  opacity: 0;
  display: none;
`
/*

   <S.Container>
      <S.QuantityInfo id="quantityRadio" type="radio" />
      <S.RadioLabel htmlFor="quantityRadio">1</S.RadioLabel>
    </S.Container>
*/
