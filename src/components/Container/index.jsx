import React, { Component } from 'react';
import container from './index.module.css';
import Article from './Article';
import MiddleList from './MiddleList';
import RigheSide from './RightSide';

export default class Container extends Component {
  render() {
    return (
      <div className={container.container}>
        <Article/>
        <MiddleList/>
        <RigheSide/>
      </div>
    )
  }
}
