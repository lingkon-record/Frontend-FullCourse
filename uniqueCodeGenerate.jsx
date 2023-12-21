 import React, { useState } from 'react';

const generateUniqueCode = () => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const randomStart = alphabet[Math.floor(Math.random() * alphabet.length)];
  const randomEnd = alphabet[Math.floor(Math.random() * alphabet.length)];

  // You can adjust the length of the numeric part as needed
  const randomNumericPart = Math.floor(Math.random() * 1000);

  return `${randomStart}${randomNumericPart}${randomEnd}`;
};

const UniqueCodeGenerator = () => {
  const [uniqueCode, setUniqueCode] = useState('');

  const generateCode = () => {
    const code = generateUniqueCode();
    setUniqueCode(code);
  };

  return (
    <div>
      <h2>Unique Code Generator</h2>
      <p>Click the button to generate a unique code.</p>
      <button onClick={generateCode}>Generate Code</button>
      {uniqueCode && (
        <div>
          <h3>Generated Code:</h3>
          <p>{uniqueCode}</p>
        </div>
      )}
    </div>
  );
};

export default UniqueCodeGenerator;
