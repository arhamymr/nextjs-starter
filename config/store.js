import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
// import createSagaMiddleware from "redux-saga"
import reducer from 'Reducers';
// import sagas from "Sagas"

const composeEnhancers = composeWithDevTools({});

const composeMiddlewares = [];

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line global-require
  const { createLogger } = require('redux-logger');
  composeMiddlewares.push(createLogger());
}
// const sagaMiddleware = createSagaMiddleware()
const middlewares = applyMiddleware(
  promise,
  thunk,
  ...composeMiddlewares,
);
const enhancer = composeEnhancers(middlewares);

export const initStore = (initialStore) => {
  const store = createStore(reducer, initialStore, enhancer);
  // store.sagaTask = sagaMiddleware.run(sagas)
  return store;
};
export default null;
