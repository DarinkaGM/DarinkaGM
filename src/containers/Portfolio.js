import React from 'react';
import PortfolioItem from '../components/PortfolioItem';
import PortfolioCategory from '../components/PortfolioCategory';
import weather from '../media/weather.gif';
import abelTh from '../media/ABEL-thumbnail.jpg';
import abelMd from '../media/ABEL-Modal.jpg';
import guideTh from '../media/GUIDEIT-thumbnail.jpg';
import guideMd from '../media/GUIDEIT-Modal.jpg';
import ZeeguuTH from '../media/Zeeguu-TH.png';
import ZeeguuMD from '../media/Zeeguu-md.png';
import plantsTh from '../media/Plants-UI-Thumbnail.jpg';
import plantsMd from '../media/Plants-UI-Modal.jpg';
import pod from '../media/podcast-thumbnail.jpg';
import searcher from '../media/giphy.gif';
import chatappTH from '../media/chat-app-th.png';
import chatappMD from '../media/chat-app-md.gif';
import Modal from './Modal';

function Portfolio() {
  return (
    <div className="portfolio">
      <h2 id="portfolio">PORTFOLIO</h2>
      <PortfolioCategory title="UX Cases">
        <PortfolioItem thumbnailSrc={abelTh} alt="Re-design for ABEL's website" modalImgSrc={abelMd}/>
        <PortfolioItem thumbnailSrc={guideTh} alt="Guide-IT Project" modalImgSrc={guideMd}/>
      </PortfolioCategory>
      <PortfolioCategory title="UI Design">
        <PortfolioItem thumbnailSrc={ZeeguuTH} alt="Redesign for Zeeguu.org" modalImgSrc={ZeeguuMD} />
        <PortfolioItem thumbnailSrc={plantsTh} alt="Interface for an online plants shop" modalImgSrc={plantsMd} />
        <PortfolioItem thumbnailSrc={pod} alt="Interface for a podcast App" modalImgSrc={pod}/>
      </PortfolioCategory>
      <PortfolioCategory title="JS">
        <PortfolioItem thumbnailSrc={chatappTH} alt="Weather App" modalImgSrc={chatappMD}/>
        <PortfolioItem thumbnailSrc={weather} alt="Weather App" modalImgSrc={weather}/>
        <PortfolioItem thumbnailSrc={searcher} alt="Giphy searcher" modalImgSrc={searcher}/>
      </PortfolioCategory>
    </div>
  );
}

export default Portfolio;
