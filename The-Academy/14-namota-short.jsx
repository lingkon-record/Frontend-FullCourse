import React, { useState } from 'react';

function MultiplicationTable() {
  const [multiplier, setMultiplier] = useState('');
  
  const generateTable = () => {
    const num = parseInt(multiplier);
    if (!isNaN(num)) {
      return Array.from({ length: 10 }, (_, i) => (
        <div key={i}>{`${num} * ${i + 1} = ${num * (i + 1)}`}</div>
      ));
    } else {
      return <div>Please enter a valid number.</div>;
    }
  };

  return (
    <div>
      <label htmlFor="multiplier">Enter a number:</label>
      <input
        type="number"
        id="multiplier"
        value={multiplier}
        onChange={(e) => setMultiplier(e.target.value)}
        min="1"
      />
      <button onClick={generateTable}>Generate Table</button>
      <div>{generateTable()}</div>
    </div>
  );
}

export default MultiplicationTable;
