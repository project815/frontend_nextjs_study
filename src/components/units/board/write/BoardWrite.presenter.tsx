export default function BoardWriteUI(props) {
  console.log("props : ", props);
  const { onClickSubmit, setInfo } = props;
  //자바스크립트 영역

  //HTML 영역
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
