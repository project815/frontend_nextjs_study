import { gql, useQuery } from "@apollo/client";
import _ from "lodash";
import { useEffect, useState } from "react";
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

export default function InfiniteScroller() {
  const [isFetching, setIsFetching] = useState(false);
  const { data, fetchMore } =
    useQuery<Pick<IQuery, "fetchBoards">>(FETCHBOARDS);

  const onLoadMore = (): void => {
    if (data === undefined || isFetching) return;
    setIsFetching(true);
    void fetchMore({
      variables: { page: Math.ceil((data?.fetchBoards.length ?? 10) / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        setIsFetching(false);
        if (!fetchMoreResult.fetchBoards) {
          return { fetchBoards: [...prev.fetchBoards] };
        }
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  const handleScroll: EventListener = _.throttle(() => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    //     scrollTop: 현재 스크롤 위치의 세로 좌표입니다. 이 값은 페이지 상단에서 현재 화면에 보이는 부분의 상단까지의 거리를 나타냅니다. 스크롤이 위로 올라갈수록 이 값은 증가합니다.

    // scrollHeight: 전체 문서의 세로 길이입니다. 즉, 스크롤이 가능한 전체 영역의 높이를 말합니다. 문서의 콘텐츠가 화면보다 길 경우 이 값은 화면보다 클 수 있습니다.

    // clientHeight: 현재 보이는 화면의 세로 길이입니다. 스크롤바를 포함한 현재 브라우저 창의 높이를 나타냅니다. 이 값은 고정되어 있으며 문서의 높이와는 관계가 없습니다.

    console.log(
      `scrollTop: ${scrollTop}, scrollHeight: ${scrollHeight} , clientHeight: ${clientHeight}`
    );

    if (scrollTop + clientHeight >= scrollHeight - 10) {
      onLoadMore();
    }
  }, 300); // Adjust the throttle time according to your needs

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div
      onScroll={() => {
        console.log(">ASDF?SADFAS");
      }}
      onMouseDown={() => {
        console.log("???");
      }}
    >
      <div>
        <section>
          {data?.fetchBoards.map((i) => (
            <div key={i._id} style={{ marginTop: "10px" }}>
              <span style={{ marginLeft: "4px" }}>작성자 : {i.writer}</span>
              <span style={{ marginLeft: "4px" }}>제목 : {i.title}</span>
              <span style={{ marginLeft: "4px" }}>
                내용 : {i ? i.contents : "불러오는 중"}
              </span>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
