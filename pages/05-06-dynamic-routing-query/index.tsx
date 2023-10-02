import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  const router = useRouter();

  const onClickPageMove1 = () => {
    router.push("/05-07-dynamic-routed-query249");
  };

  const onClickPageMove2 = () => {
    router.push("/05-07-dynamic-routed-query/250");
  };

  const onClickPageMove3 = () => {
    router.push("/05-07-dynamic-routed-query/251");
  };

  const onClickPageMove100 = () => {
    router.push("/05-07-dynamic-routed-query/252");
  };
  return (
    <>
      <button onClick={onClickPageMove1}>페이지1 이동</button>
      <button onClick={onClickPageMove2}>페이지2 이동</button>
      <button onClick={onClickPageMove3}>페이지3 이동</button>
      <button onClick={onClickPageMove100}>페이지100 이동</button>
    </>
  );
}
