import * as React from "react";
import {Game} from "./game";
import {Loading} from "./loading";
import {MainMenu} from "./mainMenu";
interface AppProps {

}

interface AppState {
  loading: boolean;
  index: boolean;
  game: boolean;
  robot: boolean;
  dificult: string;
}

export class App extends React.Component<AppProps, AppState> {
  constructor() {
    super();
    this.state = {
      loading: true,
      index: false,
      game: false,
      robot: false,
      dificult: "normal"
    }
    console.log(this.state)
  }

  componentDidMount() {
    this.startGame = this.startGame.bind(this);
    setTimeout(() => {
      this.setState({
        loading: false,
        index: true
      })
      console.log(this.state)
    }, 1000)
  }

  public chooseDificult(e: any) {
    if (e.target.dataset.dificult != undefined) {
      this.setState({dificult: e.target.dataset.dificult})
    }
  }

  public indexState() {
    this.setState({
      index: true,
      game: false
    })
  }

  public startGame(robot: boolean) {
    console.log(robot);
    this.setState({
      index: false,
      game: true,
      robot
    });
    console.log("Start!!")
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
          dificult={this.state.dificult}
          chooseDificult={this.chooseDificult.bind(this)}
          startGame={this.startGame.bind(this)}
          />
        {game ? <Game indexState={this.indexState.bind(this)} robot={this.state.robot} dificult={this.state.dificult}/> : null}
      </div>
    )
  }
}
