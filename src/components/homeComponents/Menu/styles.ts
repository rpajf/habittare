import styled from 'styled-components'
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #f8f8fa;

  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);

  border-radius: 5px;
  margin: 15px;
`
export const ContentWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  padding: 5px 15px;
`
export const SearchBar = styled.div`
  background: #fff;
  display: flex;
  border-radius: 5px;
  border: none;
`

export const MainInput = styled.input`
  padding: 12px 0 12px 5px;
  flex: 2 1 0;
  border: none;
  ::placeholder {
    color: #8a8a8a;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
  }
`
export const SearchLabel = styled.label`
  background: #5743d9;
  border-radius: 0px 5px 5px 0px;
  padding: 10px 20px 10px 20px;
  flex-wrap: wrap;
  line-height: 24px;
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.theme.colors.textPrimary};
`

export const SwitchLabel1 = styled(SearchLabel)``
export const SwitchLabel2 = styled(SearchLabel)`
  background: #fff;

  color: ${props => props.theme.colors.primary};

  border-right: 1px solid rgba(138, 138, 138, 0.5);
`
export const ModalTag = styled(SearchLabel)`
  background: #fff;
`
export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
`
export const MenuContentText = styled.text`
  font-style: normal;
  font-weight: 300;
  font-size: 14px;
  line-height: 21px;

  color: #8a8a8a;
`
export const ContentInput = styled.input`
  background: #ffffff;
  border-radius: 5px;
  border: none;
  padding: 15px 0 15px 5px;
`
export const QuantityWrapper = styled(InfoWrapper)`
  flex-direction: row;
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

  background: #ffffff;
  border: none;
`
export const FilterLabel = styled.label`
  background: #f8f8fa;
  color: #8a8a8a;
  border: 1px solid #5743d9;
  font-style: normal;
  font-weight: 300;
  border-radius: 5px;
  font-size: 16px;
  line-height: 24px;
  margin: 0 auto 12px;
  padding: 3px 9px 2px 9px;
  align-self: center;
  /* align-self: baseline; */
  //
`
