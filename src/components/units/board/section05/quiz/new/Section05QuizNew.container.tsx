import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import Section05QuizNewUI from "./Section05QuizNew.presenter";
import { CREATEPRODUCT } from "./Section05QuizNew.query";

export default function Section05QuizNew() {
  const [createProduct] = useMutation(CREATEPRODUCT);
  const router = useRouter();

  const [seller, setSeller] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [detail, setDetail] = useState<string>("");
  const [price, setPrice] = useState<number>();

  const onChnageSeller = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeller(e.target.value);
  };
  const onChnageName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChnageDetail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetail(e.target.value);
  };
  const onChnagePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };

  const onClickCreateProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(">>??");
    if (!seller || !name || !detail || !price) {
      alert("입력되지 않은 정보가 있습니다.");
      return;
    }

    try {
      const result = await createProduct({
        variables: {
          seller,
          createProductInput: {
            name,
            detail,
            price,
          },
        },
      });

      await router.push(`/section05/quiz/${result.data.createProduct._id}`);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <Section05QuizNewUI
      onChnagePrice={onChnagePrice}
      onClickCreateProduct={onClickCreateProduct}
      onChnageSeller={onChnageSeller}
      onChnageDetail={onChnageDetail}
      onChnageName={onChnageName}
    />
  );
}
