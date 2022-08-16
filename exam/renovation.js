function renovation(input) {
    let wallHeightM = Number(input[0]);
    let wallWidthM = Number(input[1]);
    let percentNoPainting = Number(input[2]);
    let walls = 4;

    let livingRoomArea = wallHeightM * wallWidthM * walls;
    let spaceForPainting = Math.ceil(livingRoomArea * (1 - percentNoPainting / 100));

    let paintedSpace = 0;
    let totalLiters = 0;

    for (i = 3; i < input.length; i++) {
        if (input[i] === "Tired!") {
            console.log(`${spaceForPainting - paintedSpace} quadratic m left.`);
            break;
        }

        let litersIteration = Number(input[i]);

        totalLiters += litersIteration;
        paintedSpace += litersIteration;
    }

    if (paintedSpace === spaceForPainting) {
        console.log("All walls are painted! Great job, Pesho!");
    } else if (paintedSpace > spaceForPainting) {
        console.log(`All walls are painted and you have ${totalLiters - spaceForPainting} l paint left!`);
    }
}

renovation(["3", "5", "10", "2", "3", "4", "Tired!"]);