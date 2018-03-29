import * as React from "react";
import {dificult} from "../tool";

export interface InstructionsProps {
  dificult: string;
  startGame: () => void;
}

export const Instructions: React.StatelessComponent<InstructionsProps> = (props) => {

  return (
    <div className="instructionsDiv">
        <div>
          <span>Instructions: </span> There are ten screens, and on each screen,
            you are given a word and two buttons to choose from. Select the Color of the word, not the word!
          <br />
          <span>Dificult: </span>{`Selected [${props.dificult}] ${dificult[props.dificult].time / 1000} seconds per screen and ${dificult[props.dificult].colors} diferents colors`}
        </div>
        <button className="btn" onClick={props.startGame} id="startGameButton">Start</button>
    </div>
  )
}