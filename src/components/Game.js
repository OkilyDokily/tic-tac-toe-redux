import Board from './Board'
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as d from '../actions/index';

class Game extends React.Component {

  handleClick(i) {
    const { squares, xIsNext, dispatch } = this.props;
  
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const newSquares = [...squares];
    newSquares[i] = xIsNext ? 'X' : 'O';
    dispatch(d.addSquares(newSquares));
    dispatch(d.newPlayer(!xIsNext));
  }
  
  jumpTo(step) {
    const {dispatch} = this.props;
    dispatch(d.changeStep(step));
    dispatch(d.newPlayer((step % 2) === 0));
  }

  render() {
    const {squares, length, xIsNext} = this.props;
    const winner = calculateWinner(squares);

    const moves = new Array(length-1).fill(1).map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
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

const mapStateToProps = (state) => (
 {
    length:state.history.length,
    squares: state.history[state.history.length - 1],
    xIsNext: state.xIsNext
  }
);

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
