import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Enzyme from 'enzyme';
import * as ReactFifteenAdapter from 'enzyme-adapter-react-15'
import renderer from 'react-test-renderer';
import {Instructions} from '../src/components/instructions';

Enzyme.configure({ adapter: new ReactFifteenAdapter() })
describe('<Instructions />', () => {
  it('renders without crashing', () => {
    const wrapper = Enzyme.shallow(<Instructions difficult={"easy"} robot={false} startGame={() => {}}/>);
    expect(wrapper.find('div.instructionsDiv').length).toBe(1);
  });

  it('Score props', () => {
    const wrapper = Enzyme.mount(<Instructions difficult={"easy"} robot={false} startGame={() => {}}/>);
    expect(wrapper.props().difficult).toBe("easy");
    wrapper.setProps({difficult: "normal"});
    expect(wrapper.props().difficult).toBe("normal");
  })

  it('Click button back', () => {
    const wrapper = Enzyme.mount(<Instructions difficult={"easy"} robot={false} startGame={() => {
      expect(wrapper).toBeTruthy()
    }}/>);
    wrapper.find('button').simulate('click');
  })
})