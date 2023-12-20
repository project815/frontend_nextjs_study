import Example from "../../../src/components/units/14-props-children-example";

export default function PropsChildrenPage(): JSX.Element {
  return (
    <>
      <div> +++++++++++++++++++ 빨간색 파란색 초록색 +++++++++++++++++++++</div>
      <Example school="다람쥐 초등학교">
        <>
          <input type="text" />
          <div>저는 철수 인디유</div>
          <button>클릭</button>
        </>
      </Example>
      <div> +++++++++++++++++++ 빨간색 파란색 초록색 +++++++++++++++++++++</div>
    </>
  );
}
