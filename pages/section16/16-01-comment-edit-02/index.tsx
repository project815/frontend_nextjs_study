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

  const [selectedIdx, setSelectedIdx] = useState<boolean[]>(
    new Array(10).fill(false)
  );

  const onClickEdit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    // const qqq = selectedIdx; // 배열은 주소값 복사가 이루어짐,  qqq가 변경되면 selectedIdx의 값도 변경함. setState를 하더라도 값이 동일함으로 동작하지 않음.
    const qqq = [...selectedIdx]; // 배열을 스프레드 연산자로 복사, 주소값이 달라 qqq가 변경되어도 selectIdx가 변경되지 않음 setState가 동작함.
    console.log("selectedIdx : ", selectedIdx);
    qqq[Number(e.currentTarget.id)] = true;

    setSelectedIdx(qqq);
  };

  console.log("selectedIdx : ", selectedIdx);
  return (
    <div>
      <div>
        {data?.fetchBoards.map((i, index) =>
          !selectedIdx[index] ? (
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
