import { createTest } from "../../src/firebaseApi/create";

export default function FirebasePage(): JSX.Element {
  const onClickCreateTest = () => {
    console.log(
      "process.env.FIREBASE_API_KEY : ",
      process.env.NEXT_PUBLIC_FIREBASE_API_KEY
    );
    createTest()
      .then((result) => {
        console.log("???");
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <button onClick={onClickCreateTest}>생성 </button>
    </>
  );
}
