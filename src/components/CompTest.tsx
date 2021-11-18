import React, {Component} from 'react';
import {fetchPosts, MsgData} from './fetchOnce';

type Props = {};

type State = {
  msg: MsgData | null;
};

class Test extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      msg: null,
    };
  }

  async componentDidMount() {
    const result = await fetchPosts('test');
    
    if (result.status === 200) {
      this.setState({
        msg: result.data
      });
    }
  }

  render() {
    const {msg} = this.state;
    const test1 = 'adasd'
      return (
        <>
        <div>{msg?.id}</div>
        <div>{msg?.userId}</div>
        <div>{msg?.title}</div>
        <div>{msg?.body}</div>
        <div>{test1}</div>
        </>
      );
  }
};

export default Test;