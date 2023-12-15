export interface IProfile {
  name: string;
  age: string;
  school: string;
  hobby: string;
}
//1.Partial 타입
type aaa = Partial<IProfile>;

//2. Required 타입
type bbb = Required<IProfile>;

//3. Pick 타입
type ccc = Pick<IProfile, "name" | "age">;

//4. omit 타입
type ddd = Omit<IProfile, "name" | "age">;

//유니온타입
type eee = "철수" | "영희" | "훈이";

const person1: eee = "영희";
const person2: string = "사과";
//5. Record 타입
type fff = Record<eee, IProfile>;

const person: fff = {
  철수: {
    name: "철수",
    age: "10",
    school: "다람쥐초등학교",
    hobby: "게임",
    candy: 10,
  },
  영희: {
    name: "영희",
    age: "10",
    school: "다람쥐초등학교",
    hobby: "게임",
    candy: 10,
  },
  훈이: {
    name: "훈이",
    age: "10",
    school: "다람쥐초등학교",
    hobby: "게임",
    candy: 10,
  },
};
person.영희;

//6.객체의 key들로 Union 타입 만들기
type ggg = keyof IProfile; //"name" | "age" | "school" | "hobby"
const myProfile1: ggg = "hobby";

//7.type vs interface ===>>>> interfacesms 선언병합 가능
export interface IProfile {
  candy: number;
}
const myProfile2: Partial<IProfile> = {
  candy: 10,
};
