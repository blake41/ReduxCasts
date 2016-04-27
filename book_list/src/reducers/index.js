import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';
const blakeReducer = (function() {
  const myfunc = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBook
  })
  return function() {
    console.log("combine reducers called")
    return myfunc.apply(this, arguments)
  }
})()
// const blakeReducer = combineReducers({
//   books: BooksReducer,
//   activeBook: ActiveBook
// })
// debugger
export default blakeReducer;
