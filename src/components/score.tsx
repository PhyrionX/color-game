import * as React from "react";
import {dificult} from "../tool";

export interface ScoreProps {
  dificult: string;
  score: number;
  answers: number;
  indexState: () => void;
}

export const Score: React.StatelessComponent<ScoreProps> = (props) => {

  return (
    <div className="scoreDiv">
      <div>
        <span> Dificult: </span> {props.dificult} <br/>
        <span> Your score: </span> {props.score} <br/>
        <span> Correct answers: </span> {props.answers}
      </div>
      <button className="btn" onClick={props.indexState}>Back</button>
    </div>
  )
}