import './Header.css';

import React from 'react';


class HeaderTitle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toLocaleString()
    };
  }

  render() {
    return (
      <div className="header-title">
        <h1>Lambda School</h1>
        <h2>@LambdaSchool</h2>
        <p>{this.state.date}</p>
      </div>
    )
  }
};

export default HeaderTitle;
