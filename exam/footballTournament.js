function footballTournament(input) {
    let team = input[0];
    let matchesCount = Number(input[1]);

    let points = 0;
    let wCounter = 0;
    let dCounter = 0;
    let lCounter = 0;

    for (let i = 2; i < input.length; i++) {
        if (matchesCount < 1) {
            console.log(`${team} hasn't played any games during this season.`);
            break;
        }

        let matchResult = input[i];

        switch (matchResult) {
            case 'W': points += 3; wCounter++;
                break;
            case 'D': points += 1; dCounter++;
                break;
            case 'L': lCounter++;
                break;
        }
    }

    if (matchesCount >= 1) {
        console.log(`${team} has won ${points} points during this season.`);
        console.log(`Total stats:`);
        console.log(`## W: ${wCounter}`);
        console.log(`## D: ${dCounter}`);
        console.log(`## L: ${lCounter}`);
        console.log(`Win rate: ${((wCounter / matchesCount) * 100).toFixed(2)}%`);
    }
}

footballTournament(["Liverpool", "10", "W", "D", "D", "W", "L", "W", "D", "D", "W", "W"]);