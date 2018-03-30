import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Enzyme from 'enzyme';
import * as ReactFifteenAdapter from 'enzyme-adapter-react-15'
import renderer from 'react-test-renderer';
import {Instructions} from '../src/components/instructions';
import {Stage} from '../src/components/stage';
import {Score} from '../src/components/score';
import {Game} from '../src/components/game';

jest.useFakeTimers();
Enzyme.configure({ adapter: new ReactFifteenAdapter() })

describe('<Game />', () => {
  it('renders without crashing', () => {
    const wrapper = Enzyme.mount(<Game robot={false} dificult={"easy"} indexState={() => {}}/>);

    expect(wrapper).toBeTruthy();
  });

  it('renders instructions', () => {
    const wrapper = Enzyme.mount(<Game robot={false} dificult={"easy"} indexState={() => {}}/>);

    expect(wrapper.find(Instructions).length).toBe(1)
  });

  it('renders final score', () => {
    const wrapper = Enzyme.mount(<Game robot={false} dificult={"easy"} indexState={() => {}}/>);
    wrapper.setState({lvl: 11})
    expect(wrapper.find(Score).length).toBe(1)
  });

  it('renders stage', () => {
    const wrapper = Enzyme.mount(<Game robot={false} dificult={"easy"} indexState={() => {}}/>);
    wrapper.setState({lvl: 5})
    expect(wrapper.find(Stage).length).toBe(1)
  });

  it('Start game', () => {
    let wrapper: any;
    wrapper = Enzyme.mount(<Game robot={false} dificult={"easy"} indexState={() => {}}/>);
    
    wrapper.instance().startGame();
    expect(wrapper.state().lvl).toBe(1)
  });

  it('Start game and timeout answer', () => {
    let wrapper: any;
    wrapper = Enzyme.mount(<Game robot={false} dificult={"easy"} indexState={() => {}}/>);
    
    wrapper.instance().startGame();
    expect(wrapper.state().lvl).toBe(1)
    expect(wrapper.state().score).toBe(0)

    wrapper.instance().timeoutAnswer();
    expect(wrapper.state().lvl).toBe(2)
    expect(wrapper.state().score).toBe(0)
  });

  it('Start game handleClick no effect in lvl 0', () => {
    let wrapper: any;
    wrapper = Enzyme.mount(<Game robot={false} dificult={"easy"} indexState={() => {}}/>);
    let score = wrapper.state().score;
    let eTemp = {
      target: {
        dataset: {
          key: "true"
        }
      }
    }
    wrapper.instance().handleClick(eTemp, 1000);
    let score2 = wrapper.state().score;
    expect(score).toEqual(score2);
  });

  it('Start game handleClick no effect in lvl scorefinal', () => {
    let wrapper: any;
    wrapper = Enzyme.mount(<Game robot={false} dificult={"easy"} indexState={() => {}}/>);
    wrapper.setState({lvl: 11})
    let score = wrapper.state().score;
    let eTemp = {
      target: {
        dataset: {
          key: "true"
        }
      }
    }
    wrapper.instance().handleClick(eTemp, 1000);
    let score2 = wrapper.state().score;
    expect(score).toEqual(score2);
  });

  it('Start game handleClick score sum', () => {
    let wrapper: any;
    wrapper = Enzyme.mount(<Game robot={false} dificult={"easy"} indexState={() => {}}/>);
    wrapper.setState({lvl: 5})
    let score = wrapper.state().score;
    let eTemp = {
      target: {
        dataset: {
          key: "true"
        }
      }
    }
    wrapper.instance().handleClick(eTemp, 1000);
    let score2 = wrapper.state().score;
    expect(score).toBeLessThan(score2);
  });
})