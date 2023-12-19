import { gql, useQuery } from "@apollo/client";
import CheckBox from "./checkBox";

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
export default function StopPropagation() {
  const { data } = useQuery(FETCHBOARDS);
  console.log("data : ", data);

  // const onClickContents = (e: React.MouseEvent<HTMLDivElement>) => {
  //   // if (e.target instanceof HTMLDivElement) {
  //   //   alert(`${e.target.id}님이 작성한 게시글입니다.`);
  //   // }

  //   alert(`${e.currentTarget.id}님이 작성한 게시글입니다.`);
  // };

  const qqq1 = () => {
    alert("클릭1");
  };
  const qqq2 = () => {
    alert("클릭2");
  };

  const qqq4 = (e) => {
    e.stopPropagation();
    alert("클릭4");
  };
  const qqq5 = () => {
    alert("클릭5");
  };
  return (
    <div>
      {data?.fetchBoards.map(
        (i: { writer: string; contents: string; title: string; number }) => (
          <div
            key={i.number}
            style={{ marginTop: "10px" }}
            id={i.writer}
            onClick={qqq1}
          >
            <span style={{ marginLeft: "4px" }} onClick={qqq2}>
              <CheckBox />
            </span>
            <span onClick={qqq4}>{i.number}</span>
            <span style={{ marginLeft: "4px" }} onClick={qqq5}>
              작성자 : {i.writer}
            </span>
            <span style={{ marginLeft: "4px" }}>제목 : {i.title}</span>
            <span style={{ marginLeft: "4px" }}>
              내용 : {i ? i.contents : ""}
            </span>
          </div>
        )
      )}
    </div>
  );
}
