import * as c from './ActionTypes';


export const addSquares = squares => ({
  type: c.ADD_SQUARES,
  squares:[...squares]
});

export const stepNumber = (stepNumber) => ({
  type: c.STEP_NUMBER,
  stepNumber:stepNumber
});

export const switchPlayer = (isXFirst) => {
  return {
  type: c.SWITCH_PLAYER,
  xIsNext:isXFirst
}};

export const sliceHistory = (stepNumber) => {
  return {
    type: c.SLICE_HISTORY,
    stepNumber:stepNumber
  }
};


