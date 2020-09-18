import React from 'react';
import './App.css';
import Navbar from './components/layouts/Navbar';
import SudokuBoard from './components/Sudoku/SudokuBoard';


function App() {
  return (
    <div className="App">
      <Navbar />
      <SudokuBoard />
    </div>
  );
}

export default App;
