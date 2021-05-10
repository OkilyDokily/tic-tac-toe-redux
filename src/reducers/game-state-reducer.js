import * as c from '../actions/ActionTypes'

const start = {
  history: [{
    squares: Array(9).fill(null),
  }],
  stepNumber: 0,
  xIsNext: true,
};


const reducer = (state = start,action) =>
{
  switch(action.type){
    case c.ADD_SQUARES:
      return {...start,history:[...start.history.concat(action.squares)]};
    case c.STEP_NUMBER:
      return {...start,stepNumber:action.stepNumber}
    case c.NEW_PLAYER:
      return {...start,xIsNext:action.xIsNext}
    default:
  }
}

export default reducer;

