// import { useState } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css'
// import Calculator from './Calculator';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//      <Calculator/>
//     </>
//   )
// }

// export default App

// src/App.js
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calculator from './Calculator';

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;
