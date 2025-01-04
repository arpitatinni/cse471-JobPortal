import React, { useEffect, useState } from 'react';

function JobRecommendations({ candidateId }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`/api/candidates/matched-jobs/${candidateId}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [candidateId]);

  return (
    <div>
      <h2>Recommended Jobs</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job._id}>{job.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default JobRecommendations;
