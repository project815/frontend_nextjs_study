import { Rate } from "antd";
import { useState } from "react";

export default function libraryStar(): JSX.Element {
  const [value, setValue] = useState(3);

  // 1단계 방식
  //   const onChangeStar = (value: number) => {
  //     setValue(value);
  //   };

  // 2단계 방식
  //   const onChangeStar = (value: number) => setValue(value);

  // 3단계 방식/

  return (
    <>
      1단계
      {/* <Rate onChange={onChangeStar} value={value} />; */}
      2단계
      {/* <Rate onChange={onChangeStar} value={value} />; */}
      2단계
      {/* <Rate onChange={() => setValue} value={value} />; */}
      <Rate onChange={setValue} value={value} />;
    </>
  );
}
