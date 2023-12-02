import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

export default function App({ Component }) {
  const client = new ApolloClient({
    // uri: "https://backendonline.codebootcamp.co.kr/graphql",

    uri: "http://practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <div>
      <div>--------------app.js 시작-------------</div>
      <ApolloProvider client={client}>
        <Component />
      </ApolloProvider>
      <div>--------------app.js 마지막-------------</div>
    </div>
  );
}
