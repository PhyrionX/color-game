import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Enzyme from 'enzyme';
import * as ReactFifteenAdapter from 'enzyme-adapter-react-15'
import renderer from 'react-test-renderer';
import {Score} from './score';

Enzyme.configure({ adapter: new ReactFifteenAdapter() })
describe('<Score />', () => {
  it('renders without crashing', () => {
    const wrapper = Enzyme.shallow(<Score dificult={"easy"} score={10000} answers={10} indexState={() => console.log("a")}/>);
    expect(wrapper.find('div.scoreDiv').length).toBe(1);
  });

  it('Score props', () => {
    const wrapper = Enzyme.mount(<Score dificult={"easy"} score={10000} answers={10} indexState={() => console.log("a")}/>);
    expect(wrapper.props().score).toBe(10000);
    expect(wrapper.props().dificult).toBe("easy");
    wrapper.setProps({dificult: "normal", score: 12000});
    expect(wrapper.props().score).toBe(12000);
    expect(wrapper.props().dificult).toBe("normal");
  })

  it('Click button back', () => {
    const wrapper = Enzyme.mount(<Score dificult={"easy"} score={10000} answers={10} indexState={() => {
      expect(wrapper.props().score).toBe(10000);
    }}/>);
    wrapper.find('button').simulate('click');
  })
})