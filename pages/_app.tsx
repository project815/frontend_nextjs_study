import type { AppProps } from "next/app";
import ApolloSetting from "../src/components/commons/apollo";
import Layout from "../src/components/commons/layout";

export default function App({ Component }: AppProps): JSX.Element {
  return (
    <div>
      <div>--------------app.js 시작-------------</div>
      <ApolloSetting>
        <Layout>
          <Component />
        </Layout>
      </ApolloSetting>
      <div>--------------app.js 마지막-------------</div>
    </div>
  );
}
