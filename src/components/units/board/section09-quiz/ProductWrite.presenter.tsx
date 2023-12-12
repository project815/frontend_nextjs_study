export default function Section09QuizProductUI(props) {
  const {
    isEdit,
    defaultValue,
    onChangeSeller,
    onChangeName,
    onChangeDetail,
    onChangePrice,
    onCilckSubmit,
  } = props;

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
            defaultValue={defaultValue?.seller}
          />
        </div>
      )}

      <div>
        상품 이름 :
        <input
          type="text"
          onChange={onChangeName}
          defaultValue={defaultValue?.name}
        />
      </div>
      <div>
        상품 정보 :
        <input
          type="text"
          onChange={onChangeDetail}
          defaultValue={defaultValue?.detail}
        />
      </div>
      <div>
        상품 가격 :
        <input
          type="number"
          onChange={onChangePrice}
          defaultValue={defaultValue?.price}
        />
      </div>
      <button onClick={onCilckSubmit}>{isEdit ? "수정" : "생성"}하기</button>
    </div>
  );
}
