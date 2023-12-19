import * as S from "./Section05QuizeDetail.style";

interface Propstype {
  data?: any;
}

export default function Section05QuizDetailUI(props: Propstype) {
  const { data } = props;
  return (
    <S.ProductDetailLayOut>
      <S.ProductDetailInputTitle>제품 상세 정보</S.ProductDetailInputTitle>
      <S.ProductInfoBody>
        <S.ProductDetailInfo>
          판매자 : {data?.fetchProduct?.seller}
        </S.ProductDetailInfo>
        <S.ProductDetailInfo>
          상품명 : {data?.fetchProduct?.name}
        </S.ProductDetailInfo>
        <S.ProductDetailInfo>
          제품 상세 정보 : {data?.fetchProduct?.detail}
        </S.ProductDetailInfo>
        <S.ProductDetailInfo>
          가격 : {data?.fetchProduct?.price}
        </S.ProductDetailInfo>
      </S.ProductInfoBody>
    </S.ProductDetailLayOut>
  );
}
