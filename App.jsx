



function App() {

    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6], 
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
        ];
          //----- app's state (variables) -----

    const [board, setBoard] = React.useState(['','','','','','','','','']);
    let turn = 'X';
    let win;
    const [currentTurn, setCurrentTurn] = useState('X');


function handleTurn(event) {
    // let idx = squares.findIndex(function(square) {
    //     return square === event.target;
    // });
    let idx = event.target.id

    if (gameOver == false) {
        let newBoard = [...board]
        newBoard[idx] = currentTurn;
        setBoard(newBoard)

        // phase 5
        //turn = turn === 'X' ? 'O' : 'X';

        
        setCurrentTurn(currentTurn === 'X' ? 'O' : 'X');
        //win = getWinner();
        //render();
    }
};    
  
    return (
    <div>
        <h1>Tic-React-Toe</h1>
    // update message
        {/* <h2>It's X's turn!</h2> */}
        <div className="message">It's {currentTurn}'s turn </div>

    <div class="flex-container flex-column">
        <div class="flex-container flex-wrap" id="board" onClick={handleTurn}>

        {board.map((value, idx)=> {
            return (
                <div class="square" key={idx} id={idx} >{value}</div>
        )
        }

        )}

           
        </div>
    <button id="reset-button">reset</button>
    </div>
    </div>

      )
    }

ReactDOM.render(<App />, root)

    