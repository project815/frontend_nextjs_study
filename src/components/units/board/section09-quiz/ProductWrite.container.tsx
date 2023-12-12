import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useRouter } from "next/router";

import Section09QuizProductUI from "./ProductWrite.presenter";
import { CREATEPRODUCT, UPDATEPRODUCT } from "./ProductWrite.query";
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

  const onClickMoveToBack = () => {
    router.back();
  };

  const onClickCreateProduct = async () => {
    try {
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
    } catch (error) {
      console.log("error : ", error);
    }
  };
  const onClickUpdateProduct = async () => {
    const myVariables: {
      productId: string | string[];
      updateProductInput: {
        name?: string;
        detail?: string;
        price?: number;
      };
    } = {
      productId: router.query.id,
      updateProductInput: {},
    };
    if (name) myVariables.updateProductInput.name = name;
    if (detail) myVariables.updateProductInput.detail = detail;
    if (price) myVariables.updateProductInput.price = price;

    try {
      const result = await updateProduct({
        variables: myVariables,
      });
      router.push(`/section09/quiz/${result.data.updateProduct._id}`);
    } catch (error) {
      alert("변경사항이 없습니다.");
      console.log("error : ", error);
    }
  };

  return (
    <Section09QuizProductUI
      isEdit={isEdit}
      defaultValue={defaultValue}
      onChangeSeller={onChangeSeller}
      onChangeName={onChangeName}
      onChangeDetail={onChangeDetail}
      onChangePrice={onChangePrice}
      onClickMoveToBack={onClickMoveToBack}
      onCilckSubmit={isEdit ? onClickUpdateProduct : onClickCreateProduct}
    />
  );
}
