export default function MapElPage(): JSX.Element {
  // 1. 기본 방법
  ["철수", "영희", "훈이"].forEach((el, index) => {
    console.log(
      "---------------------------1. 기본 방법-----------------------------"
    );
    console.log("el : ", el);
    console.log("index : ", index);
    console.log();
  });

  // 2. 매개변수 변경한 방법
  ["철수", "영희", "훈이"].forEach((asdf, qwer) => {
    console.log(
      "---------------------------2. 매개변수 변경한 방법----------------------------"
    );
    console.log("el : ", asdf);
    console.log("index : ", qwer);
    console.log();
  });

  // 3. 함수 선언식 방법
  ["철수", "영희", "훈이"].forEach(function (asdf, qwer) {
    console.log(
      "---------------------------3. 함수 선언식 방법----------------------------"
    );
    console.log("el : ", asdf);
    console.log("index : ", qwer);
    console.log();
  });

  // 4. el과 index 바꾸기
  ["철수", "영희", "훈이"].forEach((index, el) => {
    console.log(
      "---------------------------4. el과 index 바꾸기-----------------------------"
    );
    console.log("el : ", el);
    console.log("index : ", index);
    console.log();
  });

  return <></>;
}
