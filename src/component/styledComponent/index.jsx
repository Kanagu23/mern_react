import styled from 'styled-components';

export const StyledButton = styled.a`
  background: teal;
  color: white;
  padding: 10px;
`;
const StyledComponent=()=>{
    console.log(styled)
    return <StyledButton>Click Me</StyledButton>
} 
export default StyledComponent