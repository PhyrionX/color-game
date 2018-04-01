import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Enzyme from 'enzyme';
import * as ReactFifteenAdapter from 'enzyme-adapter-react-15'
import renderer from 'react-test-renderer';
import {confApp, difficult, getScore, getQuestion} from '../src/tool';

Enzyme.configure({ adapter: new ReactFifteenAdapter() })
describe('Tools', () => {
  it('test conf app', () => {
    expect(confApp.STAGES).toBe(10);
    expect(confApp.INSTRUCTION_STAGE).toBe(0)
  });

  it('test difficult parameters', () => {
    /* time by difficult */
    expect(difficult.easy.time).toBe(6000);
    expect(difficult.normal.time).toBe(3000);
    expect(difficult.hard.time).toBe(1000);
    
    /* colors by difficult */
    expect(difficult.easy.colors).toBe(3);
    expect(difficult.normal.colors).toBe(6)
    expect(difficult.hard.colors).toBe(12)
  })

  it('test get score of 1000', () => {
    expect(getScore("easy", 6000)).toBe(1000);
    expect(getScore("normal", 3000)).toBe(1000);
    expect(getScore("hard", 1000)).toBe(1000);
  })

  it('test get score of 500', () => {
    expect(getScore("easy", 3000)).toBe(500);
    expect(getScore("normal", 1500)).toBe(500);
    expect(getScore("hard", 500)).toBe(500);   
  })

  it('test get question', () => {
    expect(getQuestion('easy')).toBeDefined()
    expect(getQuestion('normal')).toBeDefined()
    expect(getQuestion('hard')).toBeDefined()
    expect(getQuestion('red')).toBeNull()
  })
})