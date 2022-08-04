function cake(input) {
    let cakeWidth = Number(input[0]);
    let cakeHeight = Number(input[1]);
    let cakePiecesCount = cakeWidth * cakeHeight;
    let cakePiecesTaken = 0;

    for (let i = 2; i < input.length; i++) {
        let piecesLeft = cakePiecesCount - cakePiecesTaken;

        if (piecesLeft <= 0) {
            break;
        }

        if (input[i] === "STOP" && cakePiecesTaken <= cakePiecesCount) {
            console.log(`${cakePiecesCount - cakePiecesTaken} pieces are left.`);
            break;
        }

        cakePiecesTaken += Number(input[i]);
    }

    if (cakePiecesCount < cakePiecesTaken) {
        console.log(`No more cake left! You need ${cakePiecesTaken - cakePiecesCount} pieces more.`);
    }
}

cake(["10", "10", "20", "20", "20", "20", "21"]);


