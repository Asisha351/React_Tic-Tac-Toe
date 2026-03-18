import { useState } from "react";


//matrix of 3x3 with i=0,j=3
const intialGameboard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({onSelectSquare, activePlayerSymbol}) {
    const[gameboard, setGameboard] = useState(intialGameboard);

    function handleSelectSquare(rowIndex, colIndex){
        setGameboard((prevGameboard) => {
            const updatedGameBoard = [...prevGameboard.map(innerArray => [...innerArray] )];
            updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedGameBoard;
        });
        onSelectSquare();
    }

    //map function iterates through the gameboard array, takes each element as inout 
    //to function and returns a new array with the results of calling the function on each element.
    return (
        <ol id="game-board">
            {gameboard.map((row, rowIndex) => ( //gameboard[rowIndex] = row , only outer array is mapped

                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => ( //row[colIndex] = playerSymbol, only inner array is mapped

                            //Each square is another list item.
                            <li key={colIndex}> 
                                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                                    {playerSymbol}
                                </button>
                            </li>

                        ))}
                    </ol>
                </li>

            ))}
        </ol>
    );
}

