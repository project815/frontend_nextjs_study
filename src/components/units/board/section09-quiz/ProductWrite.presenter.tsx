import type { Maybe } from "graphql/jsutils/Maybe";
import type { IProductReturn } from "../../../../commons/types/generated/types";

interface PropsType {
  isEdit: boolean;
  defaultValue?: Maybe<IProductReturn> | undefined;
  onChangeSeller: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeDetail: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePrice: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickMoveToBack: () => void;
  onCilckSubmit: () => void;
}
export default function Section09QuizProductUI(props: PropsType) {
  const {
    isEdit,
    defaultValue,
    onChangeSeller,
    onChangeName,
    onChangeDetail,
    onChangePrice,
    onClickMoveToBack,
    onCilckSubmit,
  } = props;

  console.log("??@@@@@@@ : ", defaultValue);

  return (
    <div>
      {isEdit ? (
        " "
      ) : (
        <div>
          판매자 :
          <input
            type="text"
            onChange={onChangeSeller}
            defaultValue={defaultValue?.seller ?? ""}
          />
        </div>
      )}

      <div>
        상품 이름 :
        <input
          type="text"
          onChange={onChangeName}
          defaultValue={defaultValue?.name ?? ""}
        />
      </div>
      <div>
        상품 정보 :
        <input
          type="text"
          onChange={onChangeDetail}
          defaultValue={defaultValue?.detail ?? ""}
        />
      </div>
      <div>
        상품 가격 :
        <input
          type="number"
          onChange={onChangePrice}
          defaultValue={defaultValue?.price ?? ""}
        />
      </div>

      <div>
        <button onClick={onClickMoveToBack}>뒤로가기</button>
        <button onClick={onCilckSubmit}>{isEdit ? "수정" : "생성"}하기</button>
      </div>
    </div>
  );
}
