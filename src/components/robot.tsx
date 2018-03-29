import * as React from 'react';
import {getQuestion, dificult} from '../tool';
import * as _ from 'lodash';

interface RobotProps {
  lvl: number;
  dificult: string;
}

export class Robot extends React.Component<RobotProps, {}> {
  constructor() {
    super();
  }
  
  componentWillMount() {
    setTimeout(() => {
      if (this.props.lvl === 0) {
        console.log("a")
        document.getElementById("startGameButton").click();
      }
    }, 3000);
  }

  shouldComponentUpdate(nexrProps){
    return nexrProps.lvl != this.props.lvl
  }
  componentDidUpdate () {
    let time = dificult[this.props.dificult].time;
    console.log(time);
    setTimeout(() => {
      if (this.props.lvl > 0) {
        let solutionColor = document.getElementById("questionLabel").style.color;
        let buttons = document.getElementsByClassName("solutionButton");
        let cont = true;
        
        
        for (let i = 0;  i < buttons.length && cont; i++) {
          let button: any;
          button = buttons[i];
          if (button.innerText.toLowerCase() === solutionColor.toLocaleLowerCase()) {
            button.click();
            cont = false;
          }
        }

      }
    }, dificult[this.props.dificult].time / 2);
  }

  render() {
    return(
      <div className="overlay"></div>
    )
  }
}