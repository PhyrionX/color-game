import * as React from "react";
import {Stage} from "./stage";
import {Robot} from "./robot";
import {Instructions} from "./instructions";
import {Score} from "./score";
import {confApp} from "../tool";

interface GameProps {
  indexState: () => void;
  robot: boolean;
  dificult: string;
}

interface GameState {
  lvl: number;
  score: number;
  interval: any;
  answers: number;
}

export class Game extends React.Component<GameProps, GameState> {
  constructor() {
    super();
    this.state = {
      lvl: 0,
      score: 0,
      interval: null,
      answers: 0
    }
  }

  startGame() {
    this.setState({
      lvl: 1
    })
  }

  timeoutAnswer() {
    let lvl = this.state.lvl + 1;
    this.setState({lvl});
  }

  handleClick(e: any, time: number) {
    console.log(time)
    if (e.target.dataset.key != undefined) {
      console.log(e.target.dataset.key);
      let lvl = this.state.lvl + 1;
      let score = this.state.score;
      let answers = this.state.answers;
      if (e.target.dataset.key == "true") {
        score += (1000 * time) / 1000;
        answers += 1;
      }
      this.setState({lvl, score, answers})
    }
  }

  public render() {
    const getGameState = () => {
      if (this.state.lvl === confApp.INSTRUCTION_STAGE) {
        return <Instructions 
          dificult={this.props.dificult}
          startGame={this.startGame.bind(this)}
          />
      } else if (this.state.lvl >  confApp.INSTRUCTION_STAGE && this.state.lvl <= confApp.STAGES) {
        return <Stage 
          lvl={this.state.lvl} 
          handleClick={this.handleClick.bind(this)}
          timeoutAnswer={this.timeoutAnswer.bind(this)}
          dificult={this.props.dificult}/>
      } else if (this.state.lvl >  confApp.STAGES) {
        return <Score 
          dificult={this.props.dificult}
          score={this.state.score}
          answers={this.state.answers}
          indexState={this.props.indexState}
          />
      }
    }
    return (
      <div className="page" id="game">
        <div>{this.state.lvl == confApp.INSTRUCTION_STAGE ? 
            "" : this.state.lvl > confApp.INSTRUCTION_STAGE && this.state.lvl <= confApp.STAGES ? `Stage ${this.state.lvl}` : ''}</div>
        {this.props.robot && this.state.lvl <= confApp.STAGES ? <Robot lvl={this.state.lvl} dificult={this.props.dificult}/>: null}
        {getGameState()}
      </div>
    ) 
  }
}
