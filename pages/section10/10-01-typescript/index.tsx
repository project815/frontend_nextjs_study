// export default function SectionTypescriptPage() {
//   let aaa = "123132";
//   //타입 추론
//   aaa = 12;

//   let bbb: string;
//   bbb = "asdfasd";
//   bbb = 123;

//   let ccc: string | number = 1000;
//   ccc = "1000원";

//   //숫자타입
//   let ddd: number = 10;

//   //불린타입
//   let eee: boolean = true;
//   eee = false;
//   eee = "false"; //true임

//   //배열 타입
//   let fff: number[] = [1, 2, 3, "안녕하세요."];
//   let ggg: string[] = [1, "2", "3", "안녕하세요."];
//   let hhh: (string | number)[] = ["철수", 1];

//   interface IProfile {
//     name: string;
//     age: number | string;
//     school: string;
//     hobby?: string;
//   }

//   //객체타입
//   const profile = {
//     name: "철수",
//     age: 12,
//     school: "다람쥐초등학교",
//   };
//   profile.name = "철수";
//   profile.age = "12";
//   profile.hobby = "헬스";

//   const profile2: IProfile = {
//     name: "철수",
//     age: 12,
//     school: "다람쥐초등학교",
//   };
//   profile2.name = "철수";
//   profile2.age = "12";
//   profile2.hobby = "헬스";

//   //함수타입
//   function add(num1: number, num2: number, unit: string): string {
//     return num1 + num2 + unit;
//   }

//   add(1, 2, 3);

//   add("1", 2, "3");

//   const result = add(1, 2, "3");//리턴 타입 예측 가능

//   return <></>;
// }
