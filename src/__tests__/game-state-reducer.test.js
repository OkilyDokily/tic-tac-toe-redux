import reducer from '../reducers/game-state-reducer'

describe("games",()=>{
  it("add-squares",()=>{
    const squares = {squares:Array(9).fill(null)};
    squares.squares[2] = "X";
    const result = reducer(undefined,{type:"ADD_SQUARES",squares:squares})
    expect(result.history).toEqual([{
      squares: Array(9).fill(null),
    },squares])
  })
  it("step-number", () => {
    const squares = { squares: Array(9).fill(null) };
    squares.squares[2] = "X";
    const result = reducer(undefined, { type: "ADD_SQUARES", squares: squares })
    const stepNumber = reducer(result, {type:"STEP_NUMBER",stepNumber:1})
    expect(stepNumber.stepNumber).toEqual(1)
  })

  it("new-player", () => {
    const squares = { squares: Array(9).fill(null) };
    squares.squares[2] = "X";
    const result = reducer(undefined, { type: "ADD_SQUARES", squares: squares })
    const stepNumber = reducer(result, { type: "STEP_NUMBER", stepNumber: 1 });
    const newPlayer = reducer(stepNumber,{type:"NEW_PLAYER",xIsNext:false})
    expect(newPlayer.xIsNext).toEqual(false)
  })

})