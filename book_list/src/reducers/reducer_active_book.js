// State argument is not application state, only the state
// this reducer is responsible for
export default function(state = null, action) {
  console.log("active book reducer called", state)
  switch(action.type) {
  case 'BOOK_SELECTED':
    return action.payload;
  }

  return state;
}
