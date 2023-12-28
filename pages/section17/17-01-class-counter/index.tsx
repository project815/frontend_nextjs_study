import { Component } from "react";

export default class ClassCountPage extends Component {
  state = {
    count: 0,
  };

  onClickCountUp = (): void => {
    console.log(this.state.count);
    this.setState({ count: this.state.count + 1 });
  };

  render(): JSX.Element {
    return (
      <>
        <div>카운트 : {this.state.count}</div>
        <button onClick={this.onClickCountUp}>카운트 올리기</button>
      </>
    );
  }
}
