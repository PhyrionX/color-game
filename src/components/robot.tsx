import * as React from 'react';
import {getQuestion, difficult} from '../tool';

/**
 * By Rubén Gabás
 * robot.tsx
 * 
 * This component solve automatically the game with
 * timeout to see how it works
 */
interface RobotProps {
  lvl: number;        /* lvl to know how to act*/
  difficult: string;  /* dificult set the timeout to solve */
}

export class Robot extends React.Component<RobotProps, {}> {
  constructor() {
    super();
  }
  
  /**
   * In mount if lvl is 0 let 3 seconds of timeout
   * to read instructions
   */
  componentWillMount() {
    setTimeout(() => {
      /* find button start in dom and clicked */
      let buttonStart = document.getElementById("startGameButton");
      if (this.props.lvl === 0 && buttonStart !== null) {
        buttonStart.click();
      }
    }, 3000);
  }

  /**
   * Update component if change the lvl
   * @param nexrProps 
   */
  shouldComponentUpdate(nexrProps){
    return nexrProps.lvl != this.props.lvl
  }

  /**
   * If component update and the lvl > 0 
   * solve the question
   */
  componentDidUpdate () {
    setTimeout(() => {
      /* Get label of question by dom */
      let questionLabel = document.getElementById("questionLabel");
      if (this.props.lvl > 0 && questionLabel != null) {
        /* get color style of question label*/
        let solutionColor = questionLabel.style.color;
        /* get the buttons of the question to find the answer */
        let buttons = document.getElementsByClassName("solutionButton");
        let cont = true;
        
        /** we go through the array to retrieve the button with 
         * the text label equal to the color of the solution 
         */
        for (let i = 0;  i < buttons.length && cont; i++) {
          let button: any;
          button = buttons[i];
          /**
           * compare de solutionColor with the labels of solution buttons in lowerCase
           */
          if (button.innerText.toLowerCase() === solutionColor.toLocaleLowerCase()) {
            button.click();
            cont = false;
          }
        }

      }
      /* The timeout is the time to solve each question (depends of difficult) divided for 2 */
    }, difficult[this.props.difficult].time / 2);
  }

  render() {
    /* we add an overlay to prevent the user from pressing anything */
    return(
      <div className="overlay"></div>
    )
  }
}