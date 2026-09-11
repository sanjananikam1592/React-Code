import React, { useEffect, useState } from 'react'

function App() {

  const[count, setcount] = useState(11)
  
  //Bussiness logic

useEffect(()=>{

  //callback function - any operation you have to perform

  /*console.log("Hello from Vscode")
  console.log("Hello from Vscode2");
   console.log("Hello from Vscode3");
*/
console.log("Re-render because count is changed " +count)

},[count])

//UI

  return (
    <div>
      <h1>useEffect Hooks in ReactJS</h1>
      <h3>heyy</h3>
      <h2>Count : {count } </h2>
    </div>
  )
}

export default App;