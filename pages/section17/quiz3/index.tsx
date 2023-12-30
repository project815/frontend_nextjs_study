import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Section17Quiz3(): JSX.Element {
  const [url, setUrl] = useState<string>("");
  useEffect(() => {
    axios
      .get("https://dog.ceo/api/breeds/image/random")
      .then((result) => {
        console.log("result : ", result.data.message);
        setUrl(String(result.data.message));
      })
      .catch((Error) => {
        console.log("error : ", Error);
      });
  }, []);

  return (
    <>
      <img src={url} />
      <Image src={url} alt="" width={100} height={100} />
    </>
  );
}
