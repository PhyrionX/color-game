import * as React from 'react';
import * as _ from 'lodash';

/**
 * By Rubén Gabás
 * tool.tsx
 * 
 * this file set the parameters of game, and utils functions
 */


 /**
  * Array with all color of the game
  */
const colors = ["Red", "Blue", "Green", "Orange", "Pink", "Purple", "Brown", "Black", "Grey", "Cyan", "Blueviolet", "Chocolate"]

/**
 * Set number of stages=questions and lvl of instructions
 */
export const confApp = {
  STAGES: 10,
  INSTRUCTION_STAGE: 0
}

/**
 * Difficult configuration
 */
export const difficult = {
  easy: {
    time: 6000,
    colors: 3
  },
  normal: {
    time: 3000,
    colors: 6
  },
  hard: {
    time: 1000,
    colors: 12
  }
}

/**
 * this function calculate the score of question depending of time
 * 
 * @param difficultT
 * @param time 
 */
export function getScore (difficultT: string, time: number) {
  return Math.floor((1000 * time) / difficult[difficultT].time);
}

/**
 * This function get html of question label and of two solution buttons
 * 
 * @param difficultselected 
 */
export function getQuestion(difficultselected: string) {
  /** create an array from the array of colors with the number of colors set by the difficulty */
  let colorTemp = _.take(colors, difficult[difficultselected].colors);
  /** Take a color random of array and set the correct color */
  let colorSelected = _.sample(colorTemp);
  /** Take a random color, not color selected before */
  let colorSecundary = _.sample(_.pull(_.clone(colorTemp), colorSelected));

  /** Call function to build solution buttons */
  let buttons = getButtons(colorSelected, colorSecundary, colorTemp);
  /** return the question with solution buttons, label have style color withs
   * colorSelected and text with secondary color, the selected color is the good one
   */
  return <div>
      <span style={{color: colorSelected}} id="questionLabel">{colorSecundary}</span>
      {buttons}
    </div>
}

/**
 * Build the solutions buttons, the solution button and not solution button
 * 
 * @param colorSelected 
 * @param colorSecundary 
 * @param colorArr 
 */
const getButtons = (colorSelected, colorSecundary, colorArr) => {
  let result = Math.floor(Math.random() * 2);
  /* random to set order of good and bad button */
  if (result === 0) {
    return <div className="buttonsDiv">
      <button className="solutionButton btn-resp" data-key="true" style={{backgroundColor: _.sample(colorArr)}}>{colorSelected}</button>
      <button className="solutionButton btn-resp" data-key="false" style={{backgroundColor: _.sample(colorArr)}}>{colorSecundary}</button>
    </div>
  } else {
    return <div className="buttonsDiv">
      <button className="solutionButton btn-resp" data-key="false" style={{backgroundColor: _.sample(colorArr)}}>{colorSecundary}</button>
      <button className="solutionButton btn-resp" data-key="true" style={{backgroundColor: _.sample(colorArr)}}>{colorSelected}</button>
    </div>
  }
}