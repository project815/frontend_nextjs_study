import type { IQuery } from "../../../commons/types/generated2/types";

interface BoardListProps {
  data: Pick<IQuery, "fetchBoards"> | undefined;
}
export default function BoardList(props: BoardListProps) {
  const { data } = props;
  return (
    <>
      <div>
        {data?.fetchBoards.map((i) => (
          <div key={i._id} style={{ marginTop: "10px" }}>
            <span style={{ marginLeft: "4px" }}>작성자 : {i.writer}</span>
            <span style={{ marginLeft: "4px" }}>제목 : {i.title}</span>
            <span style={{ marginLeft: "4px" }}>
              내용 : {i ? i.contents : "불러오는 중"}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
