import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Enzyme from 'enzyme';
import * as ReactFifteenAdapter from 'enzyme-adapter-react-15'
import renderer from 'react-test-renderer';
import {MainMenu} from '../src/components/mainMenu';

Enzyme.configure({ adapter: new ReactFifteenAdapter() })
describe('<MainMenu />', () => {
  it('renders without crashing', () => {
    const wrapper = Enzyme.shallow(
    <MainMenu 
      difficult={"easy"} 
      index={true} 
      startGame={(robot: boolean) => {}} 
      choosedifficult={(e: any) => {

    }}/>);
    expect(wrapper.find('div').length).toBeGreaterThan(1);
  });

  it('renders without easy', () => {
    const wrapper = Enzyme.shallow(
    <MainMenu 
      difficult={"normal"} 
      index={true} 
      startGame={(robot: boolean) => {}} 
      choosedifficult={(e: any) => {
      expect(wrapper).toBeTruthy();
    }}/>);
    wrapper.find('div.difficultChooser').simulate('click');
  });
})
