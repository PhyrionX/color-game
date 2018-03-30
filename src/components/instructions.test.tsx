import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Enzyme from 'enzyme';
import * as ReactFifteenAdapter from 'enzyme-adapter-react-15'
import renderer from 'react-test-renderer';
import {Instructions} from './instructions';

Enzyme.configure({ adapter: new ReactFifteenAdapter() })
describe('<Instructions />', () => {
  it('renders without crashing', () => {
    const wrapper = Enzyme.shallow(<Instructions dificult={"easy"} startGame={() => console.log("a")}/>);
    expect(wrapper.find('div.instructionsDiv').length).toBe(1);
  });

  it('Score props', () => {
    const wrapper = Enzyme.mount(<Instructions dificult={"easy"} startGame={() => console.log("a")}/>);
    expect(wrapper.props().dificult).toBe("easy");
    wrapper.setProps({dificult: "normal"});
    expect(wrapper.props().dificult).toBe("normal");
  })

  it('Click button back', () => {
    const wrapper = Enzyme.mount(<Instructions dificult={"easy"} startGame={() => {
      expect(wrapper).toBeTruthy()
    }}/>);
    wrapper.find('button').simulate('click');
  })
})