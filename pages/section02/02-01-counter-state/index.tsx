import { useState } from "react";

export default function CounterStatePage(): JSX.Element {
  const [count, setCount] = useState(0);

  const onClickCountUp = (): void => {
    setCount(count + 1);
  };

  const onClickCountDown = (): void => {
    setCount(count - 1);
  };
  return (
    <div>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
      <button onClick={onClickCountDown}>카운트 내리기</button>
    </div>
  );
}
