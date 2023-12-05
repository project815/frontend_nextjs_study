import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
const CREATEPRODUCT = gql`
  mutation createProduct(
    $seller: String
    $createProductInput: CreateProductInput!
  ) {
    createProduct(seller: $seller, createProductInput: $createProductInput) {
      _id
      number
      message
    }
  }
`;
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

      router.push(`/section05/quiz/${result.data.createProduct._id}`);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form onSubmit={onClickCreateProduct}>
      <div>제품 등록 페이지</div>
      <div>
        <span>작성자 : </span>
        <input onChange={onChnageSeller} type="text" />
      </div>
      <div>
        <span>상품명 : </span>
        <input onChange={onChnageName} type="text" />
      </div>
      <div>
        <span>상세 : </span>
        <input onChange={onChnageDetail} type="text" />
      </div>
      <div>
        <span>가격 : </span>
        <input onChange={onChnagePrice} type="number" />
      </div>
      <button type="submit">등록</button>
    </form>
  );
}
