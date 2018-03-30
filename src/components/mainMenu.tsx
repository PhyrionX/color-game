import * as React from "react";

export interface MainMenuProps {
  index: boolean;
  dificult: string;
  chooseDificult: (e: any) => void;
  startGame: (robot: boolean) => void;
}

export const MainMenu: React.StatelessComponent<MainMenuProps> = (props) => {

  return (
    <div className={`page ${props.index ? '' : 'hide'}`}>
      <img className="title" src="assets/img/color-game-logo.png" width={301}/>
      <br />
      <span className="secondaryTitles">Choose a dificult:</span>  
      <div className="dificultChooser" onClick={props.chooseDificult}>
        <div className={props.dificult == "easy" ? 'active' : ''} data-dificult="easy">easy</div>
        <div className={props.dificult == "normal" ? 'active' : ''} data-dificult="normal">normal</div>
        <div className={props.dificult == "hard" ? 'active' : ''} data-dificult="hard">hard</div>
      </div>
      <br/>
      <span className="secondaryTitles">Select mode:</span> 
      <br/>
      <button className="btn" onClick={() => props.startGame(false)}>Human</button>
      <button className="btn" onClick={() => props.startGame(true)}>Robot</button>
    </div>
  )
}