import * as c from './ActionTypes';


export const addSquares = squares => ({
  type: c.ADD_SQUARES,
  squares:[...squares]
});

export const stepNumber = (stepNumber) => ({
  type: c.STEP_NUMBER,
  stepNumber:stepNumber
});

export const newPlayer = (isXFirst) => {
  return {
  type: c.NEW_PLAYER,
  xIsNext:isXFirst
}};

export const changeStep = (stepNumber) => {
  return {
    type: c.CHANGE_STEP,
    stepNumber:stepNumber
  }
};


