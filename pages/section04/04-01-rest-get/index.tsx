import axios from "axios";

export default function RestGetPage() {
  const onClickAsync = () => {
    const result = axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log("data : ", result);
  };
  const onClickSync = async () => {
    const result = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    console.log("data : ", result);
  };
  return (
    <div>
      <button onClick={onClickAsync}>REST-API(비동기) 요청하기</button>
      <button onClick={onClickSync}>REST-API(동기) 요청하기</button>
    </div>
  );
}
