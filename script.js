const boardModule = (() => {
    let sqArr = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
    let win = false;

    const addMark = (mark, pos) => {
        if (win === true) {
            return false;
        }
        if (mark.toLowerCase() === "o" || mark.toLowerCase() === "x") {
            let x = Math.floor((pos-1) / 3);
            let y = Math.floor((pos-1) % 3);
            if (sqArr[x][y] === null) {
                sqArr[x][y] = mark.toLowerCase();
                win = checkForWin(mark.toLowerCase(), x, y);
                return true;
            }
        }
        return false;
    };

    const clearBoard = () => {
        sqArr = Array(9).fill(null);
    };

    const getBoardArr = () => {
        return sqArr;
    };

    const checkForWin = (mark, x, y) => {
        for (let i = 0; i < 3; i++) {
            if (sqArr[x][i] !== mark) {break;}
            if(i === 2) {return true;}
        }

        for (let i = 0; i < 3; i++) {
            if (sqArr[i][y] !== mark) {break;}
            if(i === 2) {return true;}
        }

        if(x === y) {
            for (let i = 0; i < 3; i++) {
                if (sqArr[i][i] !== mark) {break;}
                if(i === 2) {return true;}
            }
        }

        if(x + y == 2){
            for(let i = 0; i < 3; i++){
                if(sqArr[i][2-i] !== mark) {break;}
                if(i === 2){return true;}
            }
        }

        return false;
    };

    const getWin = () => {
        return win;
    }

    return {
        addMark,
        clearBoard,
        getBoardArr,
        getWin
    };
})();

const displayControllerModule = ((doc) => {
    const boardArr = Array.from(doc.querySelectorAll(".square"));

    const displayBoard = () => {
        const arr = boardModule.getBoardArr();
        for (let x = 0; x < arr.length; x++) {
            for (let y = 0; y < arr[x].length; y++) {
                const mark = arr[x][y];
                const pos = x*3 + y;
                boardArr[pos].textContent = mark;
            }
        }
    };

    return {
        displayBoard
    }
})(document);

const playerFactory = (mark) => {
    mark = mark;
    addMark = (pos) => {
        let completed = boardModule.addMark(mark, pos);
        displayControllerModule.displayBoard();
        return completed;
    };

    return {
        mark,
        addMark
    }
}

let playerX = playerFactory("X");
let playerO = playerFactory("O");
let xTurn = true;

const squares = Array.from(document.querySelectorAll(".square"));

squares.forEach(element => {
    element.addEventListener("click", () => {
        const pos = element.id;
        if(xTurn) {
            playerX.addMark(pos);
        } else {
            playerO.addMark(pos)
        }

        if(boardModule.getWin()) {
            console.log("YOU WONNNNNNNNNNNNNNNNNNNNNNNN");
        }

        xTurn = !xTurn;
    });
});