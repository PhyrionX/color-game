import * as React from "react";
import {Game} from "./game";
import {Loading} from "./loading";
import {MainMenu} from "./mainMenu";

/**
 * By Rubén Gabás
 * app.tsx
 * 
 * This is the main component of the game, this component
 * have the state of the main screens of the game.
 * 
 * Have Loading component is the component with loading effect
 * Main menu component is the main screen to choose difficult and mode
 * Game component is the game with instrucctions, stages and final score 
 */

interface AppState {
  loading: boolean;
  index: boolean;
  game: boolean;
  robot: boolean;
  difficult: string;
}

export class App extends React.Component<{}, AppState> {
  constructor() {
    super();
    this.state = {
      loading: true,  /* This state is true to init the game */
      index: false,   /* Index is true if in the main screen */
      game: false,    /* Game is true if you press in human or robot button to start game*/
      robot: false,   /* Robot true active the robot mode */
      difficult: "normal" /* difficult can set 'easy' 'normal' or 'hard' */
    }
  }

  /* This function in init wait one second and go to index screen */
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false,
        index: true
      })
    }, 1000)
  }

  /* This function changes the status of the difficulty based on the event received */
  public choosedifficult(e: any) {
    if (e.target.dataset.difficult != undefined) {
      this.setState({difficult: e.target.dataset.difficult})
    }
  }

  /** 
   * Set the index state to see the main menu
   */
  public indexState() {
    this.setState({
      index: true,
      game: false
    })
  }

  /**
   * Init the game and set robot active with boolean robot var
   * 
   * @param robot 
   */
  public startGame(robot: boolean) {
    this.setState({
      index: false,
      game: true,
      robot
    });
  }

  public render() {
    let {loading, index, game} = this.state;
    return (
      <div className="app">
        <Loading 
          loading={loading}
          />
        <MainMenu 
          index={this.state.index}
          difficult={this.state.difficult}
          choosedifficult={this.choosedifficult.bind(this)}
          startGame={this.startGame.bind(this)}
          />
        {game ? <Game indexState={this.indexState.bind(this)} robot={this.state.robot} difficult={this.state.difficult}/> : null}
      </div>
    )
  }
}
