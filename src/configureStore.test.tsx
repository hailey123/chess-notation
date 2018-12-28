import * as Redux from 'redux';
// import * as ReactDom from 'react-dom';
// import * as RegisterServiceWorker from './registerServiceWorker';

import { configureStore } from './configureStore';

describe('configureStore', () => {
  beforeAll(() => {
    jest.mock('redux');
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('combines reducers', () => {
    const mockCombineReducers = jest.spyOn(Redux, 'combineReducers');
    configureStore();
    expect(mockCombineReducers).toHaveBeenCalledTimes(1);
  });
  it('composes middleware', () => {
    const mockCompose = jest.spyOn(Redux, 'compose');
    configureStore();
    expect(mockCompose).toHaveBeenCalledTimes(1);
  });
  it('creates a store', () => {
    const mockCreateStore = jest.spyOn(Redux, 'createStore');
    configureStore();
    expect(mockCreateStore).toHaveBeenCalledTimes(1);
  });
});
