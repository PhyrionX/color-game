import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Enzyme from 'enzyme';
import * as ReactFifteenAdapter from 'enzyme-adapter-react-15'
import renderer from 'react-test-renderer';
import {Score} from '../src/components/score';

Enzyme.configure({ adapter: new ReactFifteenAdapter() })
describe('<Score />', () => {
  it('renders without crashing', () => {
    const wrapper = Enzyme.shallow(<Score difficult={"easy"} score={10000} answers={10} indexState={() => console.log("a")}/>);
    expect(wrapper.find('div.scoreDiv').length).toBe(1);
  });

  it('Score props', () => {
    const wrapper = Enzyme.mount(<Score difficult={"easy"} score={10000} answers={10} indexState={() => console.log("a")}/>);
    expect(wrapper.props().score).toBe(10000);
    expect(wrapper.props().difficult).toBe("easy");
    wrapper.setProps({difficult: "normal", score: 12000});
    expect(wrapper.props().score).toBe(12000);
    expect(wrapper.props().difficult).toBe("normal");
  })

  it('Click button back', () => {
    const wrapper = Enzyme.mount(<Score difficult={"easy"} score={10000} answers={10} indexState={() => {
      expect(wrapper.props().score).toBe(10000);
    }}/>);
    wrapper.find('button').simulate('click');
  })
})