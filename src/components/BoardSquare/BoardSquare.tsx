import * as React from 'react';

import { PropsPassedIn, PropsFromDispatch } from './props';

import './BoardSquare.css';

type Props = PropsPassedIn & PropsFromDispatch;

class BoardSquare extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(_event: React.MouseEvent<HTMLDivElement>) {
    this.props.handleClickAtCoordinate();
  }
  render(): JSX.Element {
    const { color } = this.props;
    return <div
      className="board-square"
      style={{
        backgroundColor: color
      }}
      onClick={this.handleClick}>{
        // Uncomment the below line to see the coordinates on the squares
        // for testing purposes:
        // this.props.coordinate.file + this.props.coordinate.rank
      }</div>;
  }
}

export default BoardSquare;
