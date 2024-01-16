import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";

const GLOBAL_STATE = new InMemoryCache(); // rerender가 되더라도 cache가 초기화되지 않는다. 페이지 이동이에도 캐쉬가 남아 있음
interface IApolloSettingPropsType {
  children: JSX.Element;
}

export default function ApolloSetting(props: IApolloSettingPropsType) {
  const uploadLink = createUploadLink({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql", // section15~
  });
  const client = new ApolloClient({
    link: ApolloLink.from([uploadLink]),

    // uri: "http://backend-practice.codebootcamp.co.kr/graphql", // section15~
    // uri: "http://practice.codebootcamp.co.kr/graphql", // section01 ~ section14 까지의 실습용 graphql 주소
    cache: GLOBAL_STATE, // 컴퓨터의 메모리에다가 벡엔드에서 반아온 데이터 임시저장
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
