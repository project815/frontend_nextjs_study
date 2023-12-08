import styled from "@emotion/styled";

export const RedInput = styled.input`
  border-color: red;
  opacity: 0.5;
`;

export const BlueButton = styled.button<{ mycolor: string }>`
  background-color: ${(props) => props.mycolor};
`;

const qqq = "철수당";
export default qqq;
