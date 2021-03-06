import React from 'react';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = () => {
    return (
      <div className="header-container">
        <ImageThumbnail />
        <div className="header-content">
          <HeaderTitle />
          <HeaderContent />
        </div>
      </div>
    )
  }
  
  export default HeaderContainer