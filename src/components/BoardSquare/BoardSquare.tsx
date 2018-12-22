import * as React from 'react';
import classnames from 'classnames';

import { Props } from './props';

import './BoardSquare.css';

class BoardSquare extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(_event: React.MouseEvent<HTMLDivElement>) {
    const { handleClickAtCoordinate, isTarget } = this.props;
    handleClickAtCoordinate(isTarget);
  }
  render(): JSX.Element {
    const { color, isTarget } = this.props;
    return <div
      className={classnames('board-square', isTarget ? 'correct-answer' : 'wrong-answer')}
      style={{
        backgroundColor: color
      }}
      onClick={this.handleClick}>{
      }</div>;
  }
}

export default BoardSquare;
