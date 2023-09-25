import axios from "axios";
import { useState } from "react";

export default function RestGetPage() {
  const [data, setData] = useState("");
  const onClickAsync = () => {
    const result = axios.get("https://koreanjson.com/posts/1");
    console.log("data : ", result);
  };
  const onClickSync = async () => {
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log("data : ", result);
    setData(result.data);
  };
  return (
    <>
      <button onClick={onClickAsync}>REST-APT 요청(비동기)</button>
      <button onClick={onClickSync}>REST-APT 요청(동기)</button>
      <div>{data.title}</div>
    </>
  );
}
