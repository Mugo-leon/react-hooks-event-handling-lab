// Code Keypad Component Here

import React from 'react';

function Keypad() {
  // Event handler for the change event
  const handleChange = () => {
    console.log('Entering password...');
  };

  return (
    <div>
      {/* Input with type="password" and event handler */}
      <input type="password" onChange={handleChange} />
    </div>
  );
}

export default Keypad;
