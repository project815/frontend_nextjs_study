import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useEffect, useState } from "react";

const FETCHBOARDS = gql`
  query fetchBoards {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

const DELETEBOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      _id
      number
      message
    }
  }
`;

const Row = styled.div`
  display: flex;
`;
const Column = styled.div`
  width: 20%;
`;
const Button = styled.button`
  font-weight: bold;
`;
export default function StaticRoutePage() {
  const { data } = useQuery(FETCHBOARDS);
  const [deleteBoard] = useMutation(DELETEBOARD);

  const onClickDeleteBoard = async (num: { num: Number }) => {
    console.log(num);
    await deleteBoard({
      variables: { number: num },
      refetchQueries: [{ query: FETCHBOARDS }],
    }).catch((err) => {
      console.log("err : ", err);
    });
  };

  console.log("실행");

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      {data &&
        data?.fetchBoards.map((ele) => (
          <Row key={ele.number}>
            <Column>
              <input
                type="checkbox"
                onChange={(event) => (ele.checked = event.target.checked)}
              />
            </Column>
            <Column>{ele.number}</Column>
            <Column>{ele.title}</Column>
            <Column>{ele.contents}</Column>
            <Button onClick={() => onClickDeleteBoard(ele.number)}>삭제</Button>
          </Row>
        ))}
    </>
  );
}
