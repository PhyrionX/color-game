import * as React from "react";
import {difficult} from "../tool";

/**
 * By Rubén Gabás
 * score.tsx
 * 
 * This stateless component shown the score, answer and dificult
 */
export interface ScoreProps {
  difficult: string;
  score: number;
  answers: number;
  indexState: () => void;
}

export const Score: React.StatelessComponent<ScoreProps> = (props) => {

  return (
    <div className="scoreDiv">
      <div>
        <span className="ti"> Difficult: </span> <span id="scoreDificult">{props.difficult}</span><br/>
        <span className="ti"> Your score: </span> <span id="scoreScore"> {props.score}</span><br/>
        <span className="ti"> Correct answers: </span>  <span id="scoreAnswers">{props.answers}</span>
      </div>
      <button id="returnMainButton" className="btn" onClick={props.indexState}>Back</button>
    </div>
  )
}