function club(input) {
    let targetProfit = Number(input[0]);
    let totalProfit = 0;

    for (i = 1; i < input.length; i += 2) {
        let currentCase = input[i];

        if (currentCase === "Party!") {
            console.log(`We need ${(targetProfit - totalProfit).toFixed(2)} leva more.`);
            break;
        }

        let cocktailsCount = Number(input[i + 1]);
        let cocktailName = currentCase;

        if ((cocktailName.length * cocktailsCount) % 2 !== 0) {
            totalProfit += (cocktailName.length * cocktailsCount) * 0.75;
        } else {
            totalProfit += cocktailName.length * cocktailsCount;
        }

        if (totalProfit >= targetProfit) {
            console.log("Target acquired.");
        }
    }

    console.log(`Club income - ${totalProfit.toFixed(2)} leva.`);
}

club(["500", "Bellini", "6", "Bamboo", "7", "Party!"]);