import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Enzyme from 'enzyme';
import * as ReactFifteenAdapter from 'enzyme-adapter-react-15'
import renderer from 'react-test-renderer';
import {App} from '../src/components/app';
import {Loading} from '../src/components/loading';
import {MainMenu} from '../src/components/mainMenu';
import {Game} from '../src/components/game';
import {Instructions} from '../src/components/instructions';
import {Stage} from '../src/components/stage';
import {Score} from '../src/components/score';

jest.useFakeTimers();
Enzyme.configure({ adapter: new ReactFifteenAdapter() })

describe('<App />', () => {
  it('renders without crashing', () => {
    const wrapper = Enzyme.mount(<App />);
    expect(wrapper.find(Loading).length).toBe(1);
    expect(wrapper.find(MainMenu).length).toBe(1);
    expect(wrapper.find(MainMenu).length).toBe(1);
    jest.runAllTimers();
    //console.log(wrapper.state())
  });

  it('start game with robot', () => {
    let wrapper: any;
    wrapper = Enzyme.mount(<App />);
    
    jest.runAllTimers();

    wrapper.instance().startGame(true)
    expect(wrapper.state().loading).toBeFalsy();
    expect(wrapper.state().index).toBeFalsy();
    expect(wrapper.state().game).toBeTruthy();
    expect(wrapper.state().robot).toBeTruthy();
  });

  it('start game without robot', () => {
    let wrapper: any;
    wrapper = Enzyme.mount(<App />);
    
    jest.runAllTimers();

    wrapper.instance().startGame(false)
    expect(wrapper.state().loading).toBeFalsy();
    expect(wrapper.state().index).toBeFalsy();
    expect(wrapper.state().game).toBeTruthy();
    expect(wrapper.state().robot).toBeFalsy();
  });


  it('choose difficult easy', () => {
    let wrapper: any;
    wrapper = Enzyme.mount(<App />);
    
    jest.runAllTimers();
    let eTemp = {
      target: {
        dataset: {
          difficult: "easy"
        }
      }
    }

    jest.runAllTimers();

    wrapper.instance().choosedifficult(eTemp)
    expect(wrapper.state().difficult).toBe("easy")
  });

  it('choose difficult normal', () => {
    let wrapper: any;
    wrapper = Enzyme.mount(<App />);
    
    jest.runAllTimers();
    let eTemp = {
      target: {
        dataset: {
          difficult: "normal"
        }
      }
    }

    jest.runAllTimers();

    wrapper.instance().choosedifficult(eTemp)
    expect(wrapper.state().difficult).toBe("normal")
  });

  it('choose difficult hard', () => {
    let wrapper: any;
    wrapper = Enzyme.mount(<App />);
    
    jest.runAllTimers();
    let eTemp = {
      target: {
        dataset: {
          difficult: "hard"
        }
      }
    }

    jest.runAllTimers();

    wrapper.instance().choosedifficult(eTemp)
    expect(wrapper.state().difficult).toBe("hard")
  });

  it('go to index state', () => {
    let wrapper: any;
    wrapper = Enzyme.mount(<App />);
    
    jest.runAllTimers();

    wrapper.instance().indexState();

    expect(wrapper.state().loading).toBeFalsy();
    expect(wrapper.state().index).toBeTruthy();
    expect(wrapper.state().game).toBeFalsy();
    expect(wrapper.state().robot).toBeFalsy();
  });

  it('get two buttons of the child component', () => {
    let wrapper: any;
    wrapper = Enzyme.mount(<App />);
    
    jest.runAllTimers();

     expect(wrapper.find("button").length).toBe(2);
  });

  it('Interacction with child main menu, if press human button', () => {
    let wrapper: any;
    wrapper = Enzyme.mount(<App />);
    
    jest.runAllTimers();

    expect(wrapper.find(Instructions).length).toBe(0);
    wrapper.find("button#humanButton").simulate('click');

    expect(wrapper.state().robot).toBeFalsy()
    expect(wrapper.state().game).toBeTruthy()
    expect(wrapper.find(Instructions).length).toBe(1);
  });

  it('Interacction with child main menu, if press robot button', () => {
    let wrapper: any;
    wrapper = Enzyme.mount(<App />);
    
    jest.runAllTimers();

    expect(wrapper.find(Instructions).length).toBe(0);
    wrapper.find("button#robotButton").simulate('click');

    expect(wrapper.state().robot).toBeTruthy()
    expect(wrapper.state().game).toBeTruthy()
    expect(wrapper.find(Instructions).length).toBe(1);

  });

  it('Interacction with child main menu, if press human button, and start game', () => {
    let wrapper: any;
    wrapper = Enzyme.mount(<App />);
    
    jest.runAllTimers();

    expect(wrapper.find(Game).length).toBe(0);
    expect(wrapper.find(Instructions).length).toBe(0);
    wrapper.find("button#humanButton").simulate('click');

    expect(wrapper.state().robot).toBeFalsy()
    expect(wrapper.state().game).toBeTruthy()
    expect(wrapper.find(Game).length).toBe(1);
    expect(wrapper.find(Instructions).length).toBe(1);
    expect(wrapper.find(Stage).length).toBe(0);

    wrapper.find(Instructions).find('button#startGameButton').simulate("click");
    expect(wrapper.find(Stage).length).toBe(1);
    expect(wrapper.find('span#questionLabel').length).toBe(1);
  });

  it('Interacction with child main menu, if press robot button, and start game', () => {
    let wrapper: any;
    wrapper = Enzyme.mount(<App />);
    
    jest.runAllTimers();

    expect(wrapper.find(Game).length).toBe(0);
    expect(wrapper.find(Instructions).length).toBe(0);
    wrapper.find("button#robotButton").simulate('click');

    expect(wrapper.state().robot).toBeTruthy()
    expect(wrapper.state().game).toBeTruthy()
    expect(wrapper.find(Game).length).toBe(1);
    expect(wrapper.find(Instructions).length).toBe(1);
    expect(wrapper.find(Stage).length).toBe(0);

    wrapper.find(Instructions).find('button#startGameButton').simulate("click");
    
    expect(wrapper.find(Stage).length).toBe(1);
    expect(wrapper.find('span#questionLabel').length).toBe(1);
  });
})