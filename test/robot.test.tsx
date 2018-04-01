import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Enzyme from 'enzyme';
import * as ReactFifteenAdapter from 'enzyme-adapter-react-15'
import renderer from 'react-test-renderer';
import {Robot} from '../src/components/robot';
import {Stage} from '../src/components/stage';
jest.useFakeTimers();
Enzyme.configure({ adapter: new ReactFifteenAdapter() })
describe('<Robot />', () => {
  it('renders without crashing', () => {
    const result = Enzyme.mount(
      <Robot lvl={0} difficult={"hard"}/>
    )

    expect(result).toBeTruthy();
    
  });

  it('render correctly', () => {
    const wrapper = Enzyme.shallow(
      <Robot lvl={0} difficult={"hard"}/>
    )
    expect(wrapper.find("div.overlay").length).toBe(1);
  })

  it('Test robot logic willmount without button start', () => {

    
    const result = Enzyme.mount(
      <Robot lvl={0} difficult={"hard"}/>
    )

    //result.setProps({lvl: 1})

    jest.runAllTimers();
    //expect(setTimeout).toHaveBeenCalledTimes(2);
    //expect(setTimeout).toHaveBeenLastCalledWith(expect.any((Function)), 750);
  })


  it('Test robot logic willmount with button start', () => {
    const button = document.createElement('button');
    button.id = "startGameButton";
    button.onclick = () => {
      expect(result.props().lvl).toBe(0);
    }
    document.body.appendChild(button)
    
    const result = Enzyme.mount(
      <Robot lvl={0} difficult={"hard"}/>,
      {attachTo: button}
    )

    //result.setProps({lvl: 1})

    jest.runAllTimers();
    //expect(setTimeout).toHaveBeenCalledTimes(2);
    //expect(setTimeout).toHaveBeenLastCalledWith(expect.any((Function)), 750);
  })

  it('Test robot logic componentDidUpdate without questionLabel', () => {    
    const result = Enzyme.mount(
      <Robot lvl={0} difficult={"hard"}/>,
    )
    expect(result.props().lvl).toBe(0);
    result.setProps({lvl: 1})
    expect(result.props().lvl).toBe(1);
    jest.runAllTimers();
    //expect(setTimeout).toHaveBeenCalledTimes(2);
    //expect(setTimeout).toHaveBeenLastCalledWith(expect.any((Function)), 750);
  })

  it('Test robot logic componentDidUpdate with questionLabel', () => {    
    const span = document.createElement('span');
    span.id = "questionLabel";
    span.style.color = "red";
    document.body.appendChild(span)
    const result = Enzyme.mount(
      <Robot lvl={0} difficult={"hard"}/>,
      {attachTo: span}
    )

    result.setProps({lvl: 1})

    jest.runAllTimers();
    //expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any((Function)), 500);
  })

  it('Test robot logic componentDidUpdate with questionLabel and solutionButton', () => {    
    const button1 = document.createElement('button');
    button1.className = "solutionButton";
    button1.innerText = "red"
    button1.onclick = () => {
      expect(result.props().lvl).toBe(1);
    }
    document.body.appendChild(button1)
    const result = Enzyme.mount(
      <Robot lvl={0} difficult={"hard"}/>,
      {attachTo: button1}
    )

    result.setProps({lvl: 1})

    jest.runAllTimers();
    //expect(setTimeout).toHaveBeenCalledTimes(2);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any((Function)), 500);
  })

})