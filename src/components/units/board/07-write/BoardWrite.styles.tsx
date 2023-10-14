import styled from "@emotion/styled";

export const RedInput = styled.input`
  border-color: ${(props) => {
    return props.isfill ? "red" : "default";
  }};
`;

export const BlueButton = styled.button`
  background-color: ${(props) => {
    return props.isfill ? "red" : "default";
  }};
`;

const qqq = "철수당";
export default qqq;
