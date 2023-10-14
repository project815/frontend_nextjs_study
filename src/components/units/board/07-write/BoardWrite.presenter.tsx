// import { BlueButton, RedInput } from "./BoardWrite.styles";
import * as S from "./BoardWrite.styles";

//export defalut 와 export를 함쎄 사용하는 방법.
import qqq, { BlueButton, RedInput } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  console.log("props : ", props);
  const { onClickSubmit, setInfo, isfill } = props;
  //자바스크립트 영역

  //HTML 영역
  return (
    <>
      <div>rrrrrrrr</div>
      <form onSubmit={onClickSubmit}>
        <div>
          <span>writer : </span>
          <S.RedInput
            isfill={isfill}
            border-color="red"
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
          <S.RedInput
            isfill={isfill}
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
          <S.RedInput
            isfill={isfill}
            type="text"
            onChange={(event) =>
              setInfo((prevInfo) => ({
                ...prevInfo,
                contents: event.target.value,
              }))
            }
          />
        </div>
        <S.BlueButton isfill={isfill}>제출</S.BlueButton>
      </form>
      <S.BlueButton isfill={isfill} onClick={onClickSubmit}>
        GRAPHQL
      </S.BlueButton>
    </>
  );
}
