import styled from "@emotion/styled";

export const QuizLayOut = styled.form`
  width: 350px;
  height: 140px;
  border: 1px solid #bdbdbd;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
`;

export const InputRowGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  justify-content: space-between;
`;

export const InputColumnGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Error = styled.span`
  color: red;
  font-size: 12px;
`;
