import * as React from 'react';
import {getQuestion, difficult} from '../tool';

interface TimerState {
  time: number;
  timer: any;
}

interface TimerProps {
  lvl: number;
  difficult: string;
  onRef: (e: any) => void;
  timeoutAnswer: () => void;
}

export class Timer extends React.Component<TimerProps, TimerState> {

  componentWillMount() {
    this.state = {
      time: difficult[this.props.difficult].time,
      timer: null,
    }
  }

  componentDidMount() {
    this.props.onRef(this);
    this.setState({
      timer: setInterval(() => this.handleTime(), 50)
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.lvl != nextProps.lvl) {
      clearInterval(this.state.timer)
      this.setState({
        time:  difficult[this.props.difficult].time,
        timer: setInterval(() => this.handleTime(), 50)
      })
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.timer);
  } 

  handleTime() {
    let time = this.state.time - 50;
    

    this.setState({time})
    if (time == 0) {
      clearInterval(this.state.timer)
      this.props.timeoutAnswer();
    }
  }

  render() {
    const getProgress = () => this.state.time / (difficult[this.props.difficult].time / 100);
    return(
      <div>
        <progress value={getProgress()} max="100"></progress>
      </div>
    )
  }
}