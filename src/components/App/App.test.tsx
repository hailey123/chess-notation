import * as React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';

import App from './App';

describe('App', () => {
  let wrapper: ShallowWrapper<any, {}, App>;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('has an AppBar header', () => {
    expect(wrapper.children().contains('AppBar'));
  });
  it('has 3 panels', () => {
    expect(wrapper.find('div.panel-before').length).toBe(1);
    expect(wrapper.find('div.panel-main').length).toBe(1);
    expect(wrapper.find('div.panel-after').length).toBe(1);
  });
  it('has a start button', () => {
    expect(wrapper.children().contains('StartButton'));
  });
  it('has a round countdown', () => {
    expect(wrapper.children().contains('RoundCountdown'));
  });
  it('has a counter', () => {
    expect(wrapper.children().contains('Counter'));
  });
});
