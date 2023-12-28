import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function FunctionCountPage() {
  const [count, setCount] = useState(0);
  const router = useRouter();
  // componentDidMount(): void {
  //   console.log("그리고 나서 실행!!");
  // }

  // componentDidUpdate(): void {
  //   console.log("변경되고 나서 실행");
  // }

  // componentWillUnmount(): void {
  //   console.log("사라지기 전에 실행");
  //   // 예) 채팅방 나가기 api
  //   // 채팅창을 나가기 버튼을 누를 때 이외에도 다른 페이지로 이동할 때도 모든 버튼에 나갔다는 api를 호출해야하는가??
  //   // 이거 하나면 된다!! 올!~
  // }

  // componentDidMount
  useEffect(() => {
    console.log("그리고 나서 실행");
  }, []);

  // componentDidMount + componentDidUpdate
  useEffect(() => {
    console.log("변경되고 나서 실행");
  });

  // componentWillUnmount
  useEffect(() => {
    return () => {
      console.log("사라지고 전에 실행");
    };
  }, []);

  // 1. 하나로 합치기
  useEffect(() => {
    console.log("그리고 나서 실행");
    console.log("변경되고 나서 실행");

    return () => {
      console.log("사라지고 전에 실행");
    };
  }); // 배열을 포함하지만 않으면 모든 변경사항
  // 의존성 배열로 해당 배열에 추가한 값에 대한 변경에 대해 업데이트가 이루어짐

  // 2. useEffect잘못된 사용법 // 무한 푸르에 빠짐
  // 모든 랜더링을 마친 뒤 실행된다.
  // setCount로 state의 값이 변경된다.
  // 리랜더링이 발생한다.
  // useEffect가 실행된다.
  // 무한 반복.
  // useEffect(() => {
  //   setCount(count + 1);
  // }, [count]);

  const onClickCountUp = (): void => {
    setCount(count + 1);
  };

  const onClickMove = (): void => {
    void router.push("/");
  };

  console.log("???");

  return (
    <>
      <div>카운트 : {count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
      <button onClick={onClickMove}>페이지 이동</button>
    </>
  );
}
