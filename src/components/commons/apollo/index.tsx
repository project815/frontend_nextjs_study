import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

interface IApolloSettingPropsType {
  children: JSX.Element;
}
export default function ApolloSetting(props: IApolloSettingPropsType) {
  const client = new ApolloClient({
    // uri: "https://backendonline.codebootcamp.co.kr/graphql",

    uri: "http://practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
