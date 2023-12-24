import { useRouter } from "next/router";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNav from "./navigation";

const HIDDEN_HEADERS = ["/section14/14-01-props-children"];
interface ILayoutPropsType {
  children: JSX.Element;
}
export default function Layout(props: ILayoutPropsType): JSX.Element {
  const router = useRouter();
  console.log("router", router);
  console.log("router", router.asPath);
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  console.log("isHiddenHeader", isHiddenHeader);
  return (
    <>
      {!isHiddenHeader ? <LayoutHeader /> : <></>}
      <LayoutBanner />
      <LayoutNav />
      <div
        style={{
          display: "flex",
          height: "100%",
        }}
      >
        <div style={{ width: "100px", backgroundColor: "tomato" }}>
          사이드 바
        </div>
        <div style={{ width: "79%" }}>{props.children}</div>
      </div>
      <LayoutFooter />
    </>
  );
}
