const boardModule = (() => {
    let sqArr = Array(9).fill(null);

    const addMark = (mark, pos) => {
        if (mark.toLowerCase() === "o" || mark.toLowerCase() === "x") {
            let index = pos - 1;
            sqArr[index] = mark.toLowerCase();
        }
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

const playerFactory = (mark, boardMod) => {
    this.mark = mark;
    this.boardMod = boardMod;
    this.addMark = (pos) => {
        boardMod.addMark(this.mark, pos);
    };

    return {
        mark,
        addMark
    }
}
