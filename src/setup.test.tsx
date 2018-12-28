import * as Redux from 'redux';
// import * as ReactDom from 'react-dom';
// import * as RegisterServiceWorker from './registerServiceWorker';

import { configureStore } from './setup';

describe('init', () => {
  beforeAll(() => {
    jest.mock('redux');
    jest.mock('react-dom');
    jest.mock('./registerServiceWorker');
    // jest.mock('react-redux');
    // jest.spyOn(ReactDom, 'render').mockImplementation(() => { });
  });
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('configureStore', () => {
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

  // it('renders to the DOM', () => {
  //   const mockRender = jest.spyOn(ReactDom, 'render');
  //   expect(mockRender).toHaveBeenCalledTimes(1);
  // });
  // it('registers a service worker', () => {
  //   const mockRegisterServiceWorker = jest.spyOn(RegisterServiceWorker, 'default');
  //   expect(mockRegisterServiceWorker).toHaveBeenCalledTimes(1);
  // });
});
