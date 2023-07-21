import React, { Component } from 'react';
import footer from './index.module.css';

export default class Footer extends Component {
  render() {
    return (
      <div className={footer.footer}>
        <a>这里是页脚</a>
      </div>
    )
  }
}
