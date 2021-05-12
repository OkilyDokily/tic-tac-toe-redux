import * as c from '../actions/ActionTypes'

const start = {
  history: [
    Array(9).fill(null),
  ],
  xIsNext: true,
  stepNumber: null
};


const reducer = (state = start,action) =>
{
  switch(action.type){
    case c.ADD_SQUARES:
      return { ...state, history: [...state.history].concat([action.squares])};
    case c.SWITCH_PLAYER:
      return {...state,xIsNext:action.xIsNext}
    case c.SLICE_HISTORY:
      return {...state,history:state.history.slice(0,action.stepNumber+1)}
    case c.STEP_NUMBER:
      return {...state,stepNumber:action.stepNumber}
    default:
      return state;
  }
}

export default reducer;

