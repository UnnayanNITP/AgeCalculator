import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    if (!dob) {
      alert('Please select your Date of Birth');
      return;
    }
    const today = new Date();
    const birthDate = new Date(dob);

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Adjust months and years if needed
    if (days < 0) {
      months--;
      const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += previousMonth.getDate();
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
  };

  return (
    <div className="container">
      <h1 className="title">Age Calculator</h1>
      <div className="input-section">
        <label htmlFor="dob">Select your Date of Birth:</label>
        <input
          type="date"
          id="dob"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <button onClick={calculateAge}>Calculate Age</button>
      </div>
      {age !== null && (
        <div className="result">
          <h2>Your Age:</h2>
          <p>
            {age.years} {age.years === 1 ? 'year' : 'years'},{' '}
            {age.months} {age.months === 1 ? 'month' : 'months'}, and{' '}
            {age.days} {age.days === 1 ? 'day' : 'days'} old
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
