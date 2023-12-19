// 과일

// 컴포넌트 위에 만든 이유 : 컴포넌트가 리랜더링되도 다시 안 만들어지도록 하기 위해서
const FRUITS = [
  { number: 1, title: "레드향" },
  { number: 2, title: "샤인머스켓" },
  { number: 3, title: "산청딸기" },
  { number: 4, title: "한라봉" },
  { number: 5, title: "사과" },
  { number: 6, title: "애플망고" },
  { number: 7, title: "딸기" },
  { number: 8, title: "천혜향" },
  { number: 9, title: "과일선물세트" },
  { number: 10, title: "귤" },
];

export default function MapFruitPage() {
  const fruit = FRUITS.map((ele) => (
    <div key={ele.number}>
      {ele.number} {ele.title}
    </div>
  ));
  return (
    <div>
      {fruit}
      <div>
        {FRUITS?.map((ele) => (
          <div key={ele.number}>
            {ele.number} {ele.title}
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
}
