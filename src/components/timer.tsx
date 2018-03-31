import * as React from 'react';
import {getQuestion, difficult} from '../tool';

/**
 * By Rubén Gabás
 * timer.tsx
 * 
 * This component is i timer with a timeout 
 * depending on the difficulty
 */
interface TimerState {
  time: number;
  timer: any;
}

interface TimerProps {
  lvl: number;
  difficult: string;
  onRef: (e: any) => void; /* set a reference so that the parent can have access */
  timeoutAnswer: () => void; /* when the time reaches 0 */
}

export class Timer extends React.Component<TimerProps, TimerState> {

  /**
   * Set the total time of timer depending of difficult
   */
  componentWillMount() {
    this.state = {
      time: difficult[this.props.difficult].time,
      timer: null,
    }
  }

  /* Set reference and interval */
  componentDidMount() {
    this.props.onRef(this);
    this.setState({
      timer: setInterval(() => this.handleTime(), 50)
    });
  }

  /* Reset the time and the interval */
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

  /** 
   * every 50ms subtraction 50 to time if time reaches 0 
   * call props timeout answer
   */
  handleTime() {
    let time = this.state.time - 50;
    

    this.setState({time})
    if (time == 0) {
      clearInterval(this.state.timer)
      this.props.timeoutAnswer();
    }
  }

  render() {
    /* get percent to progress bar */
    const getProgress = () => this.state.time / (difficult[this.props.difficult].time / 100);
    return(
        <progress value={getProgress()} max="100"></progress>
    )
  }
}