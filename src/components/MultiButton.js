import React from "react";

function MultiButton() {
  function handleClick4(number) {
    console.log(`Button ${number} was clicked`);
  }
  function handleClick5() {
    console.log(`we can do this `)
    
  }
  function handleClick6() {
    console.log("you the best");
  }

  return (
    <div>
      <button onClick={handleClick4}>Button 1</button>
      <button onClick={handleClick5}>Button 2</button>
      <button onClick={handleClick6}>Button 3</button>
    </div>
  );
}

export default MultiButton;
