import * as React from 'react';
import {getQuestion} from '../tool';
import {Timer} from './timer';

interface StageProps {
  lvl: number;
  handleClick: (e: any, time: number) => void;
  timeoutAnswer: () => void;
  dificult: string;
}

interface StageState {
  child: any
}


export class Stage extends React.Component<StageProps, StageState> {
  constructor() {
    super();
    this.state = {
      child: null
    }

  }

  public getTime(time: number) {
    
  }

  public handleClick(e: any) {
    this.props.handleClick(e, this.state.child.state.time);
  }

  render() {
    return(
      <div id="stage" onClick={this.handleClick.bind(this)}>
        <Timer 
          lvl={this.props.lvl} 
          onRef={ref => {this.setState({child: ref})}}
          timeoutAnswer={this.props.timeoutAnswer}
          dificult={this.props.dificult}
          />
        {getQuestion(this.props.dificult)}
      </div>
    )
  }
}