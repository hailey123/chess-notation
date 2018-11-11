import * as React from 'react';

import { BoardSquareProps } from './props';

import './BoardSquare.css';

class BoardSquare extends React.PureComponent<BoardSquareProps> {
  render(): JSX.Element {
    const { color } = this.props;
    return <div
      className="board-square"
      style={{
        backgroundColor: color
      }}>{
        // this.props.coordinate.file + this.props.coordinate.rank
      }</div>;
  }
}

export default BoardSquare;
