import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  const router = useRouter();

  const onClickMove1 = () => {
    router
      .push("/section05/05-03-static-routing-board-query-moved/1")
      .then()
      .catch((error) => {
        console.log("error : ", error);
      });
  };

  const onClickMove2 = () => {
    router
      .push("/section05/05-03-static-routing-board-query-moved/2")
      .then()
      .catch((error) => {
        console.log("error : ", error);
      });
  };

  const onClickMove3 = () => {
    router
      .push("/section05/05-03-static-routing-board-query-moved/3")
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div> 페이지 이동하기</div>
      <button onClick={onClickMove1}>1 페이지 이동</button>
      <button onClick={onClickMove2}>2 페이지 이동</button>
      <button onClick={onClickMove3}>3 페이지 이동</button>
    </div>
  );
}
