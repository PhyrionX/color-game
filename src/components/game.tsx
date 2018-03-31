import * as React from "react";
import {Stage} from "./stage";
import {Robot} from "./robot";
import {Instructions} from "./instructions";
import {Score} from "./score";
import {confApp, getScore} from "../tool";

/**
 * By Rubén Gabás
 * game.tsx
 * 
 * This component controls all game states.
 * The game states can be: 
 * 
 * INSTRUCTION_STAGE, is lvl 0, here is explained the operation of 
 * the game and the selected difficulty.
 * 
 * STAGES. is lvl 1 to lvl 10, here are the 10 questions that must be answered
 * 
 * FINAL_STATE. is lvl 11, here is the result obtained based 
 * on the questions answered and the time taken
 */


interface GameProps {
  indexState: () => void; /* Function to return to the main menu */
  robot: boolean;         /* Receive if robot is active */
  difficult: string;       /* difficult selected */
}

interface GameState {
  lvl: number;
  score: number;
  answers: number;
}

export class Game extends React.Component<GameProps, GameState> {
  constructor() {
    super();
    this.state = {
      lvl: 0,     /* Is current lvl of game, the initial state 0 is INSTRUCTION_STAGE*/
      score: 0,   /* It is the score obtained */
      answers: 0  /* It is the number of questions answered correctly */
    }
  }

  /**
   * Go to the first stage, first question, start the game
   */
  startGame() {
    this.setState({
      lvl: 1
    })
  }

  /**
   * When a question is not answered in time, 
   * a level is added but no score 
   */
  timeoutAnswer() {
    let lvl = this.state.lvl + 1;
    this.setState({lvl});
  }

  /**
   * This handler is invoked when you click on one of the answers
   * the parameters are e and time: 
   * e is event of click in the element.
   * and time is is the remaining time to solve the question
   * 
   * This function controls that the event with the dataset.key is defined since 
   * it is the one that knows if the answer is correct or not, if it is correct, 
   * if if correct call the tool function getScore and plus answer and lvl
   * 
   * If the answer is not correct, only add one level and no score
   * @param e 
   * @param time 
   */
  handleClick(e: any, time: number) {
    if (e.target.dataset.key != undefined &&
        this.state.lvl > confApp.INSTRUCTION_STAGE &&
        this.state.lvl <= confApp.STAGES) {
      let lvl = this.state.lvl + 1;
      let score = this.state.score;
      let answers = this.state.answers;
      if (e.target.dataset.key == "true") {
        score += getScore(this.props.difficult, time);
        answers += 1;
      }
      this.setState({lvl, score, answers})
    }
  }

  public render() {
    /**
     * This controls the states of game
     */
    const getGameState = () => {
      if (this.state.lvl === confApp.INSTRUCTION_STAGE) {
        return <Instructions 
          difficult={this.props.difficult}
          startGame={this.startGame.bind(this)}
          robot={this.props.robot}
          />
      } else if (this.state.lvl >  confApp.INSTRUCTION_STAGE && this.state.lvl <= confApp.STAGES) {
        return <Stage 
          lvl={this.state.lvl} 
          handleClick={this.handleClick.bind(this)}
          timeoutAnswer={this.timeoutAnswer.bind(this)}
          difficult={this.props.difficult}/>
      } else if (this.state.lvl >  confApp.STAGES) {
        return <Score 
          difficult={this.props.difficult}
          score={this.state.score}
          answers={this.state.answers}
          indexState={this.props.indexState}
          />
      }
    }
    return (
      <div className="page" id="game">
        <div className="titleStages">
          {/* This header showns in question to know de current question*/}
          {this.state.lvl == confApp.INSTRUCTION_STAGE ? 
              "" : this.state.lvl > confApp.INSTRUCTION_STAGE && this.state.lvl <= confApp.STAGES ? `Question ${this.state.lvl}` : ''}
        </div>
        {/* If robot props is active, active the robot */}
        {this.props.robot && this.state.lvl <= confApp.STAGES ? <Robot lvl={this.state.lvl} difficult={this.props.difficult}/>: null}
        {getGameState()}
      </div>
    ) 
  }
}
