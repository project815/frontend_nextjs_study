import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const CREATEBOARD = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      message
      number
    }
  }
`;

export default function GraphQL() {
  const router = useRouter();
  const [createBoard] = useMutation(CREATEBOARD);

  const [info, setInfo] = useState({ writer: "", title: "", contents: "" });
  const onClickSubmit = async (event) => {
    console.log("실행");
    event.preventDefault();

    try {
      const result = await createBoard({
        variables: {
          // variables $역할
          writer: info.writer,
          title: info.title,
          contents: info.contents,
        },
      });

      alert(result.data.createBoard.message);

      console.log("id : ", result.data.createBoard.number);
      router.push(
        `05-09-dynamic-routed-board-query/${result.data.createBoard.number}`
      );
    } catch (error) {
      console.log("error : ", error);
    }
  };

  useEffect(() => {
    console.log("info : ", info);
  }, [info]);

  return (
    <>
      <form onSubmit={onClickSubmit}>
        <div>
          <span>writer : </span>
          <input
            type="text"
            onChange={(event) =>
              setInfo((prevInfo) => ({
                ...prevInfo,
                writer: event.target.value,
              }))
            }
          />
        </div>
        <div>
          <span>title : </span>
          <input
            type="text"
            onChange={(event) =>
              setInfo((prevInfo) => ({
                ...prevInfo,
                title: event.target.value,
              }))
            }
          />
        </div>
        <div>
          <span>contents : </span>
          <input
            type="text"
            onChange={(event) =>
              setInfo((prevInfo) => ({
                ...prevInfo,
                contents: event.target.value,
              }))
            }
          />
        </div>
        <button>제출</button>
      </form>
      <button onClick={onClickSubmit}>GRAPHQL</button>
    </>
  );
}
