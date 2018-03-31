import * as React from 'react';
import {getQuestion, confApp} from '../tool';
import {Timer} from './timer';

interface StageProps {
  lvl: number;
  handleClick: (e: any, time: number) => void;
  timeoutAnswer: () => void;
  difficult: string;
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

  public handleClick(e: any) {
    this.props.handleClick(e, this.state.child.state.time);
  }

  render() {
    const getStage = () => {
      if (this.props.lvl > confApp.INSTRUCTION_STAGE && this.props.lvl <= confApp.STAGES) {
        return <div id="stage" onClick={this.handleClick.bind(this)}>
          <Timer 
            lvl={this.props.lvl} 
            onRef={ref => {this.setState({child: ref})}}
            timeoutAnswer={this.props.timeoutAnswer}
            difficult={this.props.difficult}
            />
          {getQuestion(this.props.difficult)}
        </div>
      } else {
        return null;
      }
    }
    return(
      getStage()
    )
  }
}