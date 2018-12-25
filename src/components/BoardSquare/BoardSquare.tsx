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
    if (!this.props.roundInProgress) {
      return;
    }
    const { handleClickAtCoordinate, isTarget } = this.props;
    handleClickAtCoordinate(isTarget);
  }
  render(): JSX.Element {
    const { color, isTarget, roundInProgress } = this.props;
    let classNames = '';
    if (roundInProgress) {
      classNames = classnames('enabled', isTarget ? 'correct-answer' : 'wrong-answer');
    }
    return <div
      className={classnames('board-square', classNames)}
      style={{
        backgroundColor: color
      }}
      onClick={this.handleClick}>{
      }</div>;
  }
}

export default BoardSquare;
