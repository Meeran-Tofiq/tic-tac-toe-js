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

