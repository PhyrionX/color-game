import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Enzyme from 'enzyme';
import * as ReactFifteenAdapter from 'enzyme-adapter-react-15'
import renderer from 'react-test-renderer';
import {App} from '../src/components/app';
import {Loading} from '../src/components/loading';
import {MainMenu} from '../src/components/mainMenu';
import {Game} from '../src/components/game';

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


  it('choose dificult easy', () => {
    let wrapper: any;
    wrapper = Enzyme.mount(<App />);
    
    jest.runAllTimers();
    let eTemp = {
      target: {
        dataset: {
          dificult: "easy"
        }
      }
    }

    jest.runAllTimers();

    wrapper.instance().chooseDificult(eTemp)
    expect(wrapper.state().dificult).toBe("easy")
  });

  it('choose dificult normal', () => {
    let wrapper: any;
    wrapper = Enzyme.mount(<App />);
    
    jest.runAllTimers();
    let eTemp = {
      target: {
        dataset: {
          dificult: "normal"
        }
      }
    }

    jest.runAllTimers();

    wrapper.instance().chooseDificult(eTemp)
    expect(wrapper.state().dificult).toBe("normal")
  });

  it('choose dificult hard', () => {
    let wrapper: any;
    wrapper = Enzyme.mount(<App />);
    
    jest.runAllTimers();
    let eTemp = {
      target: {
        dataset: {
          dificult: "hard"
        }
      }
    }

    jest.runAllTimers();

    wrapper.instance().chooseDificult(eTemp)
    expect(wrapper.state().dificult).toBe("hard")
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
})