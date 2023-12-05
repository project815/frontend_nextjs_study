import { gql, useQuery } from "@apollo/client";

const FETCHBOARD = gql`
  query {
    fetchBoard(number: 20001) {
      writer
      title
      contents
    }
  }
`;
export default function StaticRoutingMovedPage() {
  const { data } = useQuery(FETCHBOARD);

  return (
    <div>
      1페이지 이동이 완료되었습니다.
      <div>작성자 : {data && data.fetchBoard.writer}</div>
      <div>제목 : {data?.fetchBoard.title}</div>
      <div>내용 : {data ? data.fetchBoard.contents : ""}</div>
    </div>
  );
}
