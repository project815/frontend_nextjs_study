import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";

import Section09QuizProductUI from "./ProductWrite.presenter";
import { CREATEPRODUCT, UPDATEPRODUCT } from "./ProductWrite.query";

export default function Section09QuizProduct(props) {
  const { isEdit, defaultValue } = props;
  const router = useRouter();

  const [seller, setSeller] = useState<string>(defaultValue?.seller);
  const [name, setName] = useState<string>(defaultValue?.newm);
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
