import './Header.css';

import React from 'react';

import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';

class HeaderContainer extends React.Component {
  render() {
    return (
      <div className="header-container">
        <div className="HeaderImage">
          <ImageThumbnail />
        </div>

        <div className="HeaderContent">
          <HeaderTitle />
          <HeaderContent />
        </div>
      </div>
    )
  }
};

export default HeaderContainer;



