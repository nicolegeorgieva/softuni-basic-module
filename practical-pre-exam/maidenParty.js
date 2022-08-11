function maidenParty(input) {
    let maidenPartyPrice = Number(input[0]);
    let loveLettersCount = Number(input[1]);
    let waxRosesCount = Number(input[2]);
    let keychainsCount = Number(input[3]);
    let cartoonsCount = Number(input[4]);
    let wishesCount = Number(input[5]);

    let loveLetterPrice = 0.60;
    let waxRosePrice = 7.20;
    let keychainPrice = 3.60;
    let cartoonPrice = 18.20;
    let wishPrice = 22;

    let sum = loveLettersCount * loveLetterPrice + waxRosesCount * waxRosePrice + keychainsCount * keychainPrice + cartoonsCount * cartoonPrice + wishesCount * wishPrice;

    let stuffCount = loveLettersCount + waxRosesCount + keychainsCount + cartoonsCount + wishesCount;

    let discount = 35;
    let hostingExpense = 10;


    if (stuffCount >= 25) {
        sum *= (1 - discount / 100);
    }

    sum *= 1 - hostingExpense / 100;


    if (sum >= maidenPartyPrice) {
        console.log(`Yes! ${(sum - maidenPartyPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(maidenPartyPrice - sum).toFixed(2)} lv needed.`);
    }
}

maidenParty(["40.8", "20", "25", "30", "50", "10"]);