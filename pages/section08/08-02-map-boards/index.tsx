import { gql, useQuery } from "@apollo/client";

const FETCHBOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;
export default function MapBoardsPage() {
  const { data } = useQuery(FETCHBOARDS);
  console.log("data : ", data);
  return (
    <div>
      {data ? (
        data?.fetchBoards.map(
          (i: { writer: string; contents: string; title: string; number }) => (
            <div key={i.number} style={{ marginTop: "10px" }}>
              <span style={{ marginLeft: "4px" }}>
                <input type="checkbox" />
              </span>
              <span>{i.number}</span>
              <span style={{ marginLeft: "4px" }}>작성자 : {i.writer}</span>
              <span style={{ marginLeft: "4px" }}>제목 : {i.title}</span>
              <span style={{ marginLeft: "4px" }}>
                내용 : {i ? i.contents : "불러오는 중"}
              </span>
            </div>
          )
        )
      ) : (
        <>로딩 중...</>
      )}
    </div>
  );
}
