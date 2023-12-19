import { useState } from "react";

export default function PrevState(): JSX.Element {
  const [count, setCount] = useState(0);

  const onClickCountUp = (): void => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
    // useState는 임시 공간에 넣고 가장 마지막의 값을 업데이트한다.

    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    // 하지만 prev를 통해 임시저장공간의 값을 가져와서 + 1을 할 수 있고, 값을 더 올릴 수 있음.
  };

  //   const onClickCountDown = (): void => {
  //     setCount(count - 1);
  //   };
  return (
    <div>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
      {/* <button onClick={onClickCountDown}>카운트 내리기</button> */}
    </div>
  );
}
