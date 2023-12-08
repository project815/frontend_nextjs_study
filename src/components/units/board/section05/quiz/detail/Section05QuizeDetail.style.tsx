import styled from "styled-components";

export const ProductDetailLayOut = styled.form`
  width: 500px;
  height: 600px;
  display: flex;
  flex-direction: column;
  padding: 0px 50px 50px 50px;
  box-sizing: border-box;
  border: 1px solid black;
  border-radius: 10px;
  align-items: center;
`;

export const ProductInfoBody = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  flex-direction: column;
`;

export const ProductDetailInputTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin: 50px;
`;
export const ProductDetailInputRowGroup = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  item-align: center;
`;
export const ProductDetailInfo = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
