import React from 'react';
import Modal from '../containers/Modal';

function PortfolioItem({ thumbnailSrc, alt, modalImgSrc }) {
  return (
    <Modal modalImgSrc={modalImgSrc} alt={alt}>
      <img className="myImg" src={thumbnailSrc} alt={alt} />
    </Modal>
  );
}

export default PortfolioItem;
