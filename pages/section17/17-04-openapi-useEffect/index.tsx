import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenApiUseEffect() {
  const [dog, setDog] = useState<string>("");
  useEffect(() => {
    const onClickSync = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      console.log("data : ", result.data.message);
      setDog(String(result.data.message));
    };
    void onClickSync();
  }, []);
  return (
    <div>
      <img src={dog} alt="" />
      {/* <button onClick={onClickSync}>REST-API(동기) 요청하기</button> */}
    </div>
  );
}
