import * as React from 'react';
import {getQuestion, dificult} from '../tool';

interface TimerState {
  time: number;
  timer: any;
}

interface TimerProps {
  lvl: number;
  dificult: string;
  onRef: (e: any) => void;
  timeoutAnswer: () => void;
}

export class Timer extends React.Component<TimerProps, TimerState> {
  constructor() {
    super();
    

  }

  componentWillMount() {
    this.state = {
      time: dificult[this.props.dificult].time,
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
        time:  dificult[this.props.dificult].time,
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
    const getProgress = () => this.state.time / (dificult[this.props.dificult].time / 100);
    return(
      <div>
        <progress value={getProgress()} max="100"></progress>
      </div>
    )
  }
}