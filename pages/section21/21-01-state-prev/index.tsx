import { useState } from "react";

export default function CounterStatePage(): JSX.Element {
  const [count, setCount] = useState(0);

  const onClickCountUp = (): void => {
    // 1. 화살표 함수
    setCount((prev) => prev + 1);
    // 화살표 함수의 전체 표현식은 아래와 같다.
    setCount((prev) => {
      return prev + 1;
    });
    // {retrun}이 있으면 생략이 가능하다.
    setCount((prev) => prev + 1);
    // 대신에 ( )을 쓸 수 있고 특별한 이유가 없다면 생략 가능하다
    setCount((prev) => prev + 1);

    // 2. 함수의 선언식
    setCount(function (prev) {
      // 로직 추가 가능.
      // if(),
      // for(),
      // ... 등등
      return prev + 1;
    });

    // 3. 매개변수 바꾸기
    setCount((asdfasdfasdf) => asdfasdfasdf + 199);
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
    </div>
  );
}
