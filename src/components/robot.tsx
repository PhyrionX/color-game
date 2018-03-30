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
    //console.log(document.getElementById("startGameButton"))
    setTimeout(() => {
      let buttonStart = document.getElementById("startGameButton");
      if (this.props.lvl === 0 && buttonStart !== null) {
        buttonStart.click();
      }
    }, 3000);
  }

  shouldComponentUpdate(nexrProps){
    return nexrProps.lvl != this.props.lvl
  }

  componentDidUpdate () {
    let time = dificult[this.props.dificult].time;

    setTimeout(() => {
      let questionLabel = document.getElementById("questionLabel");
      if (this.props.lvl > 0 && questionLabel != null) {
        let solutionColor = questionLabel.style.color;
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