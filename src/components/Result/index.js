import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { PLAYER, PLAYERS } from '../../constants/dictionary';
import './styles.less';

const Result = ({
  className, title, value, colour, percentage
}) => (
  <div className={cx('result', className)}>
    <span className="result__point" style={{ backgroundColor: colour }} />
    <span className="result__title">
      {title}
    </span>
    <span className="result__value">
      {' - '}
      {`${percentage}% (${value} ${value < 2 ? PLAYER : PLAYERS})`}
    </span>

  </div>
);

Result.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
  colour: PropTypes.string.isRequired
};

Result.defaultProps = {
  className: undefined
};

export default Result;
