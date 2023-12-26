import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import type { IQuery } from "../../../src/commons/types/generated2/types";

const FETCHBOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function MapBoardsPage() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">>(FETCHBOARDS);

  const [selectedIdx, setSelectedIdx] = useState<number>(-1);

  const onClickEdit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const result = Number(e.currentTarget.id);
    setSelectedIdx(result);
  };
  return (
    <div>
      <div>
        {data?.fetchBoards.map((i, index) =>
          index !== selectedIdx ? (
            <div key={i._id} style={{ marginTop: "10px" }}>
              <span style={{ marginLeft: "4px" }}>
                내용 : {i ? i.contents : "불러오는 중"}
              </span>
              <button id={String(index)} onClick={onClickEdit}>
                수정하기
              </button>
            </div>
          ) : (
            <input key={index} />
          )
        )}
      </div>
    </div>
  );
}
