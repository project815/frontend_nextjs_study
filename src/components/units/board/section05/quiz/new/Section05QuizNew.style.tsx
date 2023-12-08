import styled from "styled-components";

export const ProductLayOut = styled.form`
  width: 500px;
  height: 600px;
  display: flex;
  flex-direction: column;
  padding: 0px 50px 0px 50px;
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 10px;
  justify-content: space-evenly;
  align-items: ;
`;

export const ProductInputTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
`;
export const ProductInputRowGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  item-align: center;
`;
export const ProductInput = styled.input`
  width: 300px;
  height: 30px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 0px 10px 0px 10px;
`;
export const ProductInputButton = styled.button`
  width: 100%;
  height: 30px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: black;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;
