import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Enzyme from 'enzyme';
import * as ReactFifteenAdapter from 'enzyme-adapter-react-15'
import renderer from 'react-test-renderer';
import {Timer} from '../src/components/timer';


Enzyme.configure({ adapter: new ReactFifteenAdapter() })
describe('<Timer />', () => {
  it('renders without crashing', () => {
    const result = Enzyme.shallow(
      <Timer lvl={1} difficult={"easy"} timeoutAnswer={() => {}} onRef={() => {}}/>
    )
    expect(result).toBeTruthy();
  });

  it('render progress ', () => {
    const result = Enzyme.mount(
      <Timer lvl={1} difficult={"easy"} timeoutAnswer={() => {}} onRef={() => {}}/>
    )

    
    expect(result.find('progress').length).toEqual(1)
  })

  it(`in easy timer 6sec`, () => {
    const componentDidMount = jest.fn()
    const componentWillUnmount = jest.fn()
    let timeEasy = 6000;
    let wrapper: any;
    wrapper = Enzyme.shallow(
      <Timer lvl={1} difficult={"easy"} timeoutAnswer={() => {
        expect(wrapper.state().time).toBe(0);
      }} onRef={() => {}}/>
    )
    for (let i = timeEasy; i > 0; i -= 50) {
      wrapper.instance().handleTime()
      
    }
  })

  it(`in easy timer 4sec, expect 2sec`, () => {
    const componentDidMount = jest.fn()
    const componentWillUnmount = jest.fn()
    let timeEasy = 4000;
    let wrapper: any;
    wrapper = Enzyme.shallow(
      <Timer lvl={1} difficult={"easy"} timeoutAnswer={() => {
        expect(wrapper.state().time).toBe(6000);
      }} onRef={() => {}}/>
    )
    for (let i = timeEasy; i > 0; i -= 50) {
      wrapper.instance().handleTime()
      
    }
    expect(wrapper.state().time).toBe(2000);

  })

  it ('when componentWillReceiveProps and diferent lvl restart de time', () => {
    let timeEasy = 6000;
    let wrapper: any;
    wrapper = Enzyme.mount(
      <Timer lvl={1} difficult={"easy"} timeoutAnswer={() => {
      }} onRef={() => {}}/>    )

    expect(wrapper.props().lvl).toEqual(1);
    wrapper.setProps({lvl: 5})

    for (let i = timeEasy; i > 0; i -= 50) {
      wrapper.instance().handleTime()
      
    }

    expect(wrapper.state().time).toBe(0);
    wrapper.setProps({lvl: 6})
    expect(wrapper.state().time).toBe(6000);
  })
})