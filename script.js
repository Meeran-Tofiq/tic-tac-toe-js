const gameBoard = ((doc) => {
    let sqArr = Array(9).fill(null);

    const addMark = (mark, ind) => {
        if (mark.toLowerCase === "o" || mark.toLowerCase === "x")
            sqArr[ind] = mark.toLowerCase;
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
});