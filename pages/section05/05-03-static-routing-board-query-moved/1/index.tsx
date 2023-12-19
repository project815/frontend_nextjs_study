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
      {/* <div>작성자 : {data && data.fetchBoard.writer}</div> */}
      {/* ESlin에서 위 방법은 간결성과 더 읽기 쉽게 하기 위해서 막은 듯...? 굳이 옵션 바꿀 필요없이 옵셔널 방식으로 사용함. */}
      <div>작성자 : {data?.fetchBoard.writer}</div>
      <div>제목 : {data?.fetchBoard.title}</div>
      <div>내용 : {data ? data.fetchBoard.contents : ""}</div>
    </div>
  );
}
