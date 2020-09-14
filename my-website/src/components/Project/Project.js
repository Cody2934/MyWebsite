import React from 'react';

const Project = ({name, image, about, description, github, site, type}) => (
  <div className="the-card">

    <div className="image-container">
      <img className="project-image" src={image} alt={name} />
    </div>

    <div className="card-text-front">
      <h2>{name}</h2>
      <p>{about}</p>
      <p>{type}</p>
    </div>

    <div className="card-text-back">
      <p>{description}</p>
      <p>{github}</p>
      <p>{site}</p>
    </div>

  </div>
);

export default Project;