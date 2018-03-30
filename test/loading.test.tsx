import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Enzyme from 'enzyme';
import * as ReactFifteenAdapter from 'enzyme-adapter-react-15'
import renderer from 'react-test-renderer';
import {Loading} from '../src/components/loading';

Enzyme.configure({ adapter: new ReactFifteenAdapter() })
describe('<Loading />', () => {
  it('renders without crashing', () => {
    const wrapper = Enzyme.shallow(
    <Loading 
      loading={true} />);
    expect(wrapper.find('div').length).toBe(1);
  });
})