import styled, { css } from 'styled-components'
import PrimaryBtn from '../../PrimaryBtn'
interface SwitchProps {
  isToggled: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #f8f8fa;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 10px;
`
export const FilterWrapper = styled.div`
  transition: all 0.3s ease-in-out;
  transform-origin: top;
  height: 100%;
  &.hidden-menu {
    height: 0;
    transform: scaleY(0);
  }
  &.active {
    transform: scaleY(1);
  }
`

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 5px 15px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
export const SearchBar = styled.div`
  background: ${props => props.theme.colors.textPrimary};
  display: flex;
  border-radius: 5px;
  border: none;
  @media (max-width: 480px) {
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
  }
`
export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const SelectDiv = styled.div`
  background: ${props => props.theme.colors.textPrimary};
  border-radius: 0px;
  padding: 0 10px 0 10px;
  border-right: 1px solid rgba(138, 138, 138, 0.5);
  border-left: 1px solid rgba(138, 138, 138, 0.5);
  display: flex;
  align-items: center;
  font-weight: 300;
  font-size: 16px;
  flex: 1 3 50px;
  line-height: 24px;
  text-align: center;
  color: #8a8a8a;
  @media (max-width: 480px) {
    font-size: 8px;
    line-height: 0;
    border-radius: 5px;
    justify-content: center;
    text-align: center;
    flex: 1;
    border: 1px solid #8a8a8a;
  }
`
export const SearchButton = styled(PrimaryBtn)`
  background: ${props => props.theme.colors.primary};
  border-radius: 0px 5px 5px 0px;
  padding: 10px 20px 10px 20px;
  flex-wrap: wrap;
  line-height: 24px;
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.theme.colors.textPrimary};
  @media (max-width: 480px) {
    padding: 8px;
    font-size: 12px;
    text-align: center;
    border-radius: 5px;
    line-height: 16px;
  }
`
export const SearchLabel = styled.label`
  background: ${props => props.theme.colors.primary};
  border-radius: 0px 5px 5px 0px;
  padding: 10px 20px 10px 20px;
  flex-wrap: wrap;
  text-align: center;
  line-height: 35px;
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.theme.colors.textPrimary};
  @media (max-width: 480px) {
    padding: 8px;
    font-size: 12px;
    text-align: center;
    border-radius: 5px;
    line-height: 16px;
  }
`
export const SwitchLabel1 = styled(SearchLabel)<SwitchProps>`
  border-radius: 5px 0px 0px 5px;
  text-align: center;
  cursor: pointer;
  ${props =>
    props.isToggled &&
    css`
      background: ${props => props.theme.colors.textPrimary};
      color: ${props => props.theme.colors.primary};
    `}
`
export const SwitchLabel2 = styled(SearchLabel)<SwitchProps>`
  border-radius: 0px;
  text-align: center;

  background: ${props => props.theme.colors.textPrimary};
  cursor: pointer;
  color: ${props => props.theme.colors.primary};
  ${props =>
    props.isToggled &&
    css`
      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.textPrimary};
    `}
  @media (max-width: 480px) {
    padding: 8px;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
  }
`

export const MainInput = styled.input`
  padding: 12px 0 12px 5px;
  flex: 1 1 250px;
  border: none;
  outline: none;
  ::placeholder {
    color: #8a8a8a;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
  }
  @media (max-width: 480px) {
    padding: 8px 0 6px 2px;
    font-size: 8px;
    line-height: 10px;
    flex: 1 1 50px;
  }
`
export const CustomArrow = styled.div`
  margin-left: 5px;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  cursor: pointer;
  border-top: 5px solid #000;
`
export const ModalTag = styled(SearchLabel)`
  background: ${props => props.theme.colors.textPrimary};
`
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 30px;
`
export const MenuContentText = styled.text`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;
  color: #8a8a8a;
`
export const ContentInput = styled.input`
  background: ${props => props.theme.colors.textPrimary};
  border-radius: 5px;
  border: none;
  outline: none;
  padding: 15px 0 15px 5px;
  @media (max-width: 480px) {
    flex: 1 1 50px;
  }
`
export const QuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px 20px 15px 0;
`
export const PrinceWrapper = styled(InfoWrapper)``
export const QuantityInfo = styled.div`
  border-radius: 21px;
  width: 20px;
  height: 20px;
  padding: 21px;
  margin: 5px 20px 15px 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #8a8a8a;
  background: ${props => props.theme.colors.textPrimary};
  border: none;
`
export const FilterLabel = styled.button`
  background: #f8f8fa;
  color: #8a8a8a;
  border: 1px solid ${props => props.theme.colors.primary};
  font-style: normal;
  font-weight: 300;
  border-radius: 5px;
  font-size: 16px;
  line-height: 24px;
  margin: 10px auto;
  padding: 5px 10px;
  align-self: center;
  :focus {
    outline: none;
  }
`

export const SelectContainer = styled.div`
  position: relative;
  padding: 10px 15px 10px 10px;

  select {
    background: ${props => props.theme.colors.textPrimary};
    position: relative;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;

    color: #8a8a8a;
    border: none;
    -webkit-appearance: none;
    appearance: none;
    :focus {
      outline: 0;
    }
    option {
      position: absolute;
      transition: ease-in 1100ms;
      width: 100%;
      max-width: 400px;
    }
  }
  span {
    margin-left: 10px;
    width: 0;
    height: 0;
    top: 45%;
    right: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;

    border-top: 5px solid #000;
    position: absolute;
    :hover {
      cursor: none;
    }
  }
  @media (max-width: 480px) {
    display: flex;
    justify-content: center;
  }
`
