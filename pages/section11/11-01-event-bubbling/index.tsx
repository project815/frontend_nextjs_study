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
export default function EventBubbling() {
  const { data } = useQuery(FETCHBOARDS);
  console.log("data : ", data);

  const onClickContents = (e: React.MouseEvent<HTMLDivElement>) => {
    // if (e.target instanceof HTMLDivElement) {
    //   alert(`${e.target.id}님이 작성한 게시글입니다.`);
    // }

    alert(`${e.currentTarget.id}님이 작성한 게시글입니다.`);
  };
  return (
    <div>
      {data?.fetchBoards.map(
        (i: { writer: string; contents: string; title: string; number }) => (
          <div
            key={i.number}
            style={{ marginTop: "10px" }}
            id={i.writer}
            onClick={onClickContents}
          >
            <span style={{ marginLeft: "4px" }}>
              <input type="checkbox" />
            </span>
            <span>{i.number}</span>
            <span style={{ marginLeft: "4px" }}>작성자 : {i?.writer}</span>
            <span style={{ marginLeft: "4px" }}>제목 : {i?.title}</span>
            <span style={{ marginLeft: "4px" }}>
              내용 : {i ? i.contents : ""}
            </span>
          </div>
        )
      )}
    </div>
  );
}
