import * as React from "react";

/**
 * By Rubén Gabás
 * mainMenu.tsx
 * 
 * This stateless component shown if props index is true
 * This html have a difficulty selector and two buttons to choose the mode
 */
export interface MainMenuProps {
  index: boolean;
  difficult: string;
  choosedifficult: (e: any) => void;
  startGame: (robot: boolean) => void;
}

export const MainMenu: React.StatelessComponent<MainMenuProps> = (props) => {

  return (
    <div className={`page ${props.index ? '' : 'hide'}`}>
      <img className="title" src="assets/img/color-game-logo.png" width={301}/>
      <br />
      <span className="secondaryTitles">Choose difficulty:</span>  
      <div className="difficultChooser" onClick={props.choosedifficult}>
        <div id="selectEasy" className={props.difficult == "easy" ? 'active' : ''} data-difficult="easy">easy</div>
        <div id="selectNormal" className={props.difficult == "normal" ? 'active' : ''} data-difficult="normal">normal</div>
        <div id="selectHard" className={props.difficult == "hard" ? 'active' : ''} data-difficult="hard">hard</div>
      </div>
      <br/>
      <span className="secondaryTitles">Select mode:</span> 
      <br/>
      <button id="humanButton" className="btn" onClick={() => props.startGame(false)}>Human</button>
      <button id="robotButton" className="btn" onClick={() => props.startGame(true)}>Robot</button>
    </div>
  )
}