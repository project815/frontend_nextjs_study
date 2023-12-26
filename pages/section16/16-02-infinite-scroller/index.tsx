import { gql, useQuery } from "@apollo/client";
import InfiniteScroll from "react-infinite-scroller";
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
  const { data, fetchMore } =
    useQuery<Pick<IQuery, "fetchBoards">>(FETCHBOARDS);

  const onLoadMore = (): void => {
    if (data === undefined) return;
    void fetchMore({
      variables: { page: Math.ceil((data?.fetchBoards.length ?? 10) / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.fetchBoards) {
          return { fetchBoards: [...prev.fetchBoards] };
        }
        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };
  return (
    <div>
      <div>
        <InfiniteScroll
          pageStart={0}
          loadMore={onLoadMore}
          hasMore={true || false}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
        >
          {data?.fetchBoards.map((i) => (
            <div key={i._id} style={{ marginTop: "10px" }}>
              <span style={{ marginLeft: "4px" }}>작성자 : {i.writer}</span>
              <span style={{ marginLeft: "4px" }}>제목 : {i.title}</span>
              <span style={{ marginLeft: "4px" }}>
                내용 : {i ? i.contents : "불러오는 중"}
              </span>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
}
