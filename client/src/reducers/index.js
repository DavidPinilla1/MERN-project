import { combineReducers } from 'redux';
import books from './books_reducers';
import user from './user_reducer';

const rootReducer = combineReducers({
  books,
  user
});

export default rootReducer;
