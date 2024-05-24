import React, { useState } from 'react';

function MultiplicationTable() {
  const [multiplier, setMultiplier] = useState('');
  const [table, setTable] = useState([]);

  const generateTable = () => {
    const num = parseInt(multiplier);
    if (!isNaN(num)) {
      const newTable = [];
      for (let i = 1; i <= 10; i++) {
        newTable.push(`${num} * ${i} = ${num * i}`);
      }
      setTable(newTable);
    } else {
      alert('Please enter a valid number.');
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
      <div>
        {table.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default MultiplicationTable;
