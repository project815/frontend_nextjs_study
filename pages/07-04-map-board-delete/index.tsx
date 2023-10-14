import { gql, useQuery } from "@apollo/client";
import styled from "@emotion/styled";

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

const Row = styled.div`
  display: flex;
`;
const Column = styled.div`
  width: 20%;
`;
export default function StaticRoutePage() {
  const { data } = useQuery(FETCHBOARDS);

  console.log("data :", data);
  console.log("data?.fetchBoards :", data?.fetchBoards);
  return (
    <>
      {data &&
        data?.fetchBoards.map((ele) => (
          <Row>
            <Column>{ele.number}</Column>
            <Column>{ele.title}</Column>
          </Row>
        ))}
    </>
  );
}
