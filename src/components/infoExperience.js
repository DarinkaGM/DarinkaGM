import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';
import "../css/collapsible.css"

function InfoExperience({ title, dateRange, location, description, projectLink }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapsible = () => {
    setIsOpen(prevIsOpen => !prevIsOpen);
  };
  
  return (
    <>
      <b>{title}</b><br/>
      {dateRange}<br/> <FontAwesomeIcon icon={faMapMarker} style={{ fontSize: 'small', color: 'gray' }}/> {location}
      <br/>
      {description && (
        <button type="button" className="collapsible" onClick={toggleCollapsible}>
          Details
        </button>
      )}
      {isOpen && description && (
        <div className="content">
          {description}
          {projectLink && <a href={projectLink}><u>See the project</u></a>}
        </div>
      )}
    </>
  );
}

export default InfoExperience;
