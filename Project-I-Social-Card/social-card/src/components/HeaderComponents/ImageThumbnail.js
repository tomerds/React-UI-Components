import './Header.css';

import React from 'react';



class ImageThumbnail extends React.Component {
  render() {
    return (
      <div className="image-holder">
        <img src="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png" alt="react"></img>
      </div>
    )
  }
};

export default ImageThumbnail;