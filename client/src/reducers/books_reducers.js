export default function(state = {}, action) {
  switch (action.type) {
    case 'GET_BOOKS':
      return { ...state, list: action.payload };
    default:
      return state;
  }
}
