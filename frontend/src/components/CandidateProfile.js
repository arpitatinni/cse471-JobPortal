import React, { useState, useEffect } from 'react';

function CandidateProfile({ candidateId }) {
  const [profile, setProfile] = useState({});
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetch(`/api/candidates/${candidateId}`)
      .then((res) => res.json())
      .then((data) => setProfile(data));
  }, [candidateId]);

  const handleUpdate = () => {
    fetch(`/api/candidates/update/${candidateId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => setProfile(data));
  };

  return (
    <div>
      <h2>Candidate Profile</h2>
      <input
        type="text"
        placeholder="Name"
        value={formData.name || profile.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
      />
      <button onClick={handleUpdate}>Update Profile</button>
    </div>
  );
}

export default CandidateProfile;
