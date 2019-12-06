const initialState = {
  item: 'plop'
};

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return state;
    default:
      return state;
  }
};
export default globalReducer;
