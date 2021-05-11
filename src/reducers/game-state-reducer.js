import * as c from '../actions/ActionTypes'

const start = {
  history: [
    Array(9).fill(null),
  ],
  xIsNext: true
};


const reducer = (state = start,action) =>
{
  switch(action.type){
    case c.ADD_SQUARES:
      return { ...state, history: [...state.history].concat([action.squares])};
    case c.NEW_PLAYER:
      return {...state,xIsNext:action.xIsNext}
    case c.CHANGE_STEP:
      return {...state,history:state.history.slice(0,action.stepNumber+1)}
    default:
      return state;
  }
}

export default reducer;

