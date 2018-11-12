import * as React from 'react';

import { PropsPassedIn, PropsFromDispatch } from './props';

type Props = PropsPassedIn & PropsFromDispatch;

import './BoardSquare.css';

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
        // this.props.coordinate.file + this.props.coordinate.rank
      }</div>;
  }
}

export default BoardSquare;
