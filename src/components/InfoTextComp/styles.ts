import styled from 'styled-components'
export const Container = styled.div`
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: ${props => props.theme.colors.textPrimary};
  padding: 35px;
`
export const MainText = styled.text`
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 5px;

  color: #484848;
`
export const TextFoot = styled.div`
  height: 1px;
  max-width: 720px;
  background: linear-gradient(
    to right,
    ${props => props.theme.colors.primary}20%,
    #c4c4c4 0%
  );
  margin-bottom: 15px;
`
