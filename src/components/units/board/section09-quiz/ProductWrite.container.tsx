import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";

import Section09QuizProductUI from "./ProductWrite.presenter";
import { CREATEPRODUCT, UPDATEPRODUCT } from "./ProductWrite.query";
//1.수정된 사항 없으면 경고 창 띄우기
//2. 뒤로가기 버튼 추가.
//3. 변경된 것에 대해서만
//4. 판매자에 대한 로직 분할 O
export default function Section09QuizProduct(props) {
  const { isEdit, defaultValue } = props;
  const router = useRouter();

  const [seller, setSeller] = useState<string>(defaultValue?.seller);
  const [name, setName] = useState<string>(defaultValue?.name);
  const [detail, setDetail] = useState<string>(defaultValue?.detail);
  const [price, setPrice] = useState<number>(defaultValue?.price);

  const [createProudct] = useMutation(CREATEPRODUCT);
  const [updateProduct] = useMutation(UPDATEPRODUCT);

  const onChangeSeller = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeller(e.target.value);
  };
  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeDetail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetail(e.target.value);
  };
  const onChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };

  const onClickCreateProduct = async () => {
    const result = await createProudct({
      variables: {
        seller: seller,
        createProductInput: {
          name: name,
          detail: detail,
          price: price,
        },
      },
    });

    router.push(`/section09/quiz/${result.data.createProduct._id}`);
  };
  const onClickUpdateProduct = async () => {
    const result = await updateProduct({
      variables: {
        productId: router.query.id,
        updateProductInput: {
          name: name,
          detail: detail,
          price: price,
        },
      },
    });

    console.log("Data : ", result);

    router.push(`/section09/quiz/${result.data.updateProduct._id}`);
  };

  return (
    <Section09QuizProductUI
      isEdit={isEdit}
      defaultValue={defaultValue}
      onChangeSeller={onChangeSeller}
      onChangeName={onChangeName}
      onChangeDetail={onChangeDetail}
      onChangePrice={onChangePrice}
      onCilckSubmit={isEdit ? onClickUpdateProduct : onClickCreateProduct}
    />
  );
}
