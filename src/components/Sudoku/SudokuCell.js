import React from 'react'

const SudokuCell = ({ number }) => {
    const onClick = (e) => {
        
        if(!number){
            e.target.style.backgroundColor = "#000";
        }
    }
    return <div className={number ? 'sudoku-cell disabled' : 'sudoku-cell'} onClick={onClick}>{number ? number : ''}</div>;
}

export default SudokuCell
