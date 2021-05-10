import * as c from './ActionTypes';


export const addSquares = squares => ({
  type: c.ADD_SQUARES,
  squares:squares
});

export const stepNumber = (stepNumber) => ({
  type: c.STEP_NUMBER,
  stepNumber:stepNumber
});

export const newPlayer = (xIsFirst) => ({
  type: c.NEW_PLAYER,
  xIsFirst:xIsFirst
});