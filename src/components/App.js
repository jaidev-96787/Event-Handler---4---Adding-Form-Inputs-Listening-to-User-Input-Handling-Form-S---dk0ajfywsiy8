import React from 'react'
import '../styles/App.css';
const App = () => {

  const handleDoubleClick = (event) =>{
   if(event.target.id === "dblclick-btn"){
    console.log("I was double clicked")
   }
  }
  const handleClick = (event) => {
   if(event.target.type === "submit"){
    console.log("I was not double clicked")
   }
  }
  return (
    <div id="main">
      <button id="dblclick-btn" onClick={handleClick} onDoubleClick={handleDoubleClick}>Double click me</button>
    </div>
  )
}

export default App;
