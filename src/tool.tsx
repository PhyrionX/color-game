import * as React from 'react';
import * as _ from 'lodash';

const colors = ["Red", "Blue", "Green", "Orange", "Pink", "Purple", "Brown", "Black", "Grey", "Cyan", "Blueviolet", "Chocolate"]

export const confApp = {
  STAGES: 10,
  INSTRUCTION_STAGE: 0
}

export const dificult = {
  easy: {
    time: 6000,
    colors: 3
  },
  normal: {
    time: 3000,
    colors: 6
  },
  hard: {
    time: 1500,
    colors: 12
  }
}

export function getQuestion(dificultselected: string) {
  let colorTemp = _.take(colors, dificult[dificultselected].colors);
  let colorSelected = _.sample(colorTemp);
  let colorSecundary = _.sample(_.pull(_.clone(colorTemp), colorSelected));

  
  let buttons = getButtons(colorSelected, colorSecundary, colorTemp);
  return <div>
      <span style={{color: colorSelected}} id="questionLabel">{colorSecundary}</span>
      {buttons}
    </div>
}

const getButtons = (colorSelected, colorSecundary, colorArr) => {
  let result = Math.floor(Math.random() * 2);
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