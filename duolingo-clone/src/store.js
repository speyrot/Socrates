// duolingo-clone/src/store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { userReducer, courseReducer } from './reducers';

const rootReducer = combineReducers({
  user: userReducer,
  course: courseReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
