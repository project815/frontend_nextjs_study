import styled from "@emotion/styled";

export const RedInput = styled.input`
  border-color: red;
  opacity: 0.5;
`;

export const BlueButton = styled.button<{ isActive: boolean }>`
  background-color: ${(props) => (props.isActive ? "green" : "red")};
`;

const qqq = "철수당";
export default qqq;
