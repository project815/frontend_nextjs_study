import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Section18Quiz1(): JSX.Element {
  const router = useRouter();
  const [isChanged, setIsChanged] = useState<boolean>(false);
  // 랜더링이 끝난 후 실행
  useEffect(() => {
    console.log("랜더링이 끝난 후 실행");
    console.log("Rendered!");
  }, []);

  // 랜더링이 끝난 후 & 랜더링 중 업데이트 시
  useEffect(() => {
    console.log("랜더링 중 실행");
    console.log("Changed!!");
  });

  // 다른 페이지로 랜더링될 때
  useEffect(() => {
    return () => {
      console.log("사라지고 전에 실행");
    };
  }, []);

  const onClickChange = (): void => {
    setIsChanged(!isChanged);
  };

  const onClickMoveToOtherPage = (): void => {
    void router.push("/");
  };

  return (
    <>
      <button onClick={onClickChange}>변경</button>
      <button onClick={onClickMoveToOtherPage}>이동</button>
    </>
  );
}
