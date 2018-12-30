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
  it('has a "panel-before" for padding purposes', () => {
    expect(wrapper.find('div.panel-before').length).toBe(1);
  });
  it('has a play region', () => {
    expect(wrapper.find('PlayRegion').length).toBe(1);
  });
  it('has a control region', () => {
    expect(wrapper.find('GameControls').length).toBe(1);
  });
});
