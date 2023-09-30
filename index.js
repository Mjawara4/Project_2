// contstant

// apps state (variables)
let board;
let turn = 'X';

// function

function init(){
    board = [
        '','','',
        '','','',
        '','',''
    ];
    render();
};

init();

function render() {
    board.forEach(functiom(mark, index){
        console.log(mark, index);
    // this sets the text context of the square of the same position to the mark on the board/.    });
    squares[index].textContent = mark;
    });
};

// cached element references
const squares =
    Array.from(document.querySelectorAll('#board div'));

    // event listener


