import React, { Component } from 'react';
import { fetchPosts, MsgData } from './fetchOnce';

type Props = {};

type State = {
  msg: MsgData | null;
  visible: boolean;
};

class Test extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      msg: null,
      visible: false
    };
  }

  async componentDidMount() {
    const result = await fetchPosts('test');

    if (result.status === 200) {
      this.setState({
        msg: result.data,
      });
    }
  }

  handleClick = () => {
    const data = {
      id: 3,
      userId: 3,
      title: '3',
      body: '3'
    };
    this.setState({
      msg: data,
      visible: true
    });
  }

  render() {
    const { msg, visible } = this.state;
    const test1 = 'adasd'
    return (
      <>
        <div>{msg?.id}</div>
        <div>{msg?.userId}</div>
        <div>{msg?.title}</div>
        <div>{msg?.body}</div>
        <div>{test1}</div>
        <button onClick={this.handleClick} id='click' data-testid='click'>点击</button>
        {visible && (
          <div>显示</div>
        )}
      </>
    );
  }
};

export default Test;