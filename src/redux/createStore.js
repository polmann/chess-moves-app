import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import chess from './chess';

export default function() {
  return createStore(
    combineReducers({
      chess,
    }),
    compose(applyMiddleware(thunk)),
  );
}
