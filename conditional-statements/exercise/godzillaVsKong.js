function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let statistsCount = Number(input[1]);
    let outfitPrice = Number(input[2]);

    let decor = budget * 0.1;
    let totalMoneyForOutfit = statistsCount * outfitPrice;

    if (statistsCount >= 150) {
        totalMoneyForOutfit *= 0.9;
    }

    let totalSum = decor + totalMoneyForOutfit;


    if (budget >= totalSum) {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(budget - totalSum).toFixed(2)} leva left.`);
    } else {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(totalSum - budget).toFixed(2)} leva more.`);
    }
}

godzillaVsKong(["9587.88", "222", "55.68"]);