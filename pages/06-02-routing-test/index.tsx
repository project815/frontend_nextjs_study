import Router from "next/router";

export default function RoutingTest() {
  const handleClickPathName = () => {
    const pathName = Router.pathname;
    alert(pathName);
  };

  const handleClickAsPath = () => {
    const path = Router.asPath;
    alert(path);
  };

  //   push로 이동시키면 history stack에 쌓여서 뒤로가기가 가능하고
  // replace로 이동시키면 history stack에 안쌓여서 뒤로가기 불가능

  const handleClickBasePath = () => {
    const basePath = Router.basePath;
    alert(basePath);
  };

  const handleClickBack = () => {
    Router.back();
  };
  const handleClickPush = () => {
    Router.push("/");
  };

  const handleClickReplace = () => {
    Router.replace("");
  };
  const handleClickReload = () => {
    Router.reload();
  };

  console.log("Router : ", Router);
  return (
    <>
      <div>
        <button onClick={handleClickPathName}>
          현재 주소 위치 : Router.pathname
        </button>
        <button onClick={handleClickAsPath}>
          현재 위치 주소: Router.asPath
        </button>
        <button onClick={handleClickBasePath}>
          현재 위치 주소: Router.basePath
        </button>
        <button onClick={handleClickBack}>뒤로가기 버튼: Router.back()</button>
        <button onClick={handleClickPush}>
          현재 페이지에서, 다른 페이지로 이동: Router.push()
        </button>
        <button onClick={handleClickReload}>새로고침: Router.reload()</button>
        <button onClick={handleClickReplace}>
          현재 페이지 삭제 후, 다른 페이지로 이동: Router.replace()
        </button>
      </div>
    </>
  );
}
