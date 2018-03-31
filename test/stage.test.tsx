import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Enzyme from 'enzyme';
import * as ReactFifteenAdapter from 'enzyme-adapter-react-15'
import renderer from 'react-test-renderer';
import {Stage} from '../src/components/stage';
import {Timer} from '../src/components/timer';

Enzyme.configure({ adapter: new ReactFifteenAdapter() })
describe('<Stage />', () => {
  it('renders without crashing', () => {
    const result = Enzyme.shallow(
      <Stage lvl={1} difficult={"easy"} timeoutAnswer={() => {}} handleClick={(e: any, time: number) => {}}/>
    )
    expect(result).toBeTruthy();
  });

  it ('No render if lvl 0', () => {
    const result = Enzyme.shallow(
      <Stage lvl={0} difficult={"easy"} timeoutAnswer={() => {}} handleClick={(e: any, time: number) => {}}/>
    )
    expect(result.find(Timer).length).toEqual(0);
  })

  it ('No render if lvl 11', () => {
    const result = Enzyme.shallow(
      <Stage lvl={11} difficult={"easy"} timeoutAnswer={() => {}} handleClick={(e: any, time: number) => {}}/>
    )
    expect(result.find(Timer).length).toEqual(0);
  })

  it ('render if lvl between 1 and 10', () => {
    for (let i = 1; i <= 10; i++) {
      const result = Enzyme.shallow(
        <Stage lvl={i} difficult={"easy"} timeoutAnswer={() => {}} handleClick={(e: any, time: number) => {}}/>
      )

      expect(result.find(Timer).length).toEqual(1);
    }
  })

  it ('allows us to set props', () => {
    const wrapper = Enzyme.mount(
      <Stage lvl={1} difficult={"easy"} timeoutAnswer={() => {}} handleClick={(e: any, time: number) => {}}/>
    )

    expect(wrapper.props().lvl).toEqual(1);
    wrapper.setProps({lvl: 5})
    expect(wrapper.props().lvl).toEqual(5);
    expect(wrapper.props().difficult).toEqual("easy")
    wrapper.setProps({difficult: "normal"})
    expect(wrapper.props().difficult).toEqual("normal")
  })

  it('simulate click if time is 122', () => {
    const wrapper = Enzyme.shallow(
      <Stage lvl={1} difficult={"easy"} timeoutAnswer={() => {}} handleClick={(e: any, time: number) => {
        expect(time).toEqual(122);
      }}/>
    )
    wrapper.setState({child: {state: {time: 122}}});
    wrapper.find('div#stage').simulate('click')
  })
})