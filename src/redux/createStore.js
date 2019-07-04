import { createStore, combineReducers } from 'redux';
import chess from './chess';

export default function() {
  return createStore(
    combineReducers({
      chess,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
}
