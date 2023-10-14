import styled from "@emotion/styled";

export const RedInput = styled.input`
  border-color: red;
`;

export const BlueButton = styled.button`
  background-color: ${(props) => {
    return props.zzz ? "red" : "default";
  }};
`;

const qqq = "철수당";
export default qqq;
