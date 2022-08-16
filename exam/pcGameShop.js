function pcGameShop(input) {
    let gamesSold = Number(input[0]);
    let heartstoneCount = 0;
    let forniteCount = 0;
    let overwatchCount = 0;
    let othersCount = 0;

    for (let i = 1; i < input.length; i++) {
        let gameName = input[i];

        switch (gameName) {
            case 'Hearthstone': heartstoneCount++; break;
            case 'Fornite': forniteCount++; break;
            case 'Overwatch': overwatchCount++; break;
            default: othersCount++; break;
        }
    }

    console.log(`Hearthstone - ${(heartstoneCount / gamesSold * 100).toFixed(2)}%`);
    console.log(`Fornite - ${(forniteCount / gamesSold * 100).toFixed(2)}%`);
    console.log(`Overwatch - ${(overwatchCount / gamesSold * 100).toFixed(2)}%`);
    console.log(`Others - ${(othersCount / gamesSold * 100).toFixed(2)}%`);
}

pcGameShop(["4", "Hearthstone", "Fornite", "Overwatch", "Counter-Strike"]);