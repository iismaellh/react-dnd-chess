import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Square extends Component {
  static propTypes = {
    black: PropTypes.bool
  };

  render() {
    const { black, x, y, occupied } = this.props;
    const fill = black ? '#6b6b6b' : '#FFFFFF';
    const stroke = black ? '#FFFFFF' : '#6b6b6b';

    return (
      <div style={{
        backgroundColor: fill,
        color: stroke,
        width: '100%',
        height: '100%'
      }} className={occupied} data-posx={x} data-posy={y}>
        {this.props.children}
      </div>
    );
  }
}