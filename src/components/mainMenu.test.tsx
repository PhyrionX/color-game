import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Enzyme from 'enzyme';
import * as ReactFifteenAdapter from 'enzyme-adapter-react-15'
import renderer from 'react-test-renderer';
import {MainMenu} from './mainMenu';

Enzyme.configure({ adapter: new ReactFifteenAdapter() })
describe('<MainMenu />', () => {
  it('renders without crashing', () => {
    const wrapper = Enzyme.shallow(
    <MainMenu 
      dificult={"easy"} 
      index={true} 
      startGame={(robot: boolean) => console.log("a")} 
      chooseDificult={(e: any) => {

    }}/>);
    expect(wrapper.find('div').length).toBeGreaterThan(1);
  });
})