import Board from './Board'
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as d from '../actions/index';

class Game extends React.Component {

  handleClick(i) {
    const { squares, xIsNext, dispatch, stepNumber } = this.props;

    if (calculateWinner(squares) || squares[i]) {
      return;
    }
   
    if (stepNumber !== null) {
      dispatch(d.sliceHistory(stepNumber))
      dispatch(d.stepNumber(null));
    }

    const newSquares = [...squares];
    newSquares[i] = xIsNext ? 'X' : 'O';

    dispatch(d.addSquares(newSquares));
    dispatch(d.switchPlayer(!xIsNext));


  }

  jumpTo(step) {
    const { dispatch } = this.props;
    dispatch(d.stepNumber(step));
    dispatch(d.switchPlayer((step % 2) === 0));
  }

  render() {
    const { squares, length, xIsNext } = this.props;
    const winner = calculateWinner(squares);

    const moves = new Array(length).fill(1).map((step, move) => {
      const desc = !move ? 'Go to game start' : !((move + 1) === length) ? 'Go to move #' + move : "Go to final move";
        
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }
    return (
      <div className="game">
        <div className="game-board">
          <Board onClick={(i) => this.handleClick(i)} squares={squares} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    length: state.history.length,
    squares: (state.stepNumber === null) ? state.history[state.history.length - 1] : state.history[state.stepNumber],
    xIsNext: state.xIsNext,
    stepNumber: state.stepNumber
  };
};

Game.propTypes = {
  history: PropTypes.array,
  stepNumber: PropTypes.number,
  xIsNext: PropTypes.bool,
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}


export default connect(
  mapStateToProps
)(Game);
