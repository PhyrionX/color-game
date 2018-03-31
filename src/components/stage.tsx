import * as React from 'react';
import {getQuestion, confApp} from '../tool';
import {Timer} from './timer';

/**
 * By Rubén Gabás
 * stage.tsx
 * 
 * This component is each of the questions,
 * Only showns if lvl is > 0 and <= 10 number of stages.
 * VAR confApp.STAGES is number of questions.
 * 
 * This component get the question al buttons of a helper in
 * file tool {getQuestion}.
 * 
 * This component have a child Timer for the countdown
 */
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
      child: null /* child to get time */
    }

  }

  /* event that solves the question and also recovers the remaining time */
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
          {/* Get html with label of question and 2 buttons to solve it */}
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