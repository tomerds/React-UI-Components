import './Header.css';

import React from 'react';


class HeaderContainer extends React.Component {
  render() {
    return (
      <div className="HeaderContainer">
        <HeaderTitle />
        <ImageThumbnail />
      </div>
    )
  }
}

class ImageThumbnail extends React.Component {
  render() {
    return (
      <img src="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png" alt="react"></img>
    )
  }
}

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
}

class HeaderContent extends React.Component {

  render() {
    return (
      <div>
        <p className="header-content">Hodor Hodor Hodor HodoHodor Hodor Hodor Hodor Hodor Hodorr Hodor Hodor Hodor Hodor Hodor Hodor Hodor Hodor </p>
      </div>
    )
  }
}
