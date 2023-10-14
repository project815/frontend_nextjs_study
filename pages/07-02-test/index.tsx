//백엔드 데이터라고 가정 - 검포넌트 위에 만든 이유 ? 컴포넌트가 리랜더링되어도 다시 만들어지지 않음.
const FRUIT = [
  { number: 1, title: "가오동" },
  { number: 2, title: "석교동" },
  { number: 3, title: "노량진" },
  { number: 4, title: "봉은사" },
  { number: 5, title: "오솔길" },
  { number: 6, title: "뭐냐넌" },
];

export default function test() {
  const aaa = [<div>가오동</div>, <div>석교동</div>, <div>노량진</div>];

  const bbb = [
    { number: 1, title: "가오동" },
    { number: 2, title: "석교동" },
    { number: 3, title: "노량진" },
  ].map((ele) => {
    return (
      <div>
        {ele.number}. {ele.title}
      </div>
    );
  });

  const ccc = FRUIT.map((ele) => {
    return (
      <div>
        {ele.number}. {ele.title}
      </div>
    );
  });

  const nameList = ["a", "b", "c", "d", "e"].map((ele) => {
    return ele + " : +";
  });
  console.log(nameList);
  return (
    <>
      <h3>aaa</h3>
      <div>{aaa}</div>
      <h3>bbb</h3>
      <div>{bbb}</div>
      <h3>ccc</h3>
      <div>{ccc}</div>
      <h3>바로</h3>
      {FRUIT?.map((ele) => {
        return (
          <div>
            {ele.number}. {ele.title}
          </div>
        );
      })}
    </>
  );
}
