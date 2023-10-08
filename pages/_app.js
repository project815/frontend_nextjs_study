import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

export default function App({ Component, pageProps }) {
  const client = new ApolloClient({
    // uri: "https://backendonline.codebootcamp.co.kr/graphql",

    uri: "http://practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <div>qqqqqq</div>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
