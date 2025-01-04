import React from 'react';
import CandidateProfile from './components/CandidateProfile';
import AppliedJobs from './components/AppliedJobs';
import JobRecommendations from './components/JobRecommendations';

function App() {
  const candidateId = '123456'; // Replace with actual candidate ID

  return (
    <div>
      <CandidateProfile candidateId={candidateId} />
      <AppliedJobs candidateId={candidateId} />
      <JobRecommendations candidateId={candidateId} />
    </div>
  );
}

export default App;

