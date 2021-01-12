import styled from 'styled-components'
export const Container = styled.div`
  background: #e9eeef;

  display: flex;
`
export const MenuContainer = styled.div`
  margin: 230px auto;
  width: 100%;
  max-width: 1069px;
  background: #f8f8fa;
  height: 307px;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
`

export const SearchBar = styled.div`
  display: flex;
  max-width: 100%;

  margin: 11px 10px 24px 11px;
  background: #fff;
  height: 48px;
  border-radius: 4px;
`
export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
`
export const QuantityInfo = styled.div`
  display: flex;
  align-items: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #fff;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  :checked::before {
    border: none;
  }
  :checked {
    border: 1px solid #5743d9;
  }
`
export const PriceInfo = styled.div`
  display: flex;
  justify-content: space-around;
`
export const AreaInfo = styled.div`
  display: flex;
  justify-content: space-around;
`
export const InfoWrapper = styled.div`
  display: flex;

  flex-direction: column;
`
export const QuantityWrapper = styled.div`
  display: flex;
  margin: 0 20px 0 0;
`
export const InputField = styled.input`
  max-width: 100px;
  height: 45px;
  background: #fff;
  border: none;
  border-radius: 5px;

  text-align: left;
`
export const InfoText = styled.text`
  font-weight: 300;
  color: #8a8a8a;
  size: 14px;
  font-style: normal;
  margin-bottom: 10px;
`
export const FilterButton = styled.button`
  max-width: 119px;
  height: 29px;
  align-self: center;
  margin: 30px 0 12px 0;
  color: #8a8a8a;
  padding: 5px;
  background: #f8f8fa;
  border: 1px solid #5743d9;
  box-sizing: border-box;
  border-radius: 5px;
`
