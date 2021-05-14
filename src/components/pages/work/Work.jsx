import React from 'react';

const Work = ({ name, website, image }) => {
  return (
    <div className="work-container">
      <div className="work-container-image">
        <img src={`/images/${image.name}`} alt={image.alt} />
      </div>
      <div className="work-container-content">
        <h1>{name}</h1>
      </div>
    </div>
  );
};

export default Work;
