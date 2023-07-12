const boardModule = (() => {
    let sqArr = Array(9).fill(null);

    const addMark = (mark, pos) => {
        if (mark.toLowerCase() === "o" || mark.toLowerCase() === "x") {
            let index = pos - 1;
            if (sqArr[index] === null) {
                sqArr[index] = mark.toLowerCase();
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

    return {
        addMark,
        clearBoard,
        getBoardArr
    };
})();

const displayControllerModule = ((doc, boardMod) => {
    const boardArr = Array.from(doc.querySelectorAll(".square"));

    const displayBoard = () => {
        const arr = boardMod.getBoardArr();
        for (let index = 0; index < arr.length; index++) {
            const mark = arr[index];
            boardArr[index].textContent = mark;
        }
    };

    return {
        displayBoard
    }
})(document, boardModule);

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

        xTurn = !xTurn;
    });
});