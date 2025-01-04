import React from 'react';

function JobCard({ title, company, location }) {
  return (
    <div className="job-card">
      <h3>{title}</h3>
      <p>{company}</p>
      <p>{location}</p>
    </div>
  );
}

export default JobCard;
