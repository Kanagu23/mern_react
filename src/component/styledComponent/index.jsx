import { useState } from 'react';
import styled from 'styled-components';

export const StyledButton = styled.a`
  background: teal;
  color: white;
  padding: 10px;
`;
//  const Button = styled.button`
//    background: ${(props) => (props.primary ? 'blue' : 'gray')};
//    color: white;
//  `;


 const Button = styled.button`
   background: ${(props) => (props.active ? 'blue' : 'gray')};
   color: white;
 `;



 const Card = styled.div`
   padding: 20px;
   background: white;

   &:hover {
 	background: lightgray;
   }

   button {
 	// color: red;
   }`

    const Button1 = styled.button`
   background: blue;
   font-weight:bold;
 `;

 const DangerButton = styled(Button1)`
   background: red;
 `;
const AtagButton = styled.button`
   background: blue;
 `;

 
const StyledComponent=()=>{
  const [active, setActive] = useState(false);
    return <>
     {/* <Button primary>Primary</Button>
 <Button>Default</Button> */}
 <Card>
  <DangerButton active={active} onClick={() => setActive(!active)}>
   {active ? 'Active' : 'Inactive'}
 </DangerButton>

 <AtagButton as="a" href="#">Link Styled as AtagButton</AtagButton>
 </Card>
    </>
} 
export default StyledComponent