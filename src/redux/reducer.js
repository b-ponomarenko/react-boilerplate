export default function rootReducer(state = {}, action) {
  switch (action.type) {
    case 'SERVER_DATA_LOADED':
      return { data: action.payload };
    default:
      return state;
  }
}