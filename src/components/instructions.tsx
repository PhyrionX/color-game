import * as React from "react";
import {difficult} from "../tool";

/**
 * By Rubén Gabás
 * instructions.tsx
 * 
 * This stateless component shown instructions,
 * and the selected difficult, and the time values ​​
 * and colors set in the difficulty.
 */

export interface InstructionsProps {
  difficult: string;
  startGame: () => void;
  robot: boolean;
}

export const Instructions: React.StatelessComponent<InstructionsProps> = (props) => {

  return (
    <div className="instructionsDiv">
        <div>
          <span>Instructions: </span> There are ten screens, and on each screen,
            you are given a word and two buttons to choose from. Select the Color of the word, not the word!
            Score depends on the right questions and the time to answer.
          <br />
          <span>Difficult: </span>{`Selected [${props.difficult}] ${difficult[props.difficult].time / 1000} seconds per screen and ${difficult[props.difficult].colors} diferents colors`}
          <div className="message">{props.robot ? 'Now play the robot, don\'t touch anything' : 'Are you ready human?'}</div>
        </div>
        <button className="btn" onClick={props.startGame} id="startGameButton">Start</button>
    </div>
  )
}