import ChildPage from "./02-child";

export default function ParentPage(): JSX.Element {
  return (
    <>
      {/* <ChildPage count={34} /> */}
      {ChildPage({ count: 31 })}
    </>
  );
}

// 컴퓨넌트는 함수랑 같은 거구나!!
// 컴퓨넌트는 함수를 호출하는 것과 같은 것이구나!!
