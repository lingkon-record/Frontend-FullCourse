import React, { useState, useEffect } from 'react';

const studentDataSet = [
  { name: "John Doe" },
  { name: "Jane Doe" },
  { name: "Michael Johnson" },
  { name: "Emily Smith" },
  // Add more student names as needed
];

const getRandomStudent = () => {
  const randomIndex = Math.floor(Math.random() * studentDataSet.length);
  return studentDataSet[randomIndex].name;
};

const RotatingButton = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [studentName, setStudentName] = useState('');

  const startRotation = () => {
    setIsRotating(true);
  };

  useEffect(() => {
    let rotationInterval;

    if (isRotating) {
      rotationInterval = setInterval(() => {
        setStudentName(getRandomStudent());
        setIsRotating(false); // Stop rotating after the first name is selected
      }, 1000);
    } else {
      clearInterval(rotationInterval);
    }

    return () => clearInterval(rotationInterval);
  }, [isRotating]);

  return (
    <div style={{ textAlign: 'center' }}>
      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: '#007bff',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transform: isRotating ? 'rotate(360deg)' : 'rotate(0)',
          transition: 'transform 2s ease-in-out',
        }}
        onClick={startRotation}
      >
        <span style={{ color: '#fff', fontSize: '20px' }}>Click Me!</span>
      </div>
      {studentName && (
        <div style={{ marginTop: '20px', fontSize: '18px' }}>
          <strong>Selected Student:</strong> {studentName}
        </div>
      )}
    </div>
  );
};

export default RotatingButton;

