import Router from "next/router";
import { Component } from "react";
export default class ClassCountPage extends Component {
  state = {
    count: 0,
  };

  componentDidMount(): void {
    console.log("그리고 나서 실행!!");
  }

  componentDidUpdate(): void {
    console.log("변경되고 나서 실행");
  }

  componentWillUnmount(): void {
    console.log("사라지기 전에 실행");
    // 예) 채팅방 나가기 api
    // 채팅창을 나가기 버튼을 누를 때 이외에도 다른 페이지로 이동할 때도 모든 버튼에 나갔다는 api를 호출해야하는가??
    // 이거 하나면 된다!! 올!~
  }

  onClickCountUp = (): void => {
    console.log(this.state.count);
    this.setState({ count: this.state.count + 1 });
  };

  onClickMove = (): void => {
    void Router.push("/");
  };

  render(): JSX.Element {
    return (
      <>
        <div>카운트 : {this.state.count}</div>
        <button onClick={this.onClickCountUp}>카운트 올리기</button>
        <button onClick={this.onClickMove}>페이지 이동</button>
      </>
    );
  }
}
