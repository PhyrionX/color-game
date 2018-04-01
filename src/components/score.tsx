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
        <span> Difficult: </span> {props.difficult} <br/>
        <span> Your score: </span> {props.score} <br/>
        <span> Correct answers: </span> {props.answers}
      </div>
      <button id="returnMainButton" className="btn" onClick={props.indexState}>Back</button>
    </div>
  )
}