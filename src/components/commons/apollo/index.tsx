import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from "@apollo/client";
import createUploadLink from "apollo-upload-client/createUploadLink.mjs";

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
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
