export default function(state = {}, action) {
  switch (action.type) {
    case 'GET_BOOKS':
      return { ...state, list: action.payload };
    case 'GET_BOOK':
      return {
        ...state,
        book: action.payload
      };
    case 'GET_BOOK_W_REVIEWER':
      return {
        ...state,
        book: action.payload.book,
        reviewer: action.payload.reviewer
      };
    case 'CLEAR_BOOK_W_REVIEWER':
      return {
        ...state,
        book: action.payload.book,
        reviewer: action.payload.reviewer
      };
    case 'ADD_BOOK':
      return {
        ...state,
        newbook: action.payload
      };
    case 'CLEAR_NEW_BOOK':
      return {
        ...state,
        newbook: action.payload
      };
    case 'UPDATE_BOOK':
      return {
        ...state,
        newbook: action.payload
      };

    default:
      return state;
  }
}
