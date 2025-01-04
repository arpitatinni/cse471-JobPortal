import React, { useEffect, useState } from 'react';

function AppliedJobs({ candidateId }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(`/api/candidates/applied-jobs/${candidateId}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [candidateId]);

  return (
    <div>
      <h2>Applied Jobs</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job._id}>{job.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default AppliedJobs;
